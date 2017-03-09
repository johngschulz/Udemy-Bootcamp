$("#fade").on("click", function(){
	$("div").fadeToggle(500);
	if($("#fade").text() === "Fade Out"){
		$("#fade").text("Fade In");
	}else{
		$("#fade").text("Fade Out");
	}
});

$("#slide").on("click", function(){
	$("div").slideToggle(1000);
	if($("#slide").text() === "Slide Up"){
		$("#slide").text("Slide Down");
	}else{
		$("#slide").text("Slide Up");
	}
});

