var value1 = 75;
var value2=200;
// This jQuery function handles the bottom slider
$( function() {
	$( "#slider-range" ).slider({
		range: true,
		min: 0,
		max: 325,
		values: [ 75, 200 ],
		slide: function( event, ui ) {
			value1=$( "#slider-range" ).slider( "values", 0 );
			value2=$( "#slider-range" ).slider( "values", 1 );
		}
	});
} );






function setup() {
	createCanvas(windowWidth, windowHeight);
	rectMode(CENTER);
	textAlign(CENTER);
	textSize(14);
	colorMode(HSB);
}


function draw() {
	//Pull the values from the HTML page
	background_colour=document.getElementById("background_colour").value;
	speed=document.getElementById("speed").value;
	offset=document.getElementById("offset").value;
	//Initialise the shape
	let b = new shape();
	//Set all the parameters of the shape to the variables pulled
	b._background_colour=background_colour;
	b._speed=speed;
	b._offset=offset;
	b._value1=value1;
	b._value2=value2;
	b.draw();
}






