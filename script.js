var digitalElement = document.querySelector('.digital');
var sElement = document.querySelector('.p_s');
var mElement = document.querySelector('.p_m');
var hElement = document.querySelector('.p_h');

function updateClock(){
    var agora = new Date();
    var hora = agora.getHours();
    var minuto = agora.getMinutes();
    var segundo = agora.getSeconds();

    digitalElement.innerHTML = `${fixZero(hora)}:${fixZero(minuto)}:${fixZero(segundo)}`;

    var sDeg = ((360 / 60) * segundo) - 90;
    var mDeg = ((360 / 60) * minuto) - 90;
    var hDeg = ((360 / 12) * hora) - 90;

    sElement.style.transform = 'rotate(' + sDeg + 'deg)';
    mElement.style.transform = 'rotate(' + mDeg + 'deg)';
    hElement.style.transform = 'rotate(' + hDeg + 'deg)';
}

function fixZero(time){
    return time < 10 ? `0${time}` : time;

    /*
    if(time < 10){
        return '0' + time;
    } else {
        return time;
    }
    */
}


setInterval(updateClock, 1000);
updateClock();