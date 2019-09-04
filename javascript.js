
var sum=0;

function score(){

	var num = Math.floor( (Math.random() *6 ) )+1;
	var source= "dice-" + num + ".png";

	document.getElementById("pic").src=source;
	sum=sum+num;
   
	document.getElementById("score").innerHTML = sum;
 
}

// function timer{

// 	 var now=new Date.getTime();
// 	 const time= now.getSeconds()+20;

// 	 var dist=time-now;

// 	 document.getElementById("timerValue").innerHTML=dist;
// // }

// function timer{}
// var timeleft = 20;
// var downloadTimer = setInterval(function(){
//   document.getElementById("timerVakue").innerHTML = timeleft + " seconds";
//   timeleft -= 1;
//   if(timeleft <= 0){
//     clearInterval(downloadTimer);
//     document.getElementById("text").innerHTML = "Finished"
//   }
// }, 1000);



