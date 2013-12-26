var output = document.getElementById("output");
var stats = document.getElementById("stats");
function calc(n){

	var steps = 0;
	var out = "";
	while(n!=1){
		steps++;
		out += n+" - ";
		if(n%2==0){
			n = n/2;
		}else{
			n = 3*n+1;
		}
	}
	out += "1";

	output.innerHTML = out;
	stats.innerHTML = steps+" steps taken.";

}
calc(42);

var input = document.getElementById("input");
input.onchange = function(){
	var val = input.value;
	var valInt = parseInt(val);
	if(valInt.toString()===val && valInt>=1){
		calc(valInt);
	}
};

function random(){
	var n = Math.floor(Math.random()*1000);
	input.value = n;
	calc(n);
}