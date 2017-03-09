// Check off todos by clicking
$("ul").on("click", "li", function(){
	$(this).toggleClass("completed")
});
//click on span to delete todo
$("ul").on("click", "span", function(e){
	$(this).parent().fadeOut(1000, function(){
		$(this).remove();
	});
	e.stopPropagation();
});
//input new todo task and appends to list
$("input[type='text']").keypress(function(e){
	if(e.which === 13){
		//grabbing new todo text from input
		var todoText = $(this).val();
		$(this).val("");
		//create new li and add to ul
		$("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText +"</li>")
	}
})
//toggles the input for new todo items
$(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle();
})