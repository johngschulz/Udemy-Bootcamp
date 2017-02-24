// select html document elements
var el = document.querySelector("button");
// var bod = document.querySelector("body");

// initialized starting properties
// var isPurple = false;
var buttoncounter = 0;

// button click counter, logged in console
if(el){
	el.addEventListener("click", function(){
		var eventlog = "You clicked the button!";
		buttoncounter +=1;
		eventlog += buttoncounter;
		console.log(eventlog);
	});
}
// Event toggles body background white and purple on button click
// el.addEventListener("click", function(){
// 	if(isPurple){
// 		bod.style.background = "white";
// 	}
// 	else{
// 		bod.style.background = "purple";
// 	}
// 	isPurple = !isPurple;
// });

// refactored to use classList toggle to change property
el.addEventListener("click", function(){
	document.body.classList.toggle("purple");
});