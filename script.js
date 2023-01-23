
var sten = 0;
var mten = 0;
var hten = 0;

var sec = 0;
var min = 0;
var hrs = 0;

var stopBtn = document.getElementById('stop');
var resetBtn = document.getElementById('reset');
var startBtn = document.getElementById('start');
var time = document.getElementById('time');

var startf = setInterval(function(sten,mten,hten,sec,min,hrs){
    // if(parseInt(sec)==9){
    //     sec=0;
    //     if(parseInt(min)==9){
    //         min=0;

    //         if(parseInt(hrs)==9){
    //             hrs=0;
    //             if(parseInt(hten)==9){
    //                 hten=0;
    //                 hrs=0;
    //                 mten=0;
    //                 min=0;
    //                 sten=0;
    //                 sec=0;
    //                 time.innerHTML = '00 00 00';
    //                 return;
    //             }
    //             else{
    //                 hten = parseInt(hten)+1;
    //                 time.innerHTML = hten+hrs+" "+mten+min+" "+sten+sec; 
    //                 return;
    //             }
    //         }
    //     }else{
    //         parseInt(min)+1;
    //         time.innerHTML = hten+hrs+" "+mten+min+" "+sten+sec; 
    //         return;
    //     }
    // }
    // else{
    //     sec = parseInt(sec)+1;
    //     time.innerHTML = hten+hrs+" "+mten+min+" "+sten+sec; 
    //     return;
    // }
},1000);

stopBtn.addEventListener('click', function(){
    console.log('Stop Btn');
})
startBtn.addEventListener('click', function(){
    console.log('Start Btn');
})
resetBtn.addEventListener('click', function(){
    console.log('Reset Btn');
})