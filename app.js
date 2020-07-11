
var min = 0;
var sec =0;
var milisec =0;
var interval;
var playbtn = document.getElementById("play")


var minHeading = document.getElementById("minut");
var secHeading = document.getElementById("sec");
var milisecHeading = document.getElementById("milisec");

function timer(){
    milisec++
    milisecHeading.innerHTML= milisec;
    if(milisec >= 100){
        sec++;
        secHeading.innerHTML = sec;
        milisec = 0;
  }
    
else if(sec >= 60){
        min++;
        minHeading.innerHTML = min;
        sec = 0;
    }
    playbtn.disabled = true;
}
function start(){
  interval=setInterval(timer, 10);
}

function stop(){
    

    clearInterval(interval)
    playbtn.disabled= false;
}

function reset(){

 min = 0;
 sec =0;
 milisec =0;
 milisecHeading.innerHTML= milisec;
 secHeading.innerHTML = sec;
 minHeading.innerHTML = min;

 stop();

}