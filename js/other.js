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
