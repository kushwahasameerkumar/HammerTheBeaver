async function sound(src) {
    this.sound = await document.createElement("audio");
    this.sound.src = await src;
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

    return this.sound;
}

function playSound(){
    const s = document.getElementById("gameSound");
    s.play();
}

function getRand(min, max){
    ++max;
    return parseInt(Math.random()*(max-min)+min);
}
function showBeaver(){
    const rand = getRand(1, 10);
    this.element = document.getElementById(rand);
    this.element.src = "./img/beaver.jpeg";
    return rand;
}
function hideBeaver(currentBox){
    this.element = document.getElementById(currentBox);
    this.element.src = "./img/hole.png";
    return 0;
}

var currentBox = 0;
var score = 0;
var done = false;
function playGame(){
    var count=2;
    setInterval(function(){
        if(count==2){
            currentBox = showBeaver(); 
            count=-1;
        }
        if(count==0){
            currentBox = hideBeaver(currentBox);
            done = false;
        }
        count++;
    }, 800);
}

function hammer(i){
    if(i==currentBox && done==false){
        score += 50;
        document.getElementById("score").innerHTML = score;
        done=true;
    }
}

playGame();
setTimeout(function(){
    playSound();
}, 3000);