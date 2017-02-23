var todos = [];
input = prompt("what would you like to do?");
while(input !== "quit"){
	if (input === "new"){
		createToDo();
	}
	else if(input === "list"){
		listToDos();
	}
	else if(input === "delete"){
		deleteToDo();
	}
	input = prompt("what would you like to do?");
}
console.log("You quit the program!");

function createToDo(){
	var newtodo = prompt("What do you need to do?");
	todos.push(newtodo);
	console.log("Created new ToDo!");
}
function listToDos(){
	console.log("**********");
	todos.forEach(function(todo, i){
		console.log(i + ": " +todo);
	});
	console.log("**********")
}
function deleteToDo(){
	//ask for index of todo to be deleted
	var index = prompt("Which todo index do you want to delete?");
	//delete that todo
	todos.splice(index, 1);
	console.log("Deleted ToDo!");
}