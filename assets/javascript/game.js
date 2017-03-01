$(document).ready(function() {

	var correct = 0;
	var incorrect = 0;
	var unanswered = 0;
	var selectedAnswers = [];
	var correctAnswers = [];

	var questionAnswers = [
			{question: "Q1", choices: ["A", "B", "C", "D"], answer: "C"},
			{question: "Q2", choices: ["A", "B", "C", "D"], answer: "B"},
			{question: "Q3", choices: ["A", "B", "hello", "D"], answer: "A"},
			{question: "Q4", choices: ["A", "B", "C", "D"], answer: "C"},
			{question: "Q5", choices: ["A", "B", "C", "D"], answer: "D"},
			{question: "Q6", choices: ["A", "B", "C", "D"], answer: "D"}
		];

	// startGame()
	// No need to restart; will need to reload to play again
	function startGame() {

		// Creating the quiz
		// Replace Start button with a new <div> to wrap quiz template
		createQuiz();
		

		// Store selected answers in array in order of questions-------------------------------------
		$("input").on("change", function() {
			var index = $(this).parent().attr("value");
			selectedAnswers[index] = $(this).val();
			console.log(selectedAnswers);
		});
		//-------------------------------------------------------------------------------------------

		$("#done-button").on("click", function() {
			checkAnswers(); // why can't I call this outside of startGame()?
			showResults();
		});

	}; // startGame ends

	function createQuiz() {
		$("#gameSection").html("<div id='quiz'></div>");
	
		// 
		for (i = 0; i < questionAnswers.length; i++) {
			$("#quiz").append("<p class='question' value=" + i + ">" + questionAnswers[i].question + "</p>");
			$("#quiz").append("<form class='answerChoices' value=" + i + "></form>");
			var choicesList = questionAnswers[i].choices;
			for (j = 0; j < choicesList.length; j++) {
				$("form[value=" + i + "]").append("<input type='radio' name='answerChoice' value=" + choicesList[j] + ">" + choicesList[j] + "</input>");
			}
		}

		$("#gameSection").append("<button id='done-button'>Done</button>");
	}

	
	function checkAnswers() {
		for (i = 0; i < questionAnswers.length; i++) {
			if (selectedAnswers[i] !== undefined) {
				if (selectedAnswers[i] === questionAnswers[i].answer) {
					correct++;
				}
				else {
					incorrect++;
				}
			}
			else {
				unanswered++;
			}
		}
	}

	function showResults() {
		$("#gameSection").html("<div id='results'></div>");
		$("#results").append("<h2>All Done!</h2>");
		$("#results").append("<p>Correct: " + correct + "</p>");
		$("#results").append("<p>Incorrect: " + incorrect + "</p>");
		$("#results").append("<p>Unanswered: " + unanswered + "</p>");
	}

	

	$("#start-button").on("click", function() {
		startGame();
	});



	


}); // document.ready ends