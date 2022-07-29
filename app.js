"use strict";

let locations = ['seattle', 'tokyo', 'dubai', 'paris', 'lima'];

function randomNumberCust(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min );
}

function getH3Names (){
  for(let i = 0; i < locations.length; i++) {
    let h3Name = document.getElementById(locations[i].name);
    let li = document.createElement('li');
    li.innerText = h3Name;
    console.log(h3Name);
  }
}

getH3Names();
  
let hours = ["6am", "7am", "8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm"];

// Objects

let seattle = {
  name: 'Seattle',
  minCust: 23,
  maxCust: 65,
  avgSale: 6.3,
  hourlyCust: [],
  hourlyCookies: [],
  total: 0,
  getRandomCust: function() {
    return randomNumberCust(this.minCust, this.maxCust);
  },
  getAvgCookies: function() {
     {return Math.floor(this.avgSale * this.getRandomCust())};
  },
  render: function () {
    let location = document.getElementById('seattle');
    for(let i = 0; i < 14; i++) {
      let li = document.createElement('li');
      let avgCookies = this.getAvgCookies();
      li.innerText = `${hours[i]}: ${avgCookies} cookies`;
      location.appendChild(li);
      console.log(li);
    }
    },
  renderTotal: function() {
      let total = document.getElementById('seattle');
      let li2 = document.createElement('li');
      let totalCookies = this.sumTotal();
      li2.innerText = `Total: ${totalCookies} cookies`;
      total.appendChild(li2);
      console.log(li2);
  },
  sumTotal: function() {
    return (this.total += this.getAvgCookies());
  },
};
for(let i = 0; i < 14; i++) {
  seattle.hourlyCust.push(seattle.getRandomCust());
}
for(let i = 0; i < 14; i++) {
  seattle.hourlyCookies.push(seattle.getAvgCookies());
}

seattle.render();

seattle.renderTotal();

console.log(seattle);

let tokyo = {
    name: 'Tokyo',
    minCust: 3,
    maxCust: 24,
    avgSale: 1.2,
    hourlyCust: [],
    hourlyCookies: [],
    total: 0,
    getRandomCust: function() {
      return randomNumberCust(this.minCust, this.maxCust);
    },
    getAvgCookies: function() {
       {return Math.floor(this.avgSale * this.getRandomCust())};
    },
    render: function () {
      let location = document.getElementById('tokyo');
      for(let i = 0; i < 14; i++) {
        let li = document.createElement('li');
        let avgCookies = this.getAvgCookies();
        li.innerText = `${hours[i]}: ${avgCookies} cookies`;
        location.appendChild(li);
        console.log(li);
      }
      },
    renderTotal: function() {
        let total = document.getElementById('tokyo');
        let li2 = document.createElement('li');
        let totalCookies = this.sumTotal();
        li2.innerText = `Total: ${totalCookies} cookies`;
        total.appendChild(li2);
        console.log(li2);
    },
    sumTotal: function() {
      return (this.total += this.getAvgCookies());
    },
  };
  for(let i = 0; i < 14; i++) {
    tokyo.hourlyCust.push(tokyo.getRandomCust());
  }
  for(let i = 0; i < 14; i++) {
    tokyo.hourlyCookies.push(tokyo.getAvgCookies());
  }
  
  tokyo.render();
  
  tokyo.renderTotal();
  
  console.log(tokyo);

let dubai = {
    name: 'Dubai',
    minCust: 11,
    maxCust: 38,
    avgSale: 3.7,
    hourlyCust: [],
    hourlyCookies: [],
      total: 0,
  getRandomCust: function() {
    return randomNumberCust(this.minCust, this.maxCust);
  },
  getAvgCookies: function() {
     {return Math.floor(this.avgSale * this.getRandomCust())};
  },
  render: function () {
    let location = document.getElementById('dubai');
    for(let i = 0; i < 14; i++) {
      let li = document.createElement('li');
      let avgCookies = this.getAvgCookies();
      li.innerText = `${hours[i]}: ${avgCookies} cookies`;
      location.appendChild(li);
      console.log(li);
    }
    },
  renderTotal: function() {
      let total = document.getElementById('dubai');
      let li2 = document.createElement('li');
      let totalCookies = this.sumTotal();
      li2.innerText = `Total: ${totalCookies} cookies`;
      total.appendChild(li2);
      console.log(li2);
  },
  sumTotal: function() {
    return (this.total += this.getAvgCookies());
  },
};
for(let i = 0; i < 14; i++) {
  dubai.hourlyCust.push(dubai.getRandomCust());
}
for(let i = 0; i < 14; i++) {
  dubai.hourlyCookies.push(dubai.getAvgCookies());
}

dubai.render();

dubai.renderTotal();

console.log(dubai);

let paris = {
  name: 'Paris',
  minCust: 20,
  maxCust: 28,
  avgSale: 2.3,
  hourlyCust: [],
  hourlyCookies: [],
  total: 0,
  getRandomCust: function() {
    return randomNumberCust(this.minCust, this.maxCust);
  },
  getAvgCookies: function() {
     {return Math.floor(this.avgSale * this.getRandomCust())};
  },
  render: function () {
    let location = document.getElementById('paris');
    for(let i = 0; i < 14; i++) {
      let li = document.createElement('li');
      let avgCookies = this.getAvgCookies();
      li.innerText = `${hours[i]}: ${avgCookies} cookies`;
      location.appendChild(li);
      console.log(li);
    }
    },
  renderTotal: function() {
      let total = document.getElementById('paris');
      let li2 = document.createElement('li');
      let totalCookies = this.sumTotal();
      li2.innerText = `Total: ${totalCookies} cookies`;
      total.appendChild(li2);
      console.log(li2);
  },
  sumTotal: function() {
    return (this.total += this.getAvgCookies());
  },
};
for(let i = 0; i < 14; i++) {
  paris.hourlyCust.push(paris.getRandomCust());
}
for(let i = 0; i < 14; i++) {
  paris.hourlyCookies.push(paris.getAvgCookies());
}

paris.render();

paris.renderTotal();

console.log(paris);

let lima = {
    name: 'Lima',
    minCust: 2,
    maxCust: 16,
    avgSale: 4.6,
    hourlyCust: [],
    hourlyCookies: [],
    total: 0,
    getRandomCust: function() {
      return randomNumberCust(this.minCust, this.maxCust);
    },
    getAvgCookies: function() {
       {return Math.floor(this.avgSale * this.getRandomCust())};
    },
    render: function () {
      let location = document.getElementById('lima');
      for(let i = 0; i < 14; i++) {
        let li = document.createElement('li');
        let avgCookies = this.getAvgCookies();
        li.innerText = `${hours[i]}: ${avgCookies} cookies`;
        location.appendChild(li);
        console.log(li);
      }
      },
    renderTotal: function() {
        let total = document.getElementById('lima');
        let li2 = document.createElement('li');
        let totalCookies = this.sumTotal();
        li2.innerText = `Total: ${totalCookies} cookies`;
        total.appendChild(li2);
        console.log(li2);
    },
    sumTotal: function() {
      return (this.total += this.getAvgCookies());
    },
  };
  for(let i = 0; i < 14; i++) {
    lima.hourlyCust.push(lima.getRandomCust());
  }
  for(let i = 0; i < 14; i++) {
    lima.hourlyCookies.push(lima.getAvgCookies());
  }
  
  lima.render();
  
  lima.renderTotal();
  
  console.log(lima);