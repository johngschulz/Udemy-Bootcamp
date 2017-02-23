function printReverse(array){
	for(var i = array.length -1; i>=0; i--){
		console.log(array[i]);
	}
}
printReverse(["a", "b", "c"]);

function isUniform(array){
	for(i = 0; i< array.length -1; i++){
		var comparator = array[i];
		if(comparator !== array[i+1]){
			return false;
		}
	}
	return true;
}
isUniform(["a", "b", "c"]);
isUniform(["a", "a", "a"]);
isUniform([1, 1, 1]);
isUniform([1, 2, 2]);

function sumArray(array){
	var arraySum = 0;
	for(i=0; i<array.length; i++){
		arraySum+=array[i];
	}
	return arraySum;
}

function max(array){
	var max;
	for(i=0; i<array.length; i++){
		if(max === undefined){
			max = array[i];
		}
		else if(array[i] > max){
			max = array[i];
		}
	}
	return max;
}