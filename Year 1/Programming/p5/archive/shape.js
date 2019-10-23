class shape{
	constructor(background_colour,speed,offset,value1,value2){
		this.background_colour = background_colour;
		this.speed=speed;
		this.offset=offset;
		this.value1=value1;
		this.value2=value2;

	}
	get _background_colour(){
		return this.background_colour;
	}
	set _background_colour(colour){
		this.background_colour=colour;
	}
	get _speed(){
		return this.speed;
	}
	set _speed(value){
		this.speed=value;
	}
	get _offset(){
		return this.offset;
	}
	set _offset(offset){
		this.offset=offset;
	}
	get _value1(){
		return this.value1;
	}
	set _value1(value1){
		this.value1=value1;
	}
	get _value2(){
		return this.value1;
	}
	set _value2(value2){
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