//inspired by http://www.janwillemtulp.com/category/d3/

var numPoints = 100;

/*
var data = d3.range(numPoints).map(function(i) {
  return {x: i / (numPoints-1), y: Math.random()};
  //return {x: i / 19, y: (Math.sin(i / 3) + 1) / 2};
  //return {x: i / 19, y: .5};
});
*/

var adh = 1.0;//jQuery( "#sliderAdh" ).slider( "value" );
var E = 1.00;//jQuery( "#sliderE" ).slider( "value" );//50.0;
var sigma = .40;//jQuery( "#sliderSigma" ).slider( "value" );//.45;
var Estar = .5 * E / (1 - Math.pow(sigma, 2));
var r1 = .007654;//jQuery( "#slider-rangeR1R2" ).slider( "values", 0 ); //jQuery( "#sliderR1" ).slider( "value" );//1.5;
var r2 = .007654;//jQuery( "#slider-rangeR1R2" ).slider( "values", 1 ); //jQuery( "#sliderR2" ).slider( "value" );//2.0;


var data = d3.range(numPoints).map(function(i) {
	
	//var dist = i / (numPoints-1) * 2 * (r1+r2);	//entre 0 et 2(r1 + r2)
	var dist = i / (numPoints-1) * 2 * (.01+.01);	//entre 0 et 2(rmax + rmax)

	return {x: i / (numPoints-1), y_f: f(r1,r2,adh,Estar,dist), y_f2: f2(r1,r2,adh,Estar,dist), y_morse: morse(r1,r2,adh,Estar,dist), y_morse_constant_max: morse_constant_max(r1,r2,adh,Estar,dist), y_morse_constant_max_surface: morse_constant_max_surface(r1,r2,adh,Estar,dist) };
});


var draw_f=1;
var draw_f2=1;
var draw_morse=1;
var draw_morse_constant_max=1;
var draw_morse_constant_max_surface=1;



var w = 450,
    h = 375,
    p = 20,
    x = d3.scale.linear().domain([0, 1]).range([0, w]),
    y = d3.scale.linear().domain([-1, 1]).range([h, 0]);

var vis = d3.select("#mainGraph")
    .data([data])
  .append("svg:svg")
    //.attr("class", "vis")
    .attr("width", w + p * 2)
    .attr("height", h + p * 2)
  .append("svg:g")
    .attr("transform", "translate(" + p + "," + p + ")");


var rule = vis.selectAll("line");

//vertical
     rule.data(x.ticks(10))
   .enter().append("svg:line")
     .attr("x1", x)
     .attr("x2", x)
     .attr("y1", 0)
     .attr("y2", h-1)
     .attr("stroke", "#BABABA");

//  horizontal
  rule.data(y.ticks(15))
   .enter().append("svg:line")
     .attr("x1", 0)
     .attr("x2", w + 1)
     .attr("y1", y)
     .attr("y2", y)
     .attr("stroke", "#BABABA");

//x-axis
rule.data(y.ticks(1))
   .enter().append("svg:line")
	.attr("x1", 0)
	.attr("x2", w+1)
	.attr("y1", y(0))
	.attr("y2", y(0))
	.attr("stroke", "black");

/*
//test disteq
rule.data(y.ticks(1))
   .enter().append("svg:circle")
	.attr("cx", disteq * w / (2*(r1+r2)) )
       .attr("cy", y(0) )
       .attr("r", 3)
       .style("fill", "yellow")
       .style("fill-opacity", .5);
	   */
	   
	   
   /*    
//test F=0       
rule.data(y.ticks(1))
   .enter().append("svg:circle")
	.attr("cx",    dist0 * w / (2*(r1+r2))  )
       .attr("cy", y(0) )
       .attr("r", 13)
       .style("fill", "blue")
       .style("fill-opacity", .5);
*/

var line_f = d3.svg.line() 
      .x(function(d) { return x(d.x); }) 
      .y(function(d) { return y(d.y_f); }); 

var path_f = vis.append("svg:path")
    .attr("class", "line")
    .attr("d", line_f)
	.attr("stroke-width", 2)
	.attr("stroke", "blue");
	
var line_f2 = d3.svg.line() 
      .x(function(d) { return x(d.x); }) 
      .y(function(d) { return y(d.y_f2); })

var path_f2 = vis.append("svg:path")
    .attr("d", line_f2) 
	.attr("stroke", "lightsalmon")
	.attr("fill", "none")
	.attr("stroke-dasharray", 10,50)
	.attr("stroke-width", 2);	
	
