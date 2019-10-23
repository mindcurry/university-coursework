var spiral;
/*global createCanvas FuturisticSpiral*/
/*exported setup draw*/
function setup(){
    let canvas = createCanvas(600,600);
    canvas.parent("spiralCanvas");
    spiral = new FuturisticSpiral();
    spiral.initialise();
}
function draw(){
    spiral.draw();
}

document.addEventListener("DOMContentLoaded", function(){
    var gen = document.getElementById("generator");
    gen.onclick= function(){
        spiral.initialise();
    };
    var res = document.getElementById("reset");
    res.onclick = function(){
        rs.value = 300;
        rv.innerHTML = 300;
        spiral.radius = 300;
        cs.value = 30;
        cv.innerHTML = 30;
        spiral.count = 30;
        hs.value = 160;
        hv.innerHTML = 160;
        spiral.hue = 160;
        hs2.value = 160;
        hv2.innerHTML = 160;
        spiral.secondHue = 160;
        ss.value = 100;
        sv.innerHTML = 100;
        spiral.saturation = 100;
        ls.value = 80;
        lv.innerHTML = 80;
        spiral.lightnessRange = 80;
        sh.checked = true;
        h2a.style.display = "none";
        h2b.style.display = "none";
    };
    var rs = document.getElementById("radiusSlider");
    var rv = document.getElementById("radiusVal");
    rv.innerHTML = rs.value;
    rs.onchange = function(){
        spiral.radius = rs.value;
    };
    rs.oninput = function(){
        rv.innerHTML = rs.value;
    };
    var cs = document.getElementById("countSlider");
    var cv = document.getElementById("countVal");
    cv.innerHTML = cs.value;
    cs.onchange = function(){
        spiral.count = cs.value;
    };
    cs.oninput = function(){
        cv.innerHTML = cs.value;
    };
    var sh = document.getElementById("singleColour");
    var hs = document.getElementById("hueSlider");
    var hv = document.getElementById("hueVal");
    hv.innerHTML = hs.value;
    var hs2 = document.getElementById("hueSlider2");
    var hv2 = document.getElementById("hueVal2");
    var h2a = document.getElementById("hue2a");
    var h2b = document.getElementById("hue2b");
    h2a.style.display = "none";
    h2b.style.display = "none";
    sh.onchange = function(){
        if (sh.checked == true){
            h2a.style.display = "none";
            h2b.style.display = "none";
            spiral.secondHue = hs.value;
            hs2.value = hs.value;
            hv2.innerHTML = hs.value;
        }
        else{
            h2a.style.display = "inline";
            h2b.style.display = "inline";
        }
    };
    hs.onchange = function(){
        spiral.hue = hs.value;
        if (sh.checked == true){
            spiral.secondHue = hs.value;
        }
    };
    hs.oninput = function(){
        hv.innerHTML = hs.value;
        if (sh.checked == true){
            hv2.innerHTML = hs.value;
        }
    };
    hv2.innerHTML = hs2.value;
    hs2.onchange = function(){
        spiral.secondHue = hs2.value;
    };
    hs2.oninput = function(){
        hv2.innerHTML = hs2.value;
    };
    var ss = document.getElementById("saturationSlider");
    var sv = document.getElementById("saturationVal");
    sv.innerHTML = ss.value;
    ss.onchange = function(){
        spiral.saturation = ss.value;
    };
    ss.oninput = function(){
        sv.innerHTML = ss.value;
    };
    var ls = document.getElementById("lightnessSlider");
    var lv = document.getElementById("lightnessVal");
    lv.innerHTML = ls.value;
    ls.onchange = function(){
        spiral.lightnessRange = ls.value;
    };
    ls.oninput = function(){
        lv.innerHTML = ls.value;
    };
});