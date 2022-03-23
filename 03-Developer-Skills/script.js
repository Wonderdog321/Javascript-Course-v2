// Remember, we're gonna use strict mode in all scripts now!
'use strict';

//Code challenge #1
const printForecast = function (arr) {
  let forecast = '... ';
  for (let i = 0; i < arr.length; i++) {
    forecast += `${arr[i]}\xB0C in ${i + 1} days ...`;
  }
  return forecast;
};
const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];
console.log(printForecast(data1));
console.log(printForecast(data2));
