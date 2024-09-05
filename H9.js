function path() {
    const today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const yyyy = today.getFullYear();

    return 'cart-'+ dd + '-' + mm + '-' + yyyy + '.js';
}
function useXMLHttpRequest(){
const XMLHttpRequest= require('xmlhttprequest').XMLHttpRequest;
const xmlhttp = new XMLHttpRequest(); 
xmlhttp.open("GET", "https://dummyjson.com/carts", true);
xmlhttp.send();
xmlhttp.onload = function () {
    const cart = xmlhttp.responseText;
    const fs = require('fs');
    fs.writeFile(path(),cart, (err) => {
        if (err) throw err;
        console.log('saved');
    });
};
}
//useXMLHttpRequest();
function useFetch(){
    const fetch = require('node-fetch');
    fetch("https://dummyjson.com/carts")
    .then(res => res.text())
    .then(cart => {
        const fs = require('fs');
        fs.writeFile(path(),cart, (err) => {
            if (err) throw err;
            console.log('saved');
        });
    });
}
//useFetch();
function useAxios(){
    const axios = require('axios');
    axios.get("https://dummyjson.com/carts")
    .then(res => {
        const fs = require('fs');
        fs.writeFile(path(),JSON.stringify(res.data,null,2), (err) => {
            if (err) throw err;
            console.log('saved');
        });
    });
}
useAxios();


