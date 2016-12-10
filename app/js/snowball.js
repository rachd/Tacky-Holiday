var $mainSprite = $('#main-sprite'),
	started = false,
	timeOut = 500,
	numSnow = 1,
	timeinterval;

var collisionCheck;

var Snowball = function Snowball(leftRight, yPos){
	this.leftRight = leftRight;
    this.$div = $('<img style="position: absolute; left: ' + leftRight + 'px; top: ' + yPos + 'px" class="snowball-sprite" src="images/Snowball.png">').appendTo('.snowball');
};

Snowball.prototype.slide = function(){
	if (this.leftRight === 0) {
		var ball = this.$div;
		var fullwidth = $('.snowball').width();
		ball.animate({left: fullwidth}, 5000);
	} else {
    	this.$div.animate({left: '-100px'}, 5000);
	}
};

var createSnowball = function() {
	var yPos,
		leftRight;
	if (started) {
		for (var i = 0; i < Math.floor(numSnow); i++) {
			yPos = getRandomInt(0, $('body').height() - 40); 
			leftRight = getRandomInt(0, 2) * ($('body').width() - 60);
			var snow = new Snowball(leftRight, yPos);
        	snow.slide();
		}
        numSnow += 0.1;
	}
}

var makeSnowballs = setInterval(createSnowball, timeOut);

var youLose = function() {
	var audio = new Audio('audio/goat-scream.mp3');
	audio.play();
	started = false;
	clearInterval(makeSnowballs);
	clearInterval(collisionCheck);
	clearInterval(timeinterval);
	$('.snowball-sprite').remove();
	$mainSprite.remove();
	$mainSprite.css('left', 'calc(50vw - 20px');
	$mainSprite.css('top', 'calc(50vh - 50px)');
	$('.snowball').append('<img class="snow-splat" src="images/snow_splat.png">');
	$('.snowball').append('<h1 class="lostMessage">You Lose! Refresh to play again.</h1>');
}

var moveMainSprite = function() {
	$('.snowball').on('mousemove', function( event ) {
		if (started) {
			$mainSprite.css('left', event.pageX - 30);
			$mainSprite.css('top', event.pageY - 50);
		}
	});
};

var allElementsFromPoint = function allElementsFromPoint(x, y) {
    var element, elements = [];
    var old_visibility = [];
    while (true) {
        element = document.elementFromPoint(x, y);
        if (!element || element === document.documentElement) {
            break;
        }
        elements.push(element);
        old_visibility.push(element.style.visibility);
        element.style.visibility = 'hidden'; // Temporarily hide the element (without changing the layout)
    }
    for (var k = 0; k < elements.length; k++) {
        elements[k].style.visibility = old_visibility[k];
    }
    elements.reverse();
    return elements;
};

var getRandomInt = function(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

$(document).ready(function(){
	moveMainSprite();
});

var checkForCollision = function() {
	var rect2 = document.getElementById('main-sprite').getBoundingClientRect(),
		snowBalls = document.getElementsByClassName('snowball-sprite'),
		rect1;
	for (var i = 0; i < snowBalls.length; i++) {
		rect1 = snowBalls[i].getBoundingClientRect();
		if (!(rect1.right < rect2.left || rect1.left > rect2.right || rect1.bottom < rect2.top || rect1.top > rect2.bottom)) {
			youLose();
			return;
		}
	}
}

$mainSprite.on('click', function(event) {
	started = true;
	$('.directions').css('display', 'none');
	$('#clockdiv').css('display', 'block');
	initializeClock('clockdiv');

	collisionCheck = setInterval(function(){
	    checkForCollision();
	}, 50);
});

/*
=================
Countdown Clock
=================
*/
var timeElapsed = -1000;

function getTimeRemaining(t){
  var seconds = Math.floor( (t/1000) % 60 );
  var minutes = Math.floor( (t/1000/60) % 60 );
  var hours = Math.floor( (t/(1000*60*60)) % 24 );
  var days = Math.floor( t/(1000*60*60*24) );
  return {
    'total': t,
    'days': days,
    'hours': hours,
    'minutes': minutes,
    'seconds': seconds
  };
}

function initializeClock(id){
	var clock = document.getElementById(id);
	var hoursSpan = clock.querySelector('.hours');
	var minutesSpan = clock.querySelector('.minutes');
	var secondsSpan = clock.querySelector('.seconds');
    function updateClock(){
    	timeElapsed += 1000;
	    var t = getTimeRemaining(timeElapsed);
	    hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
	    minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
	    secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);
	}

	updateClock(); // run function once at first to avoid delay
	timeinterval = setInterval(updateClock,1000);
}

