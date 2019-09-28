
var sum=0;

var t=20;

function score(){

	if(t<2+0){
		document.getElementById('roll').disable = true;
		alert("Your time is over.");
	}

	else if(t<20 && t>=0){


		var num = Math.floor( (Math.random() *6 ) )+1;
		var source= "dice-" + num + ".png";

		document.getElementById("pic").src=source;
		sum=sum+num;
   
		document.getElementById("score").innerHTML = sum;

	}

	else if(t===20){

		var num = Math.floor( (Math.random() *6 ) )+1;
		var source= "dice-" + num + ".png";

		document.getElementById("pic").src=source;
		sum=sum+num;
   
		document.getElementById("score").innerHTML = sum;

		timer();
	}
 
}

function timer(){

  setTimeout(function() {timer();}, 1000);
  if (t<0){
  	document.getElementById("roll").disabled=true;
  }
  else{
  document.getElementById("timerValue").innerHTML = t;
   t -= 1;
}
 
}



