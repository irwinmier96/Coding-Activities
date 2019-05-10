function buildMetadata(sample) {

  // @TODO: Complete the following function that builds the metadata panel
  // var url = "/metadata/" + sample;
  // // Use `d3.json` to fetch the metadata for a sample
  //   // Use d3 to select the panel with id of `#sample-metadata`

  var buildMetadata = function (sample) {

    var url = `/metadata/` + sample;
 
    d3.json(url).then(sample => {
      console.log(sample);
      var selectData = d3.select('#sample-metadata');
      selectData.html("");
      Object.entries(sample).forEach(([key, value]) => {
        var row = selectData.append("p");
        row.text(`${key}: ${value}`);
      });
    });
  }
 
 buildMetadata(sample);
   
  // d3.json(url).then(function(data){
  //   Object.entries(data).forEach(([key, value]) => {
  //     if (key) {
  //       metadata.push(value);
  //       return `${key}: ${value}`
  //     }
  //   });
  // });
    // Use `.html("") to clear any existing metadata

    // Use `Object.entries` to add each key and value pair to the panel
    // Hint: Inside the loop, you will need to use d3 to append new
    // tags for each key-value in the metadata.

    // BONUS: Build the Gauge Chart
    buildGauge(data.WFREQ);
};

function buildCharts(sample) {

  var url = "/samples/" + sample;
  // @TODO: Use `d3.json` to fetch the sample data for the plots
  d3.json(url).then(function(data){
    var otu_ids = data.otu_ids;
    var sample_values = data.sample_values;
    var otu_labels = data.otu_labels;
    console.log(otu_ids);
    console.log(sample_values);

    //Bubble Chart
    var trace1 = {
      mode: "markers",
      x: otu_ids,
      y: sample_values,
      text: otu_labels,
      hoverinfo: 'x + y + text',
      marker: {
        color: otu_ids,
        size: sample_values
      }

    };
    
    var data1 = [trace1];
    var layout = {
      title: "Bubble Chart",
      xaxis: {
        autorange: true
      },
      yaxis: {
        autorange: true
      }
     };
    Plotly.newPlot("bubble", data1, layout);

  });

    //Pie Chart
  d3.json(url).then(function(data){ 
    var pie_chart_top_10 = data.sample_values.slice(0,10);
    var otu_ids = data.otu_ids.slice(0,10);
    var otu_labels = data.otu_labels.slice(0,10);

    var piechart_trace = {
      values: pie_chart_top_10,
      labels: otu_ids,
      text: otu_labels,
      type: "pie",
      hoverinfo: 'x + y + text',
      textinfo: 'percent',
    };

    var pie_data = [piechart_trace];

    var pieLayout = {

      height: 600,
      width: 800

    };

    Plotly.newPlot("pie", pie_data, pieLayout);
    });
    // @TODO: Build a Bubble Chart using the sample data

    // @TODO: Build a Pie Chart
    // HINT: You will need to use slice() to grab the top 10 sample_values,
    // otu_ids, and labels (10 each).
};

function init() {
  // Grab a reference to the dropdown select element
  var selector = d3.select("#selDataset");

  // Use the list of sample names to populate the select options
  d3.json("/names").then((sampleNames) => {
    sampleNames.forEach((sample) => {
      selector
        .append("option")
        .text(sample)
        .property("value", sample);
    });

    // Use the first sample from the list to build the initial plots
    const firstSample = sampleNames[0];
    buildCharts(firstSample);
    buildMetadata(firstSample);
  });
}

function optionChanged(newSample) {
  // Fetch new data each time a new sample is selected
  buildCharts(newSample);
  buildMetadata(newSample);
}

// Initialize the dashboard
init();
