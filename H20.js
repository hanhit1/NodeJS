import { hotels as myHotel, misc, promotionPercentCalc } from "./hotel.js";

for (let hotel of myHotel) {
    const randomEmoji = misc.emojis[Math.floor(Math.random() * misc.emojis.length)];
    hotel.emoji = randomEmoji;
}
let cheapest = myHotel[0];
let bestPrice = myHotel[0];
let lowestCleanFee = myHotel[0];

for (let hotel of myHotel) {
    const promotionPercent = promotionPercentCalc(hotel.price, hotel.promotionPrice);
    hotel.promotionPercent = promotionPercent;
    if (Number(hotel.promotionPrice.replace(/[\$,]/g, '')) < Number(cheapest.promotionPrice.replace(/[\$,]/g, ''))) {
        cheapest = hotel;
    }
    if (promotionPercent < parseFloat(bestPrice.promotionPercent)) {
        bestPrice = hotel;
    }
    if (Number(hotel.cleaningFee.replace(/[\$,]/g, '')) < Number(lowestCleanFee.cleaningFee.replace(/[\$,]/g, ''))) {
        lowestCleanFee = hotel;
    }
}


for (let hotel of myHotel) {
    hotel.tags = [];  

    if (Number(hotel.promotionPrice.replace(/[\$,]/g, '')) === Number(cheapest.promotionPrice.replace(/[\$,]/g, ''))) {
        hotel.tags.push('cheapest');
    }
    if (hotel.promotionPercent === bestPrice.promotionPercent) {
        hotel.tags.push('best-price');
    }
    if (Number(hotel.cleaningFee.replace(/[\$,]/g, '')) === Number(lowestCleanFee.cleaningFee.replace(/[\$,]/g, ''))) {
        hotel.tags.push('lowest-clean-fee');
    }
}

console.log(myHotel);
