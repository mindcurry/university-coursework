# p5-Formative - Futuristic Spiral Generator

Adapted by mhgn23 from script created by Tim Groote at https://www.openprocessing.org/sketch/444760

Creative Commons Attribution-ShareAlike 3.0 Unported (CC BY-SA 3.0)

## What does the Futuristic Spiral Generator do?

The original spiral generator created by Tim Groote has been converted from Processing to Javascript, and expanded by allowing for parameters for the spiral to be changed, including new features such as a maximum radius, hue/saturation/lightness adjustments, and the ability to create a colour gradient between 2 hues. Existing parameters that have been made adjustable include x and y co-ordinates for the spiral's origin, and the number of lines used to create the spiral.

## How do I use the example page?

The various sliders on the example page can be adjusted to change the parameters of the spiral. In order to create a spiral with these parameters, click the "Generate Spiral" button. Moving your mouse over each label or button gives a short description about what each particular setting changes. More detailed descriptions of each parameter are included later in this document.

## How do I use the Futuristic Spiral Generator?

In order to use the generator, it must first be created with the statement:

`spiral = new FuturisticSpiral(x,y,radius,count,hue,saturation, lightnessrange, secondhue);`

inside your p5 `setup()` function, where `spiral` can be replaced by a variable name of your choice. For the examples below, `spiral` will be continued to be used. The parameters for the class are explained in detail below, but can be left blank in order to use default values.

After the generator object has been created, it must be initialised before it can be used. This must be done before each time the spiral is drawn, including after changing parameters. To do this, use the statement:

`spiral.initialise();`

inside your p5 `setup()` function, or whenever you want to begin generating the spiral from scratch.

Lastly, for the spiral to be drawn, the statement:

`spiral.draw();`

must be placed inside your p5 `draw()` function.

An example javascript file that uses the Futuristic Spiral Generator may look like:

```javascript
function setup(){
    createCanvas(600,600);
    spiral = new FuturisticSpiral(300,300,200,50,160,100,80,200);
    spiral.initialise();
}
function draw(){
    spiral.draw();
}
```

## What does each parameter effect?

### `x`

This sets the x co-ordinate of the spiral's origin, measured in pixels starting from the left edge of the canvas. The default value is 300.

This can be modified by using `spiral.x = a` where `a` is a positive integer, and can be retrieved by using `b = spiral.x`, where `b` is the variable in which the spiral's x co-ordinate will be stored.

### `y`

This sets the y co-ordinate of the spiral's origin, measured in pixels starting from the top edge of the canvas. The default value is 300.

This can be modified by using `spiral.y = a` where `a` is a positive integer, and can be retrieved by using `b = spiral.y`, where `b` is the variable in which the spiral's y co-ordinate will be stored.

### `radius`

This sets the maximum radius of the lines that make up the spiral, measured in pixels from the spiral's origin. The default value is 300.

This can be modified by using `spiral.radius = a` where `a` is a positive integer, and can be retrieved by using `b = spiral.radius`, where `b` is the variable in which the spiral's radius will be stored.

### `count`

This sets the number of lines that are used to make up the spiral. The default value is 30.

This can be modified by using `spiral.count = a` where `a` is a positive integer, and can be retrieved by using `b = spiral.count`, where `b` is the variable in which the spiral's line count will be stored.

### `hue`

This sets the hue of the spiral, measured in degrees . If the `secondaryhue` has been assigned (as a different value to `hue`), then `hue` will instead be the first hue of the spiral's colour gradient. The default value is 160.

This can be modified by using `spiral.hue = a` where `a` is a value within the range of 0-360, and can be retrieved by using `b = spiral.hue`, where `b` is the variable in which the spiral's hue value will be stored.

**CAUTION: If you modify the hue after creating the spiral, the secondary hue must also be modified to the same value if you wish to keep the spiral as a single hue.**

### `saturation`

This sets the saturation of the spiral, measured as a percentage. The default value is 100.

This can be modified by using `spiral.saturation = a` where `a` is a value within the range of 0-100, and can be retrieved by using `b = spiral.saturation`, where `b` is the variable in which the spiral's saturation value will be stored.

### `lightnessRange`

This sets the range for the lightness value to be randomly chosen from for each line, measured as a percentage and centred about 50% (a value of 40 would range from 30% lightness to 70% lightness). The default value is 80.

This can be modified by using `spiral.lightnessRange = a` where `a` is a value within the range of 0-100, and can be retrieved by using `b = spiral.lightnessRange`, where `b` is the variable in which the spiral's lightness range value will be stored.

### `secondHue`

This sets the secondary hue of the spiral, which is the second hue used in the spiral's colour gradient, and is measured in degrees. The default value is the value for `hue`, or if it has not been set, 160.

This can be modified by using `spiral.secondHue = a` where `a` is a value within the range of 0-360, and can be retrieved by using `b = spiral.secondHue`, where `b` is the variable in which the spiral's secondary hue value will be stored.
