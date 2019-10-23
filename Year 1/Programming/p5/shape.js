
//count is the number of squares
var count = 10;
//Speed is how fast
var speed = 10;
//offset is how offset each square is from the one inside it
var offset = 0.5;
//twist is kinda the amount the squares overlap, it's complicated
var twist = 50;


class shape{
	// The constructor which initialises the object for the class
	constructor(background_colour,speed,offset,value1,value2){
		this.background_colour = background_colour;
		this.speed=speed;
		this.offset=offset;
		this.value1=value1;
		this.value2=value2;
	//These are the getters and setters for the parameters the function takes
	}
	// The getter and setter for background_colour
	get _background_colour(){
		return this.background_colour;
	}
	set _background_colour(colour) {
		//The input may be a string instead of an integer, so convert to integer
		colour = parseInt(colour);
		//This checks that the colour is in a suitable range
		if (colour >= 0 && colour <= 360) {
			this.background_colour = colour;
		} else {
			//If any of the conditions failed, background_colour will instead be set to a default value
			this.background_colour = 100;
		}
	}

	//The getter and setter for speed
	get _speed(){
		return this.speed;
	}
	set _speed(value){
		//The input may be a string instead of an integer, so convert to integer
		value=parseInt(value);
		//Check the input is a positive integer
		if (value>=0) {
			//If so, set the speed to that value
			this.speed = value;
		}else{
			//Otherwise set speed to a default value
			this.speed=10;
		}
	}
	//The getter and setter for offset
	get _offset(){
		return this.offset;
	}
	set _offset(offset){
		//The input may be a string instead of an integer, so convert to integer
		offset=parseInt(offset);
		//Make sure the value is in the correct range
		if (offset>=0 && offset<=90){
			//If so, set the offset to that value
			this.offset=offset;
		}else{
			//Otherwise set offset to a default value
			this.offset=0.5;
		}
	}
	//The getter and setter for value1
	get _value1(){
		return this.value1;
	}
	set _value1(value1){
		//The input may be a string instead of an integer, so convert to integer
		value1=parseInt(value1);
		//Check the value is in the correct range
		if (value1>=0 && value1<=360){
			//If so, set the value1 to that value
			this.value1=value1;
		}else{
			//Otherwise set value1 to a default value
			this.value1=0;
		}
	}
	//The getter and setter for value2
	get _value2(){
		return this.value1;
	}
	set _value2(value2){
		//The input may be a string instead of an integer, so convert to integer
		value2=parseInt(value2);
		//Check the value is in the correct range
		if (value2>=0 && value2<=360){
			//If so, set value2 to that value
			this.value2=value2;
		}else{
			//Otherwise set value1 to a default value
			this.value2=360;
		}
	}

	draw(){
		//Set the background using the given value
		background(this.background_colour,100,70);
		noFill();

		push();
		translate(width/2, height/2);
		for (var j = 0; j < count; j+=1) {
			//The larger the value of the increment of i on the below line, the fewer squares there are, the max limit of i determines the size
			for (var i = 0; i < 600; i += 20) {
				var angle = sin(radians(i*this.offset-frameCount*this.speed))*twist;
				//Changing the two numbers on the end here determines the range of colour over which will be shown
				var colorHue = map(j, 0, count, this.value2, this.value1);
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
		text("Press and drag the mouse to change its motion.", width/2, height-50);


	}
}

function mouseDragged() {
	twist = map(mouseX, 0, width, -35, 35);
	count = map(mouseY, 0, height, 10, 1);
}