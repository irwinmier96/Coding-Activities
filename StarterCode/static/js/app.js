// from data.js
var ufodata = data;

var tbody = d3.select('tbody')


// console.log(data);

// forEach the information from the data file into the HTML
var ufoTable = data.forEach(function(ufoReport) {
    //console.log(ufoReport);
    var row = tbody.append("tr");
    Object.entries(ufoReport).forEach(function([key, value]) {
      //console.log(key, value);
      // Append a cell to the row for each value
      // in the weather report object
      var cell = row.append("td");
      cell.text(value);
    });
  });

var submit = d3.select("#filter-btn");

//user input to filter the table
submit.on("click", function(){

    d3.event.preventDefault();

    // var InputElement = d3.select("#datetime");

    // var InputValue = InputElement.property("value");

    // var filteredData = ufodata.filter(ufo => ufo.datetime === InputValue);
    // console.log(filteredData);

    // var table = d3.select("#ufo-table");

    //ufodata.text(filteredData) //this receives errors

});


// filter the data based on userInput
function userInput() {
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("datetime");
  filter = input.value.toUpperCase();
  table = document.getElementById("ufo-table");
  tr = table.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }       
  }
};

function userCityInput() {
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("city");
  filter = input.value.toUpperCase();
  table = document.getElementById("ufo-table");
  tr = table.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[1];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }       
  }
};

function userStateInput() {
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("state");
  filter = input.value.toUpperCase();
  table = document.getElementById("ufo-table");
  tr = table.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[2];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }       
  }
};

function userCountryInput() {
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("country");
  filter = input.value.toUpperCase();
  table = document.getElementById("ufo-table");
  tr = table.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[3];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }       
  }
};

function userShapeInput() {
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("shape");
  filter = input.value.toUpperCase();
  table = document.getElementById("ufo-table");
  tr = table.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[4];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }       
  }
};

function userDurationInput() {
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("duration");
  filter = input.value.toUpperCase();
  table = document.getElementById("ufo-table");
  tr = table.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[5];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }       
  }
};

function userComentInput() {
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("comment");
  filter = input.value.toUpperCase();
  table = document.getElementById("ufo-table");
  tr = table.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[6];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }       
  }
};


























