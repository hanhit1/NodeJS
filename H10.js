const uuidv4 = require('uuid').v4;
const orderId = new Set();
orderId.add(1);
const orderDetails = new Map();
const productsForOrder1 = [
    {
        productId: 1,
        productQuantity: 2,
        productName: "Bánh trung thu",
        price: 100
    },
    {
        productId: 2,
        productQuantity: 1,
        productName: "Lòng đèn",
        price: 200
    }
];

const productsForOrder2 = [
    {
        productId: 3,
        productQuantity: 3,
        productName: "Gấu bông",
        price: 150
    },
    {
        productId: 4,
        productQuantity: 2,
        productName: "Kẹo dẻo",
        price: 250
    }
];
orderDetails.set(1,productsForOrder1);
function addOrder(products){
    if (products.length == 0){
        console.log("Thêm ít nhất 1 sản phẩm");
        return ;
    }
    const id = uuidv4();
    orderId.add(id);
    orderDetails.set(id,products);
    console.log(`Đơn hàng id = ${id} đã được thêm`);
}
function deleteOrder(id){
    if (orderDetails.has(id)){
    orderId.delete(id);
    orderDetails.delete(id);
    console.log(`Đã xóa đơn hàng id = ${id}`);
    }  else {
    console.log(`Không có đơn hàng id = ${id}`);
}
}
function getOrder(id){
    if (orderDetails.has(id)){
        return orderDetails.get(id);
    }
    else {
        console.log(`Không có đơn hàng id = ${id}`);
        return null;
    }
}
function updateOrder(id,products){
    if (orderDetails.has(id)){
        let quantity=0;
        products.forEach(product => {
            quantity += product.quantity;
        });
        if (quantity==0){
            orderId.delete(id);
            orderDetails.delete(id);
            console.log(`Đã xóa đơn hàng id = ${id} vì tất cả sản phẩm có quantity = 0`);
        } else
        {
        orderDetails.set(id,products);
        console.log(`Đơn hàng id = ${id} đã được cập nhật`);
        }
    }
    else{
        console.log(`Không có đơn hàng id = ${id}`);
    }
}
function findMaxOrder(){
    
    let maxOrderIds = [];
    let max = 0;
    for (const id of orderId){
        let temp =0;
        const order = orderDetails.get(id);
        for (const product of order){
            temp +=product.productQuantity * product.price;
        }
        if (temp>max)
            {
                max=temp;
                maxOrderIds =[id];
            }
        else if (temp==max){
             maxOrderIds.push(id);
        }
    }
    return maxOrderIds;
}
addOrder(productsForOrder2);
console.log(findMaxOrder());
updateOrder(1,productsForOrder2);
console.log(orderDetails);
console.log(getOrder(1));
deleteOrder(1);
console.log(orderDetails);