var value1 = 75;
var value2 = 200;
$( function() {
	$( "#slider-range" ).slider({
		range: true,
		min: 0,
		max: 325,
		values: [ 75, 200 ],
		slide: function( event, ui ) {
			$( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
			value1=$( "#slider-range" ).slider( "values", 0 );
			value2=$( "#slider-range" ).slider( "values", 1 );
			outputting(value1,value2);

		}
	});

	$( "#amount" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ) +
        " - $" + $( "#slider-range" ).slider( "values", 1 ) );


} );

function outputting(colour1,colour2){
	value1=colour1;
	value2=colour2;
}

//count is the number of squares
var count = 10;
//Speed is how fast
var speed = 10;
//offset is how offset each square is from the one inside it
var offset = 0.5;
//twist is kinda the amount the squares overlap, it's complicated
var twist = 50;
// Background is the background colour
var background_colour = 0;

function setup() {
	createCanvas(windowWidth, windowHeight);
	rectMode(CENTER);
	textAlign(CENTER);
	textSize(14);
	colorMode(HSB);
}


class shape{
	constructor(background_colour,speed,offset,value1,value2){
		this.background_colour = background_colour;
		this.speed=speed;
		this.offset=offset;
		this.value1=value1;
		this.value2=value2;

	}
	draw(){
		background(this.background_colour,100,70);
		speed=this.speed;
		offset=this.offset;
		noFill();

		push();
		translate(width/2, height/2);
		//the value of the increment of j on the below line can determine the speed - but stops it from being a rainbow
		for (var j = 0; j < count; j+=1) {
			//The larger the value of the increment of i on the below line, the fewer squares there are, the max limit of i determines the size, but also wobbliness
			for (var i = 0; i < 600; i += 20) {
				var angle = sin(radians(i*offset-frameCount*speed))*twist;
				//Changing the two numbers on the end here determines the range of colour over which will be shown
				var colorHue = map(j, 0, count, this.value1, this.value2);
				//150 to 250 - changing these values can make it more trippy, not sure what to say apart from that
				var angleOffset = map(j, 0, count, 150, 250);
				var opacity = map(j, 0, count, 255, 100);
				//The number on the end below determines how rounded the corners of the square are
				var roundness = max(angle, 0)*4;

				stroke(colorHue, 255, 255, opacity);
				strokeWeight(max(angle*0.5, 1));

				push();
				rotate(radians(i*angle/angleOffset));
				rect(0, 0, i, i, roundness);
				pop();
			}
		}

		pop();

		noStroke();
		fill(255);
		// text("Press and drag the mouse to change its motion.", width/2, height-50);


	}
}


let shapevar={
	set background_colour(name){
		this.name=name;
	},
	get background_colour(){
		return this.name;
	}
};
shapevar.background_colour = "test";


function draw() {
	background_colour=document.getElementById("background_colour").value;
	speed=document.getElementById("speed").value;
	offset=document.getElementById("offset").value;
	let b = new shape(background_colour,speed,offset,value1,value2);
	b.draw();
}


function mouseDragged() {
	twist = map(mouseX, 0, width, -35, 35);
	count = map(mouseY, 0, height, 10, 1);
}