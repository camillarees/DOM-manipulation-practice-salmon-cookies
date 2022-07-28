"use strict";

let hours = ["6am", "7am", "8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm"];
let locations = ['seattle', 'tokyo', 'dubai', 'paris', 'lima'];

function randomNumberCust(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min );
}

// function getH3Names (){
  for(let i = 0; i < locations.length; i++) {
    let h3Name = document.getElementById(locations[i].name);
    let li = document.createElement('li');
    li.innerText = h3Name;
    console.log(h3Name);
  }

  // function getHoursList (){
    for (let i = 0; i <= hours.length; i++) {
      let hour = hours[i];
      let li = document.createElement('li');
      li.innerText = hour;
      console.log(hour);
      }

// Objects

let seattle = {
  name: 'Seattle',
  minCust: 23,
  maxCust: 65,
  avgSale: 6.3,
  hourlyCust: [],
  hourlyCookies: [],
  getRandomCust: function() {
    return randomNumberCust(this.minCust, this.maxCust);
  },
  getAvgCookies: function() {
     {return Math.floor(this.avgSale * this.getRandomCust())};
  },
  displayAvgCookies: function () {
    let avgCookies = getAvgCookies();
    let li = document.createElement('li');
    li.innerText = avgCookies;
    console.log(avgCookies);
  }
};
for(let i = 0; i < 14; i++) {
  seattle.hourlyCust.push(seattle.getRandomCust());
}
for(let i = 0; i < 14; i++) {
  seattle.hourlyCookies.push(seattle.getAvgCookies());
}
for(let i = 0; i < 14; i++) {
  seattle.displayAvgCookies();
}
console.log(seattle);

let tokyo = {
    name: 'Tokyo',
    minCust: 3,
    maxCust: 24,
    avgSale: 1.2,
    hourlyCust: [],
    hourlyCookies: [],
    getRandomCust: function() {
      return randomNumberCust(this.minCust, this.maxCust);
    },
    getAvgCookies: function() {
      {return Math.floor(this.avgSale * this.getRandomCust())};
   },
  };
  for(let i = 0; i < 14; i++) {
    tokyo.hourlyCust.push(tokyo.getRandomCust());
  }
  for(let i = 0; i < 14; i++) {
    tokyo.hourlyCookies.push(tokyo.getAvgCookies());
  }
  console.log(tokyo);

let dubai = {
    name: 'Dubai',
    minCust: 11,
    maxCust: 38,
    avgSale: 3.7,
    hourlyCust: [],
    hourlyCookies: [],
    getRandomCust: function() {
      return randomNumberCust(this.minCust, this.maxCust);
    },
    getAvgCookies: function() {
      {return Math.floor(this.avgSale * this.getRandomCust())};
   },
  };
  for(let i = 0; i < 14; i++) {
    dubai.hourlyCust.push(dubai.getRandomCust());
  }
  for(let i = 0; i < 14; i++) {
    dubai.hourlyCookies.push(dubai.getAvgCookies());
  }
  console.log(dubai);

let paris = {
  name: 'Paris',
  minCust: 20,
  maxCust: 28,
  avgSale: 2.3,
  hourlyCust: [],
  hourlyCookies: [],
  getRandomCust: function() {
    return randomNumberCust(this.minCust, this.maxCust);
  },
  getAvgCookies: function() {
    {return Math.floor(this.avgSale * this.getRandomCust())};
 },
};
for(let i = 0; i < 14; i++) {
  paris.hourlyCust.push(paris.getRandomCust());
}
for(let i = 0; i < 14; i++) {
  paris.hourlyCookies.push(paris.getAvgCookies());
}
console.log(paris);

let lima = {
    name: 'Lima',
    minCust: 2,
    maxCust: 16,
    avgSale: 4.6,
    hourlyCust: [],
    hourlyCookies: [],
    getRandomCust: function() {
      return randomNumberCust(this.minCust, this.maxCust);
    },
    getAvgCookies: function() {
      {return Math.floor(this.avgSale * this.getRandomCust())};
   },
  };
  for(let i = 0; i < 14; i++) {
    lima.hourlyCust.push(lima.getRandomCust());
  }
  for(let i = 0; i < 14; i++) {
    lima.hourlyCookies.push(lima.getAvgCookies());
  }
console.log(lima);


