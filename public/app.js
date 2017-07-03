document.onkeydown = function (e) {
        return false;
}

var hour = document.getElementById('hours');
var minute = document.getElementById('minutes');
var second = document.getElementById('seconds');
var milli = document.getElementById('milli');
var count = 0;
var count1 = 0;
var count2 = 0;
var count3 = 0;
var myWatch;

function startWatch() {
    clearInterval(myWatch);
    myWatch = setInterval(function () {
        hour.innerHTML = count2;
        minute.innerHTML = count1;
        second.innerHTML = count;
        milli.innerHTML = count3++;

        if (count3 == 9) {
            count3 = 0;
            count++;
        }
        if (count == 59) {
            count = 0;
            count1++;
        }
        if(count1 == 59)
        {
            count1 = 0;
            count2++;
        }
    }, 105);
}

function stopWatch(){
    clearInterval(myWatch);
}

function resetWatch(){
    stopWatch();
    count = count1 = count2 = count3 = 0;
    hour.innerHTML = count2;
        minute.innerHTML = count1;
        second.innerHTML = count;
        milli.innerHTML = count3;
}

