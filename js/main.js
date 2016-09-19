// Chained
//d3.select("body").append("h1").text("Hello World");

//var dataset = [ 5, 10, 15, 20, 25 ];

/*var dataset = [ 25, 7, 5, 26, 11, 8, 25, 14, 23, 19,
                14, 11, 22, 29, 11, 13, 12, 17, 18, 10,
                24, 18, 25, 9, 3 ];

var dataset = [];                        //Initialize empty array
for (var i = 0; i < 50; i++) {           //Loop 25 times
    //var newNumber = Math.random() * 30;  //New random number (0-30)
    var newNumber = Math.round(Math.random() * 20);
    dataset.push(newNumber);             //Add new number to array
}
*/

// Selecting basic HTML tags
/*d3.select("#stuff").selectAll("li")
    .data(dataset)
    .enter()
    .append("li")
    .attr("class", "bar")
    //.text("Data element");
    .text(function(d) {
					return d;
				})
				.style("color", function(d) {
					if (d > 15) {	//Threshold of 15
						return "red";
					} else {
						return "black";
					}
				})
        .style("height", function(d) {
            var barHeight = d * 5;  //Scale up by factor of 5
            return barHeight + "px";
        });
*/

//var url = 'https://www.googleapis.com/analytics/v3/data/realtime';

/*d3.request(url)
    .mimeType("application/json")
    .response(function(xhr) { return JSON.parse(xhr.responseText); })
    .get(callback);
*/
/*var Shuttle = document.getElementByID('launch');
Shuttle.onkeydown = function(e) {
    e = e || window.event;
    switch(e.which || e.keyCode) {
        case 37: // left
        break;

        case 38: // up
        break;

        case 39: // right
        break;

        case 40: // down
        break;

        default: return; // exit this handler for other keys
    }
    e.preventDefault(); // prevent the default action (scroll / move caret)
});
*/
var runData = function() {

  //Circles
  var dataset = [];                        //Initialize empty array
  for (var i = 0; i < 100; i++) {           //Loop 25 times
      //var newNumber = Math.random() * 30;  //New random number (0-30)
      var newNumber = Math.round(Math.random() * 30);
      dataset.push(newNumber);             //Add new number to array
  }

  var w = 1200;
  var h = 1000;

  // Selecting/creating SVG elements
  var svg = d3.select("body")
    .append("svg")
    .attr("width", w)
    .attr("height", h);


  var circles = svg.selectAll("circle")
   .data(dataset)
   .enter()
   .append("circle");
   circles.attr("cx", function(d, i) {
      return (i * 50) + 50;
    })
      .attr("class", "cell")
      .attr("cy", h/2)
      .attr("cx", h/2)
      .attr("r", function(d) {
        return d * 25;
      })
      .attr("fill", "rgba(0, 153, 153,0.3)")
      .attr("stroke", "darkgrey")
      .attr("stroke-width", function(d) {
        return d/2;
      })
      .transition()
      .delay(function(d, i) {
        return i * 80;
         circles.call(d3.zoom().on("zoom", zoomed));
      })
    .duration(350)
    .style("opacity", "1")
    .style("color", function(d) {
      if (d > 25) {	//Threshold of 15
        return "darkgrey";
      } else {
        return "teal";
      }
    })
      //.duration(1000)
      //.attr("fill", "aqua")
      svg.selectAll("text")
      			   .data(dataset)
      			   .enter()
      			   .append("text")
               .text(function(d){
                 return d;
               })
               /*.
               .text(function(d) {
      			   		return d[0] + "," + d[1];
      			   })
      			   attr("x", function(d) {
      			   		return d[0];
      			   })
      			   .attr("y", function(d) {
      			   		return d[1];
      			   })*/
      			   .attr("font-family", "sans-serif")
      			   .attr("font-size", "11px")
      			   .attr("fill", "red");




  console.log(d3.selectAll("li"));
  console.log(dataset);

};

//Width and height
/*
			var w = 1200;
			var h = 800;

			var dataset = [
							[5, 20], [480, 90], [250, 50], [100, 33], [330, 95],
							[410, 12], [475, 44], [25, 67], [85, 21], [220, 88]
						  ];

			//Create SVG element
			var svg = d3.select("body")
						.append("svg")
						.attr("width", w)
						.attr("height", h);

			svg.selectAll("circle")
			   .data(dataset)
			   .enter()
			   .append("circle")
			   .attr("cx", function(d) {
			   		return d[0];
			   })
			   .attr("cy", function(d) {
			   		return d[1];
			   })
			   .attr("r", function(d) {
			   		return Math.sqrt(h - d[1]);
			   })
         .attr("class", "cell")
         .attr("fill", "teal")
         .attr("stroke", "darkgrey")
         .attr("stroke-width", function(d) {
           return d/2;
         });

			svg.selectAll("text")
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
			   .attr("font-family", "sans-serif")
			   .attr("font-size", "11px")
			   .attr("fill", "red");
*/





// Unchained
/*
var body = d3.select("body");
var svg = d3.select("body").append("svg");
var p = body.append("p");
p.text("New paragraph!");
*/
