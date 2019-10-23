# Documentation

## Example functions
### Setup

   function setup() {  
     createCanvas(windowWidth, windowHeight);  
     rectMode(CENTER);  
     textAlign(CENTER);  
     textSize(14);  
     colorMode(HSB);  
   }
### Draw
 function draw() {  
   let b = new shape();  
   b.background_colour=background_colour;  
   b.speed=speed;  
   b.offset=offset;  
   b.value1=value1;  
   b.value2=value2;  
   b.draw();  
 }

## Parameters
The parameters for the constructor of the class shape are as follows:

Parameter|Type|Min|Max|Description
--|--|--|--|--
background_colour|Integer|0|360|The colour of the background of the sketch
speed|Integer|0|N/A|The speed at which the shape oscillates
offset|Integer|0|90|The offset between the squares
value1|Integer|0|360|The minimum colour of the shape
value2|Integer|0|360|The maximum colour of the shape

All these parameters then have methods in the form of getters and setters in order to verify the data being passed is in the correct format and range.

value1 should be less than value2, but if this is not true, the definitions of value1 and value2 will be swapped so that the sketch still works.

There are then three functions:

- draw - This performs all the drawing of the shape
- mouseDragged - This changes the values of the variables twist and count when the mouse is clicked and dragged
- constructor - This creates and initialises the object within the class shape

## Explanation of example
The example allows you to control all of the parameters for the constructor shape.
- The background colour slider controls the parameter background_colour
- The speed slider controls the parameter speed
- The offset sider controls the parameter speed
- The colour range slider has two sliders on it, the left hand one controlling value 1, and the right hand one controlling value 2

The example uses the variable b to draw the shape

## Source

This sketch was adapted from one found on OpenProcessing https://www.openprocessing.org/sketch/429506.

It was freely adapted as the sketch is under [Creative Commons Attribution-ShareAlike 3.0 Unported](https://creativecommons.org/licenses/by-sa/3.0/) license.
