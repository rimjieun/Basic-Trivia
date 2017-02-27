$(document).ready(function() {

	//-------------------------------Create Start Button----------------------------------------
	$("#gameSection").html("<button type='button' onclick='startGame()'>Start</button>");

	var button = $("button");

	button.css({"background-color":"red", "width":"200", "height":"80", "font-size":"30px"});

	// button.click(startGame); // start game when start button is clicked

startGame();

	//-------------------------------Create game functions--------------------------------------
	function startGame() {

		// THINGS I NEED:
				// page with questions & answer choices
				// DONE button
				// finish page

		var questionAnswers = [
			{question: "Q1", answers: ["A", "B", "C", "D"]},
			{question: "Q2", answers: ["A", "B", "C", "D"]},
			{question: "Q3", answers: ["A", "B", "C", "D"]},
			{question: "Q4", answers: ["A", "B", "C", "D"]},
			{question: "Q5", answers: ["A", "B", "C", "D"]},
			{question: "Q6", answers: ["A", "B", "C", "D"]}
		];


		for (i = 0; i < questionAnswers.length; i++) {
			$("#gameSection").append("<p id='question'>" + questionAnswers[i].question + "</p>");
			$("#gameSection").append("<p id='answers'>" + questionAnswers[i].answers + "</p>");
			console.log(questionAnswers[i].question);	



		}


		


		

	};




})