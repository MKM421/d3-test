

var runData = function() {

  //Initialize empty array
  var dataset = [];
  // Loop through random array of integers 50X
  for (var i = 0; i < 50; i++) {
      //var newNumber = Math.random() * 30;  //New random number (0-30)
      var newNumber = Math.round(Math.random() * 30);
      //var newNumber = Math.PI;
      //Add new number to array
      dataset.push(newNumber);
  }

  // Loop through Fibonacci sequence
  /*var i;
  var dataset = []; // Initialize array!

  dataset[0] = 0;
  dataset[1] = 1;
  for(i=2; i<=100; i++) {
      // Next fibonacci number = previous + one before previous
      // Translated to JavaScript:
      dataset[i] = dataset[i-2] + dataset[i-1];
      console.log(dataset[i]);
  }
*/

// width/height of SVG container
var w = 1200;
var h = 500;

// Selecting/creating SVG elements
var svg = d3.select("body")
.append("svg")
.attr("width", w)
.attr("height", h);

// Bind array to each Circle
var circles = svg.selectAll("circle")
  .data(dataset)
  .enter()
  .append("circle");
  circles.attr("cx", function(d, i) {
    return (i * 30) + 0;
  })
  // add class to each circle
  .attr("class", "cell")
  .attr("cy", h/2)
  //.attr("cx", h/2)
  // increase radius 25X value
  .attr("r", function(d) {
    return d * 3;
  })
  .attr("fill", "rgba(0, 153, 153,0.3)")
  .attr("stroke", "darkgrey")
  .attr("stroke-width", function(d) {
    return d/20;
  })
  .transition()
  .delay(function(d, i) {
    return i * 80;
  //circles.call(d3.zoom().on("zoom", zoomed));
  })
  .duration(350)
  .style("opacity", "1");


/*svg.selectAll("text")
  .data(dataset)
  .enter()
  .append("text")
  .text(function(d) {
    return d[0] + "," + d[1];
  })
  .attr("x", function(d) {
    return d[0];
  })
  .attr("y", function(d) {
    return d[1];
  })
  .attr("class", "nums")
  .attr("font-family", "sans-serif")
  .attr("font-size", "11px")
  .attr("fill", "white");
*/



//console.log(d3.selectAll("li"));
console.log(dataset);
document.getElementById("nums").innerHTML = dataset;

};
