var movieArray = [
	{
	title:"Blazing Saddles", watched:true, rating:5
	},
	{
	title:"Young Frankenstein", watched:true, rating:5
	},
	{
	title:"Star Wars: Rogue One", watched:false, rating:4.5
	}

]
function listMovies(arr){
	for(i=0; i<arr.length; i++){
		if(arr[i].watched === true){
			console.log("You have watched " + arr[i].title + " - " + arr[i].rating + " stars");
		}
		else{
			console.log("You have not seen " + arr[i].title + " - " + arr[i].rating + " stars");
		}
	}
}