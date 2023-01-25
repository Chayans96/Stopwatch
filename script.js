
var sec = 0;
var min = 0;
var hrs = 0;
var s;
var m;
var h;
var interval;

//getting html elements 
var stopBtn = document.getElementById('stop');
var resetBtn = document.getElementById('reset');
var startBtn = document.getElementById('start');
var time = document.getElementById('time');

var startf = function(){
    //get sec min hrs 
     s = getSec();
     m = getMin();
     h = getHrs();
    time.innerHTML = h[0]+':'+m[0]+':'+s[0];
    return;
};

//function to get sec
function getSec(){
    if(sec<59){
        // console.log(sec);
        sec = sec+1;
        if(sec<10){
            //adding extra 0 to sec 
            return ['0'+sec, false];
        }
        else{
            //as sec is 2 digits so no extra 0 is required
            return [sec,false];
        }
    }
    else{
        //as sec - 60 so new min will start and sec will began from 00 again
        sec = 0;
     return ['00',true];
    }
}

function getMin(){
    // s[1] will let us know if new min starts or now 
    if(s[1] == false ){
        if(min<10){
            return ['0'+min,false];
        }
        else{
            return [min,false];
        }
    }
    else{
    // s[1]=true new min starts so we have to increase min by 1 
        if(min <59){
        min +=1;
            if(min <10){
                return ['0'+min, false];
            }
            else{
                return [min,false];
            }
        }
        else{
            min = 0;
            return ['00', true];
        }
    }
}

function getHrs(){
    if(m[1] == false){
        if(hrs<10){
            return ['0'+hrs,false];
        }
        else{
            return [hrs,false];
        }
    }
    else{
        hrs +=1;
        if(hrs<100){
            // hrs can be anything <100 but if hrs go over 100 then again we will start hrs with 00
            if(hrs<10){
            return ['0'+hrs,false]
            }
            else{
                return [hrs,false];
            }
        }
        else{
            //  starting hrs with 00 as hrg got over 100
            return ['00',false];
        }
    }
}


// event listner to stop button
stopBtn.addEventListener('click',function(){
    console.log('stop btn');
    clearInterval(interval);
})


// event listner to reset button
resetBtn.addEventListener('click',function(){
    console.log('reset btn');
    console.log(sec, min,hrs);
    sec = 0;
    min = 0;
    hrs = 0;
    console.log(sec, min,hrs);
    time.innerHTML = '00:00:00';
    clearInterval(interval);

    return;
})


// event listner to start button
startBtn.addEventListener('click',function(){
    console.log('start btn');
    interval = setInterval(startf,1000);
})



// old startf
/* 
    sec +=1;
    if(sec<=59){
    if(sec<10){

        //get mins 
        //get hrs 
        var minutes = getMins();
        var hours = getHrs();           
        time.innerHTML = hours+':'+minutes+':'+'0'+sec;
    }
    else{

        //get mins
        //get hrs
    var minutes = getMins();
    var hours = getHrs();    
    time.innerHTML = hrs+':'+min+':'+sec;
    }
    }
    else{
            sec=0;
            min +=1;
            var minutes = getMins();
            var hours = getHrs();   
        
    }
*/ 