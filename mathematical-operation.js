var onionPrice = 35;
var eggPricePerDozen = 110;
var totalPrice = onionPrice + eggPricePerDozen;
var priceDifference = eggPricePerDozen - onionPrice;
var eggQuantity = 24;
var totalEggPrice = 110*(24/12);
var moneyAvailable = 100;
var oragnePrice = 5;
var orangeQuantity = moneyAvailable/oragnePrice;

console.log('Onion Price/KG = ', onionPrice);
console.log('Egg Price/dozen = ', eggPricePerDozen);
console.log('Total Price with direct console log function = ', onionPrice + eggPricePerDozen);
console.log('Total Price in separate variable = ', totalPrice);
console.log('Egg Price and Onion Price Difference = ', priceDifference);
console.log('Total Egg Price = ', totalEggPrice);
console.log('Total Quantity of Orange = ', orangeQuantity);
