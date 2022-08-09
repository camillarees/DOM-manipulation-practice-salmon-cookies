
let locations = ['seattle', 'tokyo', 'dubai', 'paris', 'lima'];
let hours = ["6am", "7am", "8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm"];
let allLocations = [];
let locationTotals = [];
let grandTotal = 0;

function randomNumberCust(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min );
}

function createTableHeader() {
  let table = document.getElementById('table');
  let headerRow = document.createElement('tr');
  let headerElem = document.createElement('th');
  table.appendChild(headerRow);
  headerRow.appendChild(headerElem);
  headerElem.innerText = 'Hours';

  for(let i = 0; i < hours.length; i++) {
    headerElem = document.createElement('th');
    headerElem.innerText = hours[i];
    headerRow.appendChild(headerElem);
    locationTotals[i] = 0;
  };

  let dailyLocationTotals = document.createElement('td');
  dailyLocationTotals.textContent = "Daily Location Totals";
  headerRow.appendChild(dailyLocationTotals);
};

function createLocationRows(){
  for(let i = 0; i < allLocations.length; i++) {
    allLocations[i].render();
    // let tableBody = document.createElement('tbody');
    // table.appendChild(tableBody);
    // let tableRow = document.createElement('tr');
    // tableBody.appendChild(tableRow);
    // let locationNameData = document.createElement('td');
    // locationNameData.textContent = allLocations[i].name;
    // tableRow.appendChild(locationNameData);
  };
};

createTableHeader();

// createLocationRows();

  // Replace all object literals for the salmon cookie stand with a single constructor function that, when called with the ‘new’ keyword, it creates a new instance.

  function Location(name, minCust, maxCust, avgSale) {
    this.name = name;
    this.minCust = minCust;
    this.maxCust = maxCust;
    this.avgSale = avgSale;
    this.hourlyCust = [];
    this.hourlyCookies = [];
    this.total = 0;
    allLocations.push(this);
  }

  let seattle = new Location('seattle', '23', '68', '6.3');
  let tokyo = new Location('tokyo', '3', '24', '1.2');
  let dubai = new Location('dubai', '11', '38', '3.7');
  let paris = new Location('paris', '20', '28', '2.3');
  let lima = new Location('lima', '2', '16', '4.6');

  // Replace the lists of data for each store and build a single table of data instead. 
 
  Location.prototype.getRandomCust = function () {
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
    this.getAvgCookies();
    let table = document.getElementById('table');
    let tableBody = document.createElement('tbody');
          table.appendChild(tableBody);
    let tableRow = document.createElement('tr');
          tableBody.appendChild(tableRow);
    let locationName = document.createElement('td');
      locationName.textContent = this.name;
          tableRow.appendChild(locationName);
        for(let i = 0; i < hours.length; i++) {
          let tableData = document.createElement('td');
          tableData.textContent = this.hourlyCookies[i];
          tableRow.appendChild(tableData);
        }
    let dailyLocationTotalsData = document.createElement('td');
        dailyLocationTotalsData.textContent = this.total;
        tableRow.appendChild(dailyLocationTotalsData);
    grandTotal += this.total
  };

  function createTableFooter() {
    let tableFooter = document.getElementById('table-footer');
    // tableFooter.setAttribute('id','tfoot');
    // table.appendChild(tableFooter);
    let tableRow = document.createElement('tr');
      tableFooter.appendChild(tableRow);
    let rowHeader = document.createElement('th');
    rowHeader.textContent = 'Totals';
    tableRow.appendChild(rowHeader);
    for(let i = 0; i < hours.length; i++) {
      let totalofTotals = 0;
      for(let j = 0; j < allLocations.length; j++) {
        totalofTotals += allLocations[j].hourlyCookies[i];
    }
    let hourlyTotals = document.createElement('td');
    hourlyTotals.textContent = totalofTotals;
    tableRow.appendChild(hourlyTotals); 
  }
  let grandTotalCell = document.createElement('td');
    grandTotalCell.textContent = grandTotal;
    tableRow.appendChild(grandTotalCell);
    tableFooter.appendChild(tableRow);
};

// Each cookie stand location should have a separate render() method that creates and appends its row to the table

createLocationRows();

createTableFooter();

// Event Handler

function addLocation(event) {
  event.preventDefault();
  let form = event.target;
  let locationName = form.name.value;
  let locationMinCust = parseInt(form.minCust.value);
  let locationMaxCust = parseInt(form.maxCust.value);
  let locationAvgSale = parseFloat(form.avgSale.value);
  console.log(locationName, locationMinCust, locationMaxCust, locationAvgSale);
  let newLocation = new Location(locationName, locationMinCust, locationMaxCust, locationAvgSale);
  document.getElementById('table-footer').innerHTML = null;
  newLocation.render();
  createTableFooter();

  form.name.value = null;
  form.minCust.value = null;
  form.maxCust.value = null;
  form.avgSale.value = null;

  
};

// Event Listener

let addLocationForm = document.getElementById('addLocationForm');
addLocationForm.addEventListener('submit', addLocation);




 
