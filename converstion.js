// String Operation of Addition
var firstName = 'Sami';
var middleName = 'Meadad';
var lastName = 'Choudhury';
var fullName = firstName + ' ' + middleName + ' ' + lastName;
console.log('My full name: ', fullName);

var fName = 'Tasnuva';
var lName = 'Kawsar';
var gap = ' ';
var name = fName + gap + lName;
console.log('Full name of my love: ', name);


//Type Conversion
var onionPrice = '42';
var eggPrice = '30';
var totalPriceInString = onionPrice + eggPrice;
console.log('Total Price in String = ', totalPriceInString);
var totalPriceInNumber = parseInt(onionPrice) + parseInt(eggPrice);
console.log('Total Price in Number = ', totalPriceInNumber);

var sandlePrice = '70.99';
var shoePrice = '99.99';
var shoePriceNumber = parseFloat(shoePrice);
var sandlePriceNumber = parseFloat(sandlePrice);
var totalPriceBata = shoePriceNumber + sandlePriceNumber;
console.log('Total Price in Bata = ', totalPriceBata);