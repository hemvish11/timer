const startingMinutes=0;
// let time=startingMinutes*60;
let time=[60,3];

const timer=document.getElementById("sixty");


function playSound(){
    var ding=new Audio("marimba-ringtone-5-185156.mp3");
    ding.play();
}

let interval;
let button = document.getElementById("toggleButton");
let pauseButton=document.getElementById("pauseButton");
let resetButton=document.getElementById("resetButton");

let minutes;
let seconds;
function updateTimer(){
    minutes=Math.floor(time[1]/60);
    seconds=time[1]%60;
    seconds=seconds<10?'0'+seconds:seconds;

    timer.innerHTML=`${minutes}:${seconds}`;
    if(time[1]==0){
        button.style.display="block";
        pauseButton.style.display="none";
        resetButton.style.display="none";        
        stop();
    }
    time[1]--;

}
function toggle() {
    button = document.getElementById("toggleButton");
    
    // Check the current state
    if (button.innerHTML === "Stop Timer") {
        button.innerHTML = "Stopped";
        button.style.display='none';
        pauseButton.style.display="inline";
        resetButton.style.display="inline";
        reset();
    }     
    
    
}

function pause(){
    pauseButton=document.getElementById("pauseButton");
    if(pauseButton.innerHTML==="Pause Timer"){
        clearInterval(interval);
        pauseButton.innerHTML="Paused";
    }else{
        interval=setInterval(updateTimer, 1000);
        pauseButton.innerHTML="Pause Timer"
    }
}
function reset(){
    resetButton=document.getElementById("resetButton");
    if(resetButton.innerHTML==="Reset Timer"){
        clearInterval(interval);
        time[1]=time[0];
        minutes=Math.floor(time[1]/60);
        seconds=time[1]%60;
        seconds=seconds<10?'0'+seconds:seconds;
        timer.innerHTML=`${minutes}:${seconds}`;

        pauseButton.innerHTML="Paused";
        var container = document.querySelector('.btn-container');

        
        container.style.height = "300px";
    }
}

function updateTime(updateButton){
    let text=updateButton.innerHTML.substring(0,2);
    time[0]=text*60;
    time[1]=text*60;
    minutes=Math.floor(time[1]/60);
    seconds=time[1]%60;
    seconds=seconds<10?'0'+seconds:seconds;
    timer.innerHTML=`${minutes}:${seconds}`;
    // let buttons=document.getElementsByClassName("updater");
    // for(let i=0;i<buttons.length;i++){
    //     buttons[i].style.display="none";
    // }
    var container = document.querySelector('.btn-container');

    // Hide the container gradually
    container.style.height = '0';
    
}

function stop(){
    clearInterval(interval);
    if(button.innerHTML === "Stop Timer"){
        let interval2=setInterval(() => {
            if(button.innerHTML === "Stopped"){
                clearInterval(interval2);
            }else{
                playSound();
            }
        }, 4000);
    }    
}