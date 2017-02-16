function isEven(num){
	return num%2 ===0;
}

function factorial(num){
	var factorial = 1;
	for(var i = num; i>1; i--){
		factorial *= i;
	}
	return factorial;
}

function kebabToSnake(str){
	return str.replace(/-/g,"_")
}