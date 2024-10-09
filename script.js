let [hours, minutes, seconds] = [0, 0, 0];
let countdown = document.getElementById('countdown');
let timer = null;
let lapList = document.getElementById('lapList');

function updateDisplay() {
    let h = hours < 10 ? "0" + hours : hours;
    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;
    countdown.innerHTML = h + ":" + m + ":" + s;
}

function stopwatch() {
    seconds++;
    if (seconds === 60) {
        seconds = 0;
        minutes++;
        if (minutes === 60) {
            minutes = 0;
            hours++;
        }
    }
    updateDisplay(); 
}

function timestart() {
    if (timer === null) {
        timer = setInterval(stopwatch, 1000);
    }
}

function changetext() {
    const button = document.getElementById('startbtn');
    if (button.innerHTML === "Start") {
        button.innerHTML = "Pause";
        timestart(); 
    } else {
        button.innerHTML = "Start";
        clearInterval(timer); 
        timer = null; 
    }
}

function resettimer() {
    clearInterval(timer); 
    timer = null;
    hours = 0;  
    minutes = 0;
    seconds = 0;
    updateDisplay();
    lapList.innerHTML = "";
    const button = document.getElementById('startbtn');
    button.innerHTML = "Start"; 
}

function recordLap(){
    let lapItem = document.createElement('li');
    let lapTime=`${hours<10 ? "0"+hours:hours}:${minutes<10 ? "0"+minutes:minutes}:${seconds<10 ? "0"+seconds:seconds}`
    lapItem.innerText=`lap:${lapTime}`;
    lapList.appendChild(lapItem);
}  
updateDisplay();

