var $mainSprite = $('#main-sprite'),
	started = false,
	playing = true,
	timeOut = 2000;

var moveMainSprite = function() {
	$('.snowball').on('mousemove', function( event ) {
		if (started) {
			$mainSprite.css('left', event.pageX - 30);
			$mainSprite.css('top', event.pageY - 50);
		}
	});

	$mainSprite.on('click', function(event) {
		started = true;
	});
};

var createSnowball = function() {
	var yPos,
		leftRight;
	if (started) {
		yPos = getRandomInt(0, $('body').height()); 
		leftRight = getRandomInt(0, 2) * ($('body').width() - 50);
		$('.snowball').append('<img data-side="' + leftRight + '" style="position: absolute; left: ' + leftRight + 'px; top: ' + yPos + 'px" class="snowball-sprite" src="images/Snowball.png">');
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

