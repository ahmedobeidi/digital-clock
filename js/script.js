
function updateClock()
{
    const date = new Date();

    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    let time = hours;

    let meridiem = document.getElementById("meridiem");
    meridiem.textContent = "AM";

    if (hours == 0) { hours = 12;}
    if (time == 12) { meridiem.textContent = "PM";}
    if (hours > 12) { hours = hours - 12; meridiem.textContent = "PM";}
    if (hours < 10) { hours = `0${hours}`;}
    if (minutes < 10) { minutes = `0${minutes}`;}
    if (seconds < 10) { seconds = `0${seconds}`;}

    const currentTime = `${hours}:${minutes}:${seconds}`;
    document.getElementById("timer").textContent = currentTime;
}

updateClock();
setInterval(updateClock, 1000);