var line_morse = d3.svg.line() 
      .x(function(d) { return x(d.x); }) 
      .y(function(d) { return y(d.y_morse); })

var path_morse = vis.append("svg:path")
    .attr("d", line_morse) 
	.attr("stroke", "red")
	.attr("fill", "none")
	.attr("stroke-dasharray", 10,50)
	.attr("stroke-width", 2);
	
var line_morse_constant_max = d3.svg.line() 
      .x(function(d) { return x(d.x); }) 
      .y(function(d) { return y(d.y_morse_constant_max); })

var path_morse_constant_max = vis.append("svg:path")
    .attr("d", line_morse_constant_max) 
	.attr("stroke", "green")
	.attr("fill", "none")
	.attr("stroke-dasharray", 10,50)
	.attr("stroke-width", 2);	
	
var line_morse_constant_max_surface = d3.svg.line() 
      .x(function(d) { return x(d.x); }) 
      .y(function(d) { return y(d.y_morse_constant_max_surface); })

var path_morse_constant_max_surface = vis.append("svg:path")
    .attr("d", line_morse_constant_max_surface) 
	.attr("stroke", "yellow")
	.attr("fill", "none")
	.attr("stroke-dasharray", 10,50)
	.attr("stroke-width", 2);
	
/*
var lineOrigArea = d3.svg.line() 
      .x(function(d) { return x(d.x); }) 
      .y(function(d) { return y(d.origArea); }); 

var pathOrigArea = vis.append("svg:path")
    .attr("class", "lineOrigArea")
    .attr("d", lineOrigArea); 
      */  
    
    /*
var lineRadius = d3.svg.line() 
      .x(function(d) { return x(d.x); }) 
      .y(function(d) { return y(d.radius); }); 

var pathRadius = vis.append("svg:path")
    .attr("class", "lineRadius")
    .attr("d", lineRadius); 
*/

/*
var lineForce = d3.svg.line() 
      .x(function(d) { return x(d.x); }) 
      .y(function(d) { return y(d.f); }); 

var pathForce = vis.append("svg:path")
    .attr("class", "lineForce")
    .attr("d", lineForce); 
    */
    
function refreshRandomPlot() {
		
		console.log("refreshRandomPlot");
		
		/*
		var data2 = d3.range(numPoints).map(function(i) {
  			return {x: i / (numPoints-1), y: Math.random(),origArea: 0,radius:Math.random(),f:Math.random()};
		});
	
		
		path.transition().attr("d", line(data2)); 
		pathOrigArea.transition().attr("d", lineOrigArea(data2)); 
		//pathRadius.transition().attr("d", lineRadius(data2)); 
		pathForce.transition().attr("d", lineForce(data2)); */
}  

function refreshSphereContactPlot() {
		
		//console.log("refreshSphereContactPlot");
		
		
		
		var adh = jQuery( "#sliderAdh" ).slider( "value" );
		var E = jQuery( "#sliderE" ).slider( "value" );//50.0;
		var sigma = jQuery( "#sliderSigma" ).slider( "value" );//.45;
		var Estar = .5 * E / (1 - Math.pow(sigma, 2));
		var r1 = jQuery( "#slider-rangeR1R2" ).slider( "values", 0 ); //jQuery( "#sliderR1" ).slider( "value" );//1.5;
		var r2 = jQuery( "#slider-rangeR1R2" ).slider( "values", 1 ); //jQuery( "#sliderR2" ).slider( "value" );//2.0;
		
		var data2 = d3.range(numPoints).map(function(i) {
			
			//var dist = i / (numPoints-1) * 2 * (r1+r2);	//entre 0 et 2(r1 + r2)
			var dist = i / (numPoints-1) * 2 * (.01+.01);	//entre 0 et 2(rmax + rmax)
	
			return {x: i / (numPoints-1) ,y_f: f(r1,r2,adh,Estar,dist) ,y_f2: f2(r1,r2,adh,Estar,dist) ,y_morse: morse(r1,r2,adh,Estar,dist),y_morse_constant_max: morse_constant_max(r1,r2,adh,Estar,dist), y_morse_constant_max_surface: morse_constant_max_surface(r1,r2,adh,Estar,dist) };
		});
	
		
		
		path_f.transition().attr("d", line_f(data2)); 
		path_f2.transition().attr("d", line_f2(data2)); 
		path_morse.transition().attr("d", line_morse(data2)); 
		path_morse_constant_max.transition().attr("d", line_morse_constant_max(data2));
		path_morse_constant_max_surface.transition().attr("d", line_morse_constant_max_surface(data2));	
		
		if(draw_morse){
			path_morse.attr("visibility", "visible");
		}
		else{
			path_morse.attr("visibility", "hidden");
		}
		
		
		if(draw_morse_constant_max){
			path_morse_constant_max.attr("visibility", "visible");
		}
		else{
			path_morse_constant_max.attr("visibility", "hidden");
		}
		
				
		if(draw_morse_constant_max_surface){
			path_morse_constant_max_surface.attr("visibility", "visible");
		}
		else{
			path_morse_constant_max_surface.attr("visibility", "hidden");
		}
		
		if(draw_f){
			path_f.attr("visibility", "visible");
		}
		else{
			path_f.attr("visibility", "hidden");
		}
				
		
		if(draw_f2){
			path_f2.attr("visibility", "visible");
		}
		else{
			path_f2.attr("visibility", "hidden");
		}
		
		
}  
  
