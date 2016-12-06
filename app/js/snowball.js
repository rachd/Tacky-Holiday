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
		leftRight = getRandomInt(0, 2) * ($('body').width() - 40);
		$('.snowball').append('<img style="position: absolute; left: ' + leftRight + 'px; top: ' + yPos + 'px" class="snowball-sprite" src="images/Snowball.png">');
	}
}

var increaseSnowballs = function() {

}

var getRandomInt = function(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

$(document).ready(function(){
	moveMainSprite();
	for (var i = 0; i < 4; i++) {
		setTimeout(function(){
			createSnowball();
		}, timeOut);
	}
});

