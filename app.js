"use strict";

let seattle = {
  minCust: 23,
  maxCust: 65,
  avgSale: 6.3,
  randomNumberCust: function () {
    console.log(this);
  },
};

let tokyo = {
    minCust: 3,
    maxCust: 24,
    avgSale: 1.2,
    randomNumberCust: function () {
        console.log(this);
      },
    };

let dubai = {
    minCust: 11,
    maxCust: 38,
    avgSale: 3.7,
    randomNumberCust: function () {
        console.log(this);
      },
    };

let paris = {
  minCust: 20,
  maxCust: 28,
  avgSale: 2.3,
  randomNumberCust: function () {
    console.log(this);
  },
};

let lima = {
    minCust: 2,
    maxCust: 16,
    avgSale: 4.6,
    randomNumberCust: function () {
        console.log(this);
      },
    };


function randomNumberCust(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min );
}

randomNumberCust (minCust, maxCust);

// let hours = ["6am", "7am", "8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm"];

// function cookiesPerHour () {

//     for (let i = 0; i <= hours.length; i++) {
//         let li = document.createElement('li');
//         li.innerText = hours[i];
//         list.append(li);

// }
// }
// cookiesPerHour();


// let totalHours = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

// function sumTotal(sumArr) {    
//   let sumAB = sumTotal(sumArr[0], sumArr[1])[0];
//   let sumABC = sumTotal(sumAB, sumArr[2])[0];
//   let result = [sumABC, string5];
//   console.log(sumABC);
//   return result;
// }

// testSumArray(totalHours);

