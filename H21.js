import { store } from "./store.js";
const firstProduct = store.products?.find(product => product.id === 1);
const specifications = firstProduct?.details?.specifications;
if (specifications) {
    console.log(specifications);
}
else {
    console.log("specifications can not be found");
}
const thirdProduct = store.products?.find(product => product.id === 3);

const price = thirdProduct?.getPrice?.();

if (price) {
    console.log(price);
} else {
    console.log("Không có thông tin giá.");
}