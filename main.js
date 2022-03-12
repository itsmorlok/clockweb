onload = updateTime();
setInterval(updateTime, 1000);

function updateTime() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
    document.getElementById("time").innerHTML = hours + ":" + minutes + ":" + seconds;

    if(hours < 7) {
        document.getElementById("time").style.color = "rgb(115, 115, 115)";
    }

    if(hours > 7 && hours < 18) {
        document.getElementById("time").style.color = "white";
    }

    if(hours > 18) {
        document.getElementById("time").style.color = "rgb(115, 115, 115)";
    }
}