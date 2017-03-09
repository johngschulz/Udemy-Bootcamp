$("div").css("background", "purple");
$(".highlight").css("width", "200px");
$("#third").css("border", "3px solid orange");
$("div").first().css("color", "pink");
$("body").css("background", "lightblue");
$("div").first().click(function(){
	alert("First");
});
$(".highlight").first().click(function(){
	alert("Second");
});