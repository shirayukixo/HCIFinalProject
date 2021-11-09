var score = 0;
    
function changeScore(change) {
    score += change;
    textElement.innerText = "Save 10 ices before they melt! Score: " + score; 
    if (score == 10) {        
        window.location.replace("antarcticacompleted.html");

    }   
}

var goalX = 300;
var goalY = 300;
var goalW = 128;
var goalH = 128;
var goalImg;

function createGoal() {
    goalImg = document.createElement('img');
    goalImg.src = "../images/antarctica23.png";
    goalImg.style.position = "absolute";
    goalImg.style.top = goalY + "px";
    goalImg.style.left = goalX + "px";
    goalImg.style.width = goalW + "px";
    goalImg.style.height = goalH + "px";
    document.body.appendChild(goalImg);

}

function moveGoal() {
    goalX = Math.random() * 600;
    goalY = Math.random() * 600;
    goalImg.style.top = goalY + "px";
    goalImg.style.left = goalX + "px";
}

createGoal();

