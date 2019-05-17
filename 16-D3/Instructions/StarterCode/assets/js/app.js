// @TODO: YOUR CODE HERE!
var svgWidth = 960;
var svgHeight = 500;

var margin = { left:50, right:40, top:60, bottom:100 };

var width = 900 - margin.left - margin.right,
    height = 500 - margin.top - margin.bottom;
    
var svg = d3.select("#scatter")
    .append("svg")
        .attr("width", svgWidth)
        .attr("height", svgHeight);

var chartGroup = svg.append("g")
  .attr("transform", `translate(${margin.left}, ${margin.top})`);


d3.csv("assets/data/data.csv").then(function(smokerData){
    console.log(smokerData)
    smokerData.forEach(function(d) {
        d.healthcare = +d.healthcare;
        d.poverty = +d.poverty;
    
    });
    console.log(smokerData);

    // X Scale
    var xLinearScale = d3.scaleLinear()
        .domain([0, d3.max(smokerData, function(d) { return d.healthcare })])
        .range([0, width])
        

    // Y Scale
    var yLinearScale = d3.scaleLinear()
        .domain([0, d3.max(smokerData, function(d) { return d.poverty })])
        .range([height, 0]);

    var bottomAxis = d3.axisBottom(xLinearScale);
    var leftAxis = d3.axisLeft(yLinearScale);

    // Step 4: Append Axes to the chart
    // ==============================
    chartGroup.append("g")
      .attr("transform", `translate(0, ${height})`)
      .call(bottomAxis);

    chartGroup.append("g")
      .call(leftAxis);

    // Step 5: Create Circles
    // ==============================
    var circlesGroup = chartGroup.selectAll("circle")
      .data(smokerData)
      .enter()
      .append("circle")
      .attr("cx", d => xLinearScale(d.healthcare))
      .attr("cy", d => yLinearScale(d.poverty))
      .attr("r", "15")
      .attr("fill", "orange")
      .attr("opacity", ".25");

    // Step 6: Initialize tool tip
    // ==============================
    var toolTip = d3.tip()
      .attr("class", "tooltip")
      .offset([80, -60])
      .html(function(d) {
        return (`${d.state}<br>Healthcare: ${d.healthcare}<br>Poverty: ${d.poverty}`);
      });


    // Step 7: Create tooltip in the chart
    // ==============================
    chartGroup.call(toolTip);

    // Step 8: Create event listeners to display and hide the tooltip
    // ==============================
    circlesGroup.on("click", function(data) {
      toolTip.show(data, this);
    })
      // onmouseout event
      .on("mouseout", function(data, index) {
        toolTip.hide(data);
      });

    // Create axes labels
    chartGroup.append("text")
      .attr("transform", "rotate(-90)")
      .attr("y", 0 - margin.left + 10)
      .attr("x", 0 - (height / 1.8))
      .attr("dy", "1em")
      .attr("class", "axisText")
      .text("Poverty");

    chartGroup.append("text")
      .attr("transform", `translate(${width / 2.3}, ${height + margin.top + 15 })`)
      .attr("class", "axisText")
      .text("Healthcare");


})
