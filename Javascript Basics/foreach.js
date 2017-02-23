function myforEach(arr, func){
//loop through array
//call func for each item in the array
	for(var i=0; i< arr.length; i++){
		//call func for each item in the array.
		func(arr[i]);
	}
}
Array.prototype.myForEach = function(func){
    for(var i=0; i<this.length; i++){
        func(this[i]);
    }
};