//prevent loading error
document.getElementById('warning').remove();

//short getElementById
elem = function (id) {
    return document.getElementById(id);
}

//count until date
const newYearDate = new Date(`Jan 1, ${new Date().getFullYear() + 1} 00:00:00`).getTime();

//title angles
const todayDate = new Date().getTime();
const todaySecondsLeft = (newYearDate - todayDate) / 1000;
const todayDays = parseInt(todaySecondsLeft / 86400);
const randMer = Math.floor(Math.random() * (4 - 1 + 1)) + 1;
const randVen = Math.floor(Math.random() * (10 - 4 + 1)) + 4;
const randMar = Math.floor(Math.random() * (16 - 8 + 1)) + 8;
const style = document.createElement('style');
style.innerHTML = '.orbit-mercury {transform: translate(-50%, -50%) rotate(' + randMer + 'deg)} .orbit-venus {transform: translate(-50%, -50%) rotate(' + randVen + 'deg)} .orbit-mars {transform: translate(-50%, -50%) rotate(' + randMar + 'deg)} .planet-mercury {transform:rotate(-' + randMer + 'deg)} .planet-venus {transform:rotate(-' + randVen + 'deg)} .planet-mars {transform:rotate(-' + randMar + 'deg)} .planet-earth {transform:rotate(' + todayDays + 'deg)} .planet-venus {transform:rotate(-' + randVen + 'deg)} ';
document.head.appendChild(style);

//countdown vars
let days, hours, minutes, seconds;

//countdown
const countDown = setInterval(function () {

    const rightNow = new Date().getTime();
    const timeTo = newYearDate - rightNow;

    days = Math.floor(timeTo / (1000 * 60 * 60 * 24));
    hours = Math.floor((timeTo % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    minutes = Math.floor((timeTo % (1000 * 60 * 60)) / (1000 * 60));
    seconds = Math.floor((timeTo % (1000 * 60)) / 1000);

    if (hours < 10) hours = "0" + hours;
    if (minutes < 10) minutes = "0" + minutes;
    if (seconds < 10) seconds = "0" + seconds;

    elem("cronoNewYear").innerHTML = days + " <span>DAYS</span> &nbsp;" + hours + ":" + minutes + ":" + seconds + " <span>LEFT</span>";
    let newDays;
    if (days < 0) {
        elem("cronoNewYear").style.display = 'none';
        newDays = days.toString().substr(1);
    } else {
        newDays = "-" + days;
    }
    elem("position-earth").style.transform = 'translate(-50%, -50%) rotate(' + newDays + 'deg';

    let solsDays;
    const cDays = days - 11;
    if (cDays < 0) {
        elem("cronoWinterSolstice").style.display = 'none';
    } else {
        solsDays = cDays
    }
    elem("cronoWinterSolstice").innerHTML = solsDays + " <span>DAYS</span> &nbsp;" + hours + ":" + minutes + ":" + seconds + " <span>LEFT</span>";

    const opacityList = document.querySelectorAll('.planet');
    for (let i = 0; i < opacityList.length; i++) {
        opacityList[i].style.opacity = '1';
    }

    if (timeTo < 0) {
        clearInterval(countDown);
    }

}, 1000);