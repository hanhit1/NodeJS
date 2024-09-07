const user = {
    name: "Hạnh",
    age: 28,
    email: "ngoconghanh2k4@gmail.com"
};
const address = {
    city: "Đà Nẵng",
    district: "Liên Chiểu",
    ward: "Hoà Khánh Bắc"
};
const result = {...user,
    address :{ ...address}
};
console.log(result);
const product = {
    name: "Iphone 13",
    price: 10000000,
    color: "red",
    brand: null,
    weight: undefined,
};
function reset(product) {
    return Object.fromEntries( Object.entries(product).filter(([key, value]) => value !== null && value !== undefined ));
}
console.log(product);
console.log(reset(product));
class person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
class student extends person {
    getName() {
        return this.name;
    }
    setName(name) {
        this.name = name;
    }
    getAge() {
        return this.age;
    }
    setAge(age) {
        this.age = age;
    }
}