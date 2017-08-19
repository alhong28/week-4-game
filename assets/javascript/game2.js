//random number from 50-150

var targetNumber = Math.floor((Math.random()*101)+50);
	$("#number-to-guess").text(targetNumber);
	var counter = 0 

var number1 = 10;
var number2 = 5;
var number3 = 3;
var number4 = 7;

var imageCrystal1 = $("<img>");
var imageCrystal2 = $("<img>");
var imageCrystal3 = $("<img>");
var imageCrystal4 = $("<img>");

imageCrystal1.addClass("crystal-image1");
imageCrystal1.attr("src", "assets/images/blue.jpg");
imageCrystal1.attr("data-crystalvalue1", number1);
$("#crystal").append(imageCrystal1);

imageCrystal2.addClass("crystal-image2");
imageCrystal2.attr("src", "assets/images/white.jpg");
imageCrystal2.attr("data-crystalvalue2", number2);
$("#crystal2").append(imageCrystal2);

imageCrystal3.addClass("crystal-image3");
imageCrystal3.attr("src", "assets/images/purple.jpg");
imageCrystal3.attr("data-crystalvalue3", number3);
$("#crystal3").append(imageCrystal3);

imageCrystal4.addClass("crystal-image4");
imageCrystal4.attr("src", "assets/images/turquoise.jpg");
imageCrystal4.attr("data-crystalvalue4", number4);
$("#crystal4").append(imageCrystal4);

$(".crystal-image1").on("click", function() {

	var crystalvalue1 = ($(this).attr(data-crystalvalue1));

	counter += crystalvalue1;

	

})

