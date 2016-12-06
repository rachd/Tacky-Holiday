var $mainSprite = $('#main-sprite'),
	started = false,
	playing = true,
	timeOut = 500;

var Snowball = function Snowball(leftRight, yPos){
	this.leftRight = leftRight;
    this.$div = $('<img data-side="' + leftRight + '" style="position: absolute; left: ' + leftRight + 'px; top: ' + yPos + 'px" class="snowball-sprite" src="images/Snowball.png">').appendTo('.snowball');
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

$mainSprite.on('click', function(event) {
	started = true;
});

var moveMainSprite = function() {
	$('.snowball').on('mousemove', function( event ) {
		if (started) {
			$mainSprite.css('left', event.pageX - 30);
			$mainSprite.css('top', event.pageY - 50);
		}
	});
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

var getRandomInt = function(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

$(document).ready(function(){
	moveMainSprite();
	var makeSnowballs = setInterval(createSnowball, timeOut);

});

