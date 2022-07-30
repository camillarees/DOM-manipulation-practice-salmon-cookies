"use strict";

let locations = ['seattle', 'tokyo', 'dubai', 'paris', 'lima'];
let hours = ["6am", "7am", "8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm"];
let allLocations = [];
// locationTotals = [];

function randomNumberCust(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min );
}

function createTableHeader() {
  let tableHeader = document.getElementById('table-header');
  let headerElem = document.createElement('th');
  tableHeader.appendChild(headerElem);

  for(let i = 0; i < hours.length; i++) {
    headerElem = document.createElement('th');
    headerElem.innerText = hours[i];
    tableHeader.appendChild(headerElem);
    // locationTotals[i] = 0;
  };

  headerElem = document.createElement('th');
  headerElem.innerText = hours[i];
  tableHeader.appendChild(headerElem);
  // locationTotals[i] = 0
};

  // Replace all object literals for the salmon cookie stand with a single constructor function that, when called with the ‘new’ keyword, it creates a new instance.

  function Location(name, minCust, maxCust, avgSale, hourlyCust, hourlyCookies, total) {
    this.name = name;
    this.minCust = minCust;
    this.maxCust = maxCust;
    this.avgSale = avgSale;
    this.hourlyCust = hourlyCust;
    this.hourlyCookies = hourlyCookies;
    this.total = total;
    // allLocations.push(this);
  }

  let seattle = new Location('seattle', '23', '68', '6.3', [], [], 0);
  let tokyo = new Location('tokyo', '3', '24', '1.2', [], [], 0);
  let dubai = new Location('dubai', '11', '38', '3.7', [], [], 0);
  let paris = new Location('paris', '20', '28', '2.3', [], [], 0);
  let lima = new Location('lima', '2', '16', '4.6', [], [], 0);

  // Replace the lists of data for each store and build a single table of data instead. 
 
  Location.prototype.getRandomCust = function () {
      this.hourlyCust.push(this.getRandomCust());
      return randomNumberCust(this.minCust, this.maxCust);
     };

  Location.prototype.getAvgCookies = function () {
    for(let i = 0; i < hours.length; i++) {
      let avgCookies = Math.floor(this.avgSale * this.getRandomCust());
      this.hourlyCookies.push(avgCookies);
      this.total += avgCookies;
    }
  }

  // Display each stores data in a table format similar to what is below. Break each column by the hour and complete each row with a “Daily Location Total”.
  // The header row and footer row are each created in their own stand-alone function

  Location.prototype.render = function () {
    for(let i = 0; i < hours.length; i++) {
      let containerElem = document.getElementById('table-body')
      let tableRow = document.createElement('tr');
      let name = document.createElement('tr');
      let hourlyCookiesData = document.createElement('td');
      name.innerText = this.name;
      hourlyCookiesData.innerText = this.hourlyCookies;
      tableRow.appendChild(name);
      tableRow.appendChild(hourlyCookiesData);
      tableBody.appendChild(containerElem);
      console.log(containerElem);
      console.log(tableRow);
      console.log(name);
      console.log(hourlyCookiesData);
    }
  };

  Location.prototype.renderTotal = function () {
    let containerElem = document.getElementById('table-footer')
    let totalData = document.createElement('td');
    totalData.innerText = `${this.total} cookies`;
    tableRow.appendChild(totalData);
    tableBody.appendChild(containerElem);
  }  

// Each cookie stand location should have a separate render() method that creates and appends its row to the table
seattle.getRandomCust();
  tokyo.getRandomCust();
  dubai.getRandomCust();
  paris.getRandomCust();
  lima.getRandomCust();

  seattle.getAvgCookies();
  tokyo.getAvgCookies();
  dubai.getAvgCookies();
  paris.getAvgCookies();
  lima.getAvgCookies();
  
seattle.render();
tokyo.render();
dubai.render();
paris.render();
lima.render();

seattle.renderTotal();
tokyo.renderTotal();
dubai.renderTotal();
paris.renderTotal();
lima.renderTotal();

  seattle.render();
  tokyo.render();
  dubai.render();
  paris.render();
  lima.render();

  seattle.renderTotal();
  tokyo.renderTotal();
  dubai.renderTotal();
  paris.renderTotal();
  lima.renderTotal();



 
