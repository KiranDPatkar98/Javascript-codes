setInterval(time,1000)
function time(){
    let date=new Date();

    let hours=date.getHours()
    let min=date.getMinutes()
    let sec=date.getSeconds()
    let session="AM"
    if(sec<10){
sec="0"+sec;
    }
    if(min<10){
        min="0"+min;
    }
    if(hours<10){
        hours="0"+hours;
    }
    if(hours>=12){
        session="PM"
    }
    let current_time=`${hours}:${min}:${sec}:${session}`;
   

    document.getElementById("container").innerHTML=current_time;
}



