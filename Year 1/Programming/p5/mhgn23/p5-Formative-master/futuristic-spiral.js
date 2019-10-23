// Adapted from script created by Tim Groote at https://www.openprocessing.org/sketch/444760
// Creative Commons Attribution-ShareAlike 3.0 Unported (CC BY-SA 3.0) 
/*global TWO_PI colorMode HSL stroke strokeWeight line clear*/
/*exported FuturisticSpiral*/
class Scribbler{
    constructor(x, y, radius, hue, saturation, lightnessRange){
        this.prevx = x || 300;
        this.prevy = y || 300;
        this.theta = Math.random() * TWO_PI;
        this.dist = 0;
        this.thetav = Math.random() * 0.1 - 0.05;
        this.distv = Math.random() + 0.2;
        this.myTheta = false;
        this.anchorx = x || 300;
        this.anchory = y || 300;
        this.strokew = Math.floor((Math.random() * 3) + 1);
        this.strokec = Math.floor((Math.random() * lightnessRange) + 50 - Math.floor(lightnessRange/2)) || Math.floor((Math.random() * 80) + 10);
        this.curx = x || 300;
        this.cury = y || 300;
        this.radius = radius || 300;
        this.hue = hue || 160;
        this.saturation = saturation || 100;
    }
    randomVelocities(){
        this.thetav = Math.random() * 0.1 - 0.05;
        this.distv = Math.random() + 0.2;
    }
    swapMode(){
        this.myTheta = !this.myTheta;
        this.randomVelocities();
    }
    update(){
        if(this.dist < this.radius){
            this.curx = this.anchorx + (Math.cos(this.theta) * this.dist);
            this.cury = this.anchory + (Math.sin(this.theta) * this.dist);
            colorMode(HSL);
            stroke(this.hue, this.saturation, this.strokec);
            strokeWeight(this.dist * this.strokew * 0.01);
            line(this.prevx, this.prevy, this.curx, this.cury);
            this.prevx = this.curx;
            this.prevy = this.cury;
            if(this.myTheta == true){
                this.theta += this.thetav;
            }
            else{
                this.dist += this.distv;
            }
            if(Math.random() > 0.9){
                this.swapMode();
            }
        }
    }
}
class FuturisticSpiral{
    constructor(x,y,radius,count,hue,saturation, lightnessRange, secondHue){
        this._x = x || 300;
        this._y = y || 300;
        this._radius = radius || 300;
        this._count = count || 30;
        this._scrblrs = new Array(count) || new Array(30);
        this._hue = hue || 160;
        this._saturation = saturation || 100;
        this._lightnessRange = lightnessRange || 80;
        this._secondHue = secondHue || hue || 160;
        this._newCount = this._count;
        this._currentHue = hue || 160;
    }
    initialise(){
        clear();
        this._count = this._newCount;
        this.scrblrs = new Array(this._count);
        for (var i = 0; i < this._count; i++){
            this._currentHue = Math.floor(Math.min(this._hue, this._secondHue) + (i * ((Math.abs(this._secondHue - this._hue)) / this._count)));
            this.scrblrs[i] = new Scribbler(this._x,this._y, this._radius, this._currentHue, this._saturation, this._lightnessRange);
        }
    }
    draw(){
        for (var i = 0; i < this._count; i++){
            var scr = this.scrblrs[i];
            scr.update();
        }
    }
    get x(){
        return this._x;
    }
    set x(newX){
        this._x = newX;
    }
    get y(){
        return this._y;
    }
    set y(newY){
        this._y = newY;
    }
    get radius(){
        return this._radius;
    }
    set radius(newRadius){
        this._radius = newRadius;
    }
    get count(){
        return this._count;
    }
    set count(newCount){
        this._newCount = newCount;
    }
    get hue(){
        return this._hue;
    }
    set hue(newHue){
        this._hue = newHue;
    }
    get saturation(){
        return this._saturation;
    }
    set saturation(newSaturation){
        this._saturation = newSaturation;
    }
    get lightnessRange(){
        return this._lightnessRange;
    }
    set lightnessRange(newLightnessRange){
        this._lightnessRange = newLightnessRange;
    }
    get secondHue(){
        return this._secondHue;
    }
    set secondHue(newSecondHue){
        this._secondHue = newSecondHue;
    }
}
