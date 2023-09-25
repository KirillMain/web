function changeItem() {
    document.getElementById("check").style.visibility = "hidden";
}
function rechangeItem() {
    document.getElementById("check").style.visibility = "visible";
}
function checkColor(chbox, color, n=0, k=2) {
    if (chbox.checked) {
        for (var i=n; i<els.length; i+=k) {
            // els[i].value = els[i].style.color; 
            //!!!

            clrs[i] = els[i].style.color;
            els[i].style.color = color;
        }
    } else {
        var qwe;
        for (var i=n; i<els.length; i+=k) {
            qwe = els[i].style.color;
            
            els[i].style.color = clrs[i];
            clrs[i] = "black";
        }
    }
}
function generateColor() {
    var col = '#' + Math.floor(Math.random() * 16777215).toString(16);
    console.log(col);
    return col;
}
function checkBoldOrItalic(chbox, bi) {
    if (chbox.checked) {
        for (var i=0; i<els.length; i+=1) {
            var txt = "<" + bi + ">" + els[i].innerHTML + "</" + bi + ">";
            els[i].innerHTML = txt;
        }
    } else {
        for (var i=0; i<els.length; i+=1) {
            var txt = els[i].innerHTML.replace("<" + bi + ">", "").replace("</" + bi + ">", "");
            els[i].innerHTML = txt;
        }
    }
}

var els = document.getElementsByClassName("list");
var clrs = ["black", "black", "black", "black", "black"];
for (var i=0; i<els.length; i++) {
    els[i].style.color = "black";
    console.log(clrs[i], els[i].style.color);
}


// все вызовы
function twoYellow() {
    var chbox = document.getElementById("one");
    var color = "yellow";
    checkColor(chbox, color, n=1);
}

function oneWhiteBlue() {
    var chbox = document.getElementById("two");
    var color = "#ade0e0";
    checkColor(chbox, color);
}

function all_i() {
    var chbox = document.getElementById("three");
    checkBoldOrItalic(chbox, "i");
}

function all_b() {
    var chbox = document.getElementById("four");
    checkBoldOrItalic(chbox, "b");
}

function textInRandomColor() {
    var chbox = document.getElementById("five");
    var color = generateColor();
    checkColor(chbox, color, 0, 1);
}

function pkmAlert(i) {
    var color = els[i].style.color;
    var txt = "\n";
    if (els[i].innerHTML.includes("<b>")) {
        txt += "Текст жирный";
    } else {
        txt += "Текст не жирный";
    }
    txt += "\n";

    if (els[i].innerHTML.includes("<i>")) {
        txt += "Текст курсивом";
    } else {
        txt += "Текст не курсивом";
    }
    alert("Цвет: " + String(color) + txt);
}