let prompt = require('prompt-sync')({sigint: true});
 let price_laptop = prompt("Give me the price of the laptop ");
 let tax = prompt ("Tax :");


 price_laptop = parseFloat(price_laptop);
 tax = parseFloat(tax);

 let total_amount = price_laptop +30
 console.log(total_amount)


 