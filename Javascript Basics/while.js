console.log("Print all numbers between -10 and 19")
var one = -10;
while(one<20){
	console.log(one);
	one++;
}
console.log("Print all even numbers between 10 and 40")
var two = 10;
while(two < 41){
	console.log(two);
	two+=2;
}
console.log("Print all odd numbers between 300 and 333")
var three = 301;
while(three<334){
	console.log(three);
	three+=2;
}
console.log("Print all numbers divisible by 5 and 3 between 5 and 50")
var four = 5;
while(four <51){
	if(four%3==0 && four%5==0){
		console.log(four);
	}
	four++;
}