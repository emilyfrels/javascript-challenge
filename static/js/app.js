// check to make sure printing to console
console.log("UFO javascript challenge");

// from data.js
var tableData = data;

// get reference to table body
var tbody = d3.select("tbody");
console.log(tbody);

// loop through data, console.log because we can, append 'tr', add data

data.forEach(function(ufoData) {

    // console.log [because we can] to confirm pulling correct object data
    console.log(ufoData);

    // append the table row element
    var row = tbody.append("tr");

    
    // add each ufo data value
    Object.entries(ufoData).forEach(function([key, value]) {
        console.log(key, value);

        // append a cell to the row for each value
        var cell = row.append("td");
        
        // append value to each cell
        cell.text(value);
    });
});
