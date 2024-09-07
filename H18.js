user = {
    name: "Hạnh",
    age: 28,
    email: "ngoconghanh@gmail.com",
    city: "Đà Nẵng",
}
function display(user) {
    const { name, age, email, city } = user;
    console.log(`Tên: ${name}`);
    console.log(`Tuổi: ${age}`);
    console.log(`Email: ${email}`);
    console.log(`Thành phố: ${city}`);
}
//display(user);
function logger(...args) {
    let result ='';
    for (const arg of args) {
        result += arg + '|';
    }
    if (result.length > 0) {
        result = result.slice(0, -1);
    }
    console.log(result);
}
//logger('Ha Noi', 'Da Nang', 'Ho Chi Minh');
async function fechData(params) {
    try{
    const response = await fetch("https://dummyjson.com/products");
    const data = await response.json();
    console.log(data);
    setTimeout(() => {
        console.log("Fetch data successfully!");
    }, 3000);
}
catch (error) {
    console.log("Fetch data failed!");
}
}
fechData();

