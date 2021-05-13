setInterval(setTimeForClock, 1000)

const hour = document.getElementById('hour');
const minute = document.getElementById('minute');
const second = document.getElementById('second');

function setTimeForClock(){
    const currentDate = new Date()
    const secondsRatio = currentDate.getSeconds() / 60;
    const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60;
    const hoursRatio = (minutesRatio + currentDate.getHours()) / 12;
    setRotation(hour, hoursRatio)
    setRotation(minute, minutesRatio)
    setRotation(second, secondsRatio)
}

function setRotation(element, rotationRatio){
    element.style.setProperty('--rotation', rotationRatio * 360)
}

setTimeForClock()