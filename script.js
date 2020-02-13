function sound(src) {
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.sound.setAttribute("preload", "auto");
    this.sound.setAttribute("controls", "none");
    this.sound.style.display = "none";
    document.body.appendChild(this.sound);
    this.play = function(){
        this.sound.play();
    }
    this.stop = function(){
        this.sound.pause();
    }
}

function getRand(min, max){
    ++max;
    return parseInt(Math.random()*(max-min)+min);
}
function showBeaver(){
    const rand = getRand(11, 14);
    this.element = document.getElementById(rand);
    this.element.src = "./img/beaver.jpeg";
    return rand;
}
function hideBeaver(currentBox){
    this.element = document.getElementById(currentBox);
    this.element.src = "./img/hole.jpg";
    return 0;
}

var currentBox = 0;
var score = 0;
function playGame(){
    var count=2;
    setInterval(function(){
        if(count==2){
            currentBox = showBeaver(); 
            count=-1;
        }
        if(count==0){
            currentBox = hideBeaver(currentBox);
        }
        count++;
    }, 1000);
}
function hammer(i){
    if(i==currentBox){
        score += 50;
        document.getElementById("score").innerHTML = score;
    }
}

playGame();