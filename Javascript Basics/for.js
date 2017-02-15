console.log("Print numbers between -10 and 19")
for(i=-10; i<20; i++){
	console.log(i);
}
console.log("Print even numbers between 10 and 40")
for(i=10; i<41; i+=2){
	console.log(i);
}
console.log("Print odd numbers between 300 and 333")
for(i=301; i<334; i+=2){
	console.log(i);
}
console.log("Print all numbers divisible by 5 AND 3 between 5 and 50")
for(i=5; i<=50; i++){
	if(i%3===0 && i%5===0){
		console.log(i);
	}
}