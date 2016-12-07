var moveTitle = function() {
	var title = $('#jokesTitle')
		color = title.css('color') == 'rgb(29, 125, 35)' ? 'rgb(255, 0, 0)' : 'rgb(29, 125, 35)';
	title.css('color', color);
	setTimeout(function() {
		moveTitle();
	}, 400);
}

$(document).ready(function() {
	setTimeout(function() {
		moveTitle();
	}, 800);
});

var Jokes = function(question, answer, backgroundImg){
	this.question = question;
	this.answer = answer;
	this.backgroundImg = backgroundImg;
};

var joke1 = new Jokes("Q: What do Santa's elves learn in school?","A: The Elphabet", "url('images/joke-bg-1.png')");

var joke2 = new Jokes("Q: What does Santa like to do in the garden?","A: Hoe, Hoe, hoe!", "url('images/joke-bg2.gif')");

var joke3 = new Jokes("Q: What does Santa's elves drive?","A: Minivans", "url(images/joke-bg3.gif)");

var joke4 = new Jokes("Q: What do Santa's elves drink?","A: Minnesoda", "url('images/joke-bg4.gif')");

var joke5 = new Jokes("Q: What is Claustrophobia?","A: The fear of Santa Claus", "url('images/joke-bg5.png') ");

var joke6 = new Jokes("Q: What breakfast ceareal does Frosty the Snowman eat?","A: Snowflakes", "url('images/joke-bg6.png') ");

var joke7 = new Jokes("Q: What do you call a cat sitting on the beach on Christmas Eve?","A: Sandy Claws", "url('images/joke-bg7.png') ");

var joke8 = new Jokes("Q: Where does the snowman hide his money?","A: In the snow bank", "url('images/joke-bg8.gif') ");

var joke9 = new Jokes("Q: What type of cars do elves drive?","A: Toy-otas", "url('images/joke-bg9.jpg') ");

var joke10 = new Jokes("Q: Why did the Christmas tree go to the barber?", "A: It needed to be trimmed", "url('images/joke-bg10.jpg') ");

var joke11 = new Jokes("Q: What is a parents favorite christmas carol?","A: Silent Night", "url('images/joke-bg11.gif') ");

var jokeList = [joke1, joke2, joke3, joke4, joke5, joke6, joke7, joke8, joke9, joke10, joke11];

function newJoke(){
	var randomNumber = Math.floor(Math.random()*(jokeList.length));
	document.getElementById('questionDisplay').innerHTML = jokeList[randomNumber].question;
	document.getElementById('answerDisplay').innerHTML = jokeList[randomNumber].answer;
	document.body.style.background = jokeList[randomNumber].backgroundImg;
}