/*
Checks if a number is prime
---------------------------
checks if n is prime, if it is returns true, otherwise returns false
This function is adapted from http://www.javascripter.net/faq/numberisprime.htm
*/

function isPrime(n) {
	if (isNaN(n) || !isFinite(n) || n%1 || n<2) return false;

	if (n%2==0) {
		if(n==2) return true;
		else return false;
	}
	if (n%3==0) {
		if (n==3) return true;
		else return false;
	}

	var m = Math.sqrt(n);
	for (var i = 5; i <= m; i += 6) {
		if (n%i==0)     return false;
		if (n%(i+2)==0) return false;
	}
return true;
}


$( document ).ready(function() {

	$("#firstplay").click(function(){
		var entry = prompt("Pick your number!");
		// if statement for if prime function == true then display "you won" else display "try again"
		var checked = isPrime(entry);
		if (checked) {
			alert("YOU WON $$$");
		} else {
			alert("Better luck next time, sucker!");
		}

	});

});