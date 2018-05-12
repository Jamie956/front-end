//==============test currency1

// var currency = require('./currency');
// console.log('50 Canadian dollars equals this amount of US dollars:');
// console.log(currency.canadianToUS(50));
// console.log('30 US dollars equals this amount of Canadian dollars:');
// console.log(currency.USToCanadian(30));

//==============test currency2

var Currency = require('./currency2')
, canadianDollar = 0.91;
currency = new Currency(canadianDollar);
console.log(currency.canadianToUS(50));