function f(r1, r2, adh, Estar, dist){
	
	
	var force = 0;
	
	var apf = 0.680174762;
	var apf1_3 = Math.pow( apf, (1/3) );	
	var disteq = apf1_3 * (r1+r2);
	
	var h = dist/disteq;
	
	var minrad = (r1<r2)?r1:r2;
	
	var surface = minrad * minrad;
	
	var f2d = 1.0 - h*h;
	
	if(h > 1){

		force = - adh * Estar * 4.0 * h * (Math.exp(2*f2d) - Math.exp(f2d)) * surface;

	}
	else{

		force = - 8.0 * Estar * (1-h) * surface;

	}

	return force * 10000;
	
} 

function f2(r1, r2, adh, Estar, dist){
	
	var force = 0;
	
	var apf = 0.680174762;
	var apf1_3 = Math.pow( apf, (1/3) );	
	var disteq = apf1_3 * (r1+r2);
	
	var h = dist/disteq;
	
	
	
	var surface = 1 / (2*dist) * Math.sqrt( (r1 - r2 - dist) * ( - r1 + r2 - dist) * (r1 + r2 - dist) * (r1 + r2 + dist) );
	
	
	if(dist==0){
		surface = 0;
	}
	else if(dist > disteq){
		surface = 0;
	}
	
	
	var f2d = 1.0 - h*h;
	
	if(h > 1){

		force = - adh * Estar * 4.0 * h * (Math.exp(2*f2d) - Math.exp(f2d)) * surface;

	}
	else{

		force = - 8.0 * Estar * (1-h) * surface;

	}
	
	//console.log(dist+"  "+surface+"   "+force*10000);
	
	return force * 10000;
	
}



function morse(r1, r2, adh, Estar, dist){
	
	var force = 0;
	
	var apf = 0.680174762;
	var apf1_3 = Math.pow( apf, (1/3) );	
	var disteq = apf1_3 * (r1+r2);
	
	var h = dist/disteq;
	
	var f2d = 1.0 - h*h;
	
	force = - 4.0 * Estar * dist / (disteq * disteq) * (Math.exp(2*f2d) - Math.exp(f2d));

	return force * .01;
}

function morse_constant_max(r1, r2, adh, Estar, dist){
	
	var force = 0;
	
	var apf = 0.680174762;
	var apf1_3 = Math.pow( apf, (1/3) );	
	var disteq = apf1_3 * (r1+r2);
	
	var h = dist/disteq;
	
	var f2d = 1.0 - h*h;
	
	force = - 4.0 * Estar * dist / (disteq) * (Math.exp(2*f2d) - Math.exp(f2d));
	
	return force;
}

function morse_constant_max_surface(r1, r2, adh, Estar, dist){
	
	var force = 0;
	
	var apf = 0.680174762;
	var apf1_3 = Math.pow( apf, (1/3) );	
	var disteq = apf1_3 * (r1+r2);
	
	var h = dist/disteq;
	
	var minrad = (r1<r2)?r1:r2;
	
	var surface = minrad * minrad;
	
	var f2d = 1.0 - h*h;
	
	force = - 4.0 * Estar * dist / (disteq) * (Math.exp(2*f2d) - Math.exp(f2d)) * surface;
	
	return force * 10000;
}



/*
vis.append("svg:path")
    .attr("class", "line")
    .attr("d", d3.svg.line()
    .x(function(d) { return x(d.x); })
    .y(function(d) { return y(d.y); }));
    */
    
/*
vis.selectAll("circle.line")
    .data(data)
  .enter().append("svg:circle")
    .attr("class", "line")
    .attr("cx", function(d) { return x(d.x); })
    .attr("cy", function(d) { return y(d.y); })
    .attr("r", 3.5);  
  */




