var $mainSprite = $('#main-sprite'),
	started = false,
	timeOut = 500;

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
		for (var i = 0; i < 1; i++) {
			yPos = getRandomInt(0, $('body').height() - 40); 
			leftRight = getRandomInt(0, 2) * ($('body').width() - 60);
			var snow = new Snowball(leftRight, yPos);
        	snow.slide();
		}
        timeOut -= 50;
	}
}

var makeSnowballs = setInterval(createSnowball, timeOut);

var youLose = function() {
	started = false;
	clearInterval(makeSnowballs);
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
			if(allElementsFromPoint(event.pageX, event.pageY).length > 3) {
				youLose();
				return;
			}
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

$mainSprite.on('click', function(event) {
	started = true;
});

