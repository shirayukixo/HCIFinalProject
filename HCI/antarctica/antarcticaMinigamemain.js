const textElement = document.getElementById("title");
const charImg = document.getElementById("char-img");
textElement.innerText = "Save 10 ices before they melt! Score: 0 (Use arrow key to move the penguin)" ;
var x = 100;
var y = 100;
var charH = 128;
var charW = 128;
charImg.style.position = "absolute";
charImg.style.top = y + "px";
charImg.style.left = x + "px";
charImg.style.height = charH + "px";
charImg.style.width = charW + "px";

var speed = 6;

var up = false;
var down = false;
var left = false;
var right = false;

function keyDown(event) {
    switch(event.keyCode) {
        case 39:
            right = true;
            break;
        case 37:
            left = true;
            break;
        case 38:
            up = true;
            break;
        case 40:
            down = true;
            break;
    }
}

function keyUp(event) {
    switch(event.keyCode) {
        case 39:
            right = false;
            break;
        case 37:
            left = false;
            break;
        case 38:
            up = false;
            break;
        case 40:
            down = false;
            break;
    }
}

function moveChar() {
    if (right) {
        x = x + speed;
    }
    if (left) {
        x = x - speed;
    }
    if (down) {
        y = y + speed;
    }
    if (up) {
        y = y - speed;
    }

    charImg.style.top = y + "px";
    charImg.style.left = x + "px";

    if (x + charW >= goalX && x < goalX + goalW) {
        if (y + charH >= goalY && y < goalY + goalH) {
            changeScore(1);
            moveGoal();
        }
    }    
}

setInterval(moveChar, 5);

window.onkeydown = keyDown
window.onkeyup = keyUp