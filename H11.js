const fs = require('fs');
const readline = require('readline');
const uuidv4 = require('uuid').v4;

function readUsers() {
  const data = fs.readFileSync('user.json');
  return JSON.parse(data);
}

function writeUsers(users) {
  fs.writeFileSync('user.json', JSON.stringify(users, null, 2));
}

const users = readUsers();

function getUsers(pageIndex, pageSize) {
  const totalDocs = users.length;
  const totalPage = Math.ceil(totalDocs / pageSize);
  const start = (pageIndex - 1) * pageSize;
  const end = start + pageSize;
  const result = users.slice(start, end);
  return {
    data: {
      users: result,
      totalPage: totalPage,
      totalDocs: totalDocs
    }
  };
}

function setUsers(userData) {
  users.push(userData);
  writeUsers(users);
  console.log('User đã được thêm');
}

function updateUser(userData) {
  const index = users.findIndex(user => user.id == userData.id);
    users[index] = userData;
    writeUsers(users);
    console.log('User đã được cập nhật');
}

function deleteUser(userId) {
  const index = users.findIndex(user => user.id == userId);
  if (index >= 0) {
    users.splice(index, 1);
    writeUsers(users);
    console.log('User đã được xóa');
  } else {
    console.log('User không tồn tại');
  }
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function main() {
  rl.question('Chọn chức năng:\n1. Hiển thị user\n2. Thêm user\n3. Cập nhật user\n4. Xóa user\n5. Thoát\n', (answer) => {
    switch (answer) {
      case '1':
        rl.question('Nhập trang số: ', (pageIndex) => {
          rl.question('Nhập số lượng user mỗi trang: ', (pageSize) => {
            console.log(JSON.stringify(getUsers(parseInt(pageIndex), parseInt(pageSize)), null, 2));
            main();
          });
        });
        break;
      case '2':
        rl.question('Nhập name user: ', (name) => {
          rl.question("Nhập role user: ", (role) => {
            rl.question("Nhập gender user: ",(gender) => {
              rl.question("Nhập nationality user: " , (nationality) => {
            let id = uuidv4();
          setUsers({id, name, role,gender, nationality});
          main(); 
        });
      });
    });
  });
        break;
      case '3':
        rl.question('Nhập id user : ', (userId) => {
          const user = users.find(user => user.id == userId);
          if (!user) {
            console.log('User không tồn tại'); 
            main(); 
          } else {
            console.log(user);
          rl.question('Nhập name user: ', (name) => {
            user.name = name;
            rl.question("Nhập role user: ", (role) => {
              user.role = role;
              rl.question("Nhập gender user: ",(gender) => {
                user.gender = gender; 
                rl.question("Nhập nationality user: " , (nationality) => {
                  user.nationality = nationality;
          updateUser(user);
          main(); 
                });
              });
            });
          });
        }
          
        });
        break;
      case '4':
        rl.question('Nhập id user: ', (userId) => {
          deleteUser(userId);
          main(); 
        });
        break;
      case '5':
        console.log('Thoát chương trình.');
        rl.close(); 
        break;
      default:
        console.log('Chức năng không tồn tại');
        main(); 
        break;
    }
  });
}

main();
