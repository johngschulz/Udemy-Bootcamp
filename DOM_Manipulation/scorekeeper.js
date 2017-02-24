var p1Button = document.querySelector("#p1");
var p2Button = document.getElementById("p2");
var resButton = document.getElementById("reset");
var p1Score = 0;
var p2Score = 0;
var p1Display = document.querySelector("#p1Score");
var p2Display = document.querySelector("#p2Score");
var gameOver = false;
var winningScore = 5;
var input = document.querySelector("input");
var toWin = document.querySelector("#toWin");

p1Button.addEventListener("click", function(){
	// updateScore(p1Score, p1Display);
	if(!gameOver){
		p1Score++;
		if(p1Score === winningScore){
			p1Display.classList.add("winner");
			gameOver = true;
		}
		p1Display.textContent = p1Score;
}})
p2Button.addEventListener("click", function(){
	// updateScore(p2Score, p2Display);
	if(!gameOver){
		p2Score++;
		if(p2Score === winningScore){
			p2Display.classList.add("winner");
			gameOver = true;
		}
		p2Display.textContent = p2Score;
}});
resButton.addEventListener("click", function(){
	reset();
});

function reset(){
	p1Score=0;
	p1Display.textContent = p1Score;
	p2Score=0;
	p2Display.textContent = p2Score;
	gameOver = false;
	p1Display.classList.remove("winner");
	p2Display.classList.remove("winner");
}

input.addEventListener("change", function(){
	toWin.textContent = this.value;
	winningScore = Number(this.value);
	reset();
})
// function updateScore(score, display){
// 	score++;
// 	display.textContent = score;
// }