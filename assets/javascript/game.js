$(document).ready(function() {


var button = '<button type="button" onclick="startGame()">Start</button>';

$("#gameSection").html(button);

$("#gameSection button").click(startGame());


function startGame() {

	alert("starting game");



};




})