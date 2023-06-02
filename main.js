var startbtn=document.getElementById('start')
var stopbtn=document.getElementById('stop')
var resetbtn=document.getElementById('reset')

var hour=00
var minute=00   
var second=00

function stopWatch(){
    if(timer){
        second++
        if(second==60){
            minute++;
            second=0
        }
        if(minute==60){
            hour++
            minute=0
            second=0
        }
        var hrString=hour
        var minString=minute
        var secString=second

        if(second<10){
            secString="0"+secString
        }
        if(minute<10){
            minString="0"+minString
        }
        if(hour<10){
            hrString="0"+hrString
        }
        document.getElementById('hr').innerText=hrString
        document.getElementById('min').innerText=minString
        document.getElementById('sec').innerText=secString
        setTimeout(stopWatch,10)
    }
}

startbtn.addEventListener('click',function(){
    timer=true;
    stopWatch();
})

stopbtn.addEventListener('click',function(){
    timer=false;
})
resetbtn.addEventListener('click',function() {
    timer = false;
    hour = 0;
    minute = 0;
    second = 0;
    document.getElementById('hr').innerHTML = "00";
    document.getElementById('min').innerHTML = "00";
    document.getElementById('sec').innerHTML = "00";
});