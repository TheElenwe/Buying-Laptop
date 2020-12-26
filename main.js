let prompt = require('prompt-sync')({sigint: true});
 let price_laptop = prompt("Give me the price of the laptop ");
 let tax = prompt ("Tax :");


 price_laptop = parseFloat(price_laptop);
 tax = parseFloat(tax);

 let total_amount = (price_laptop * tax) /100

 let total = (price_laptop + total_amount)
 
console.log(total)
 




 
