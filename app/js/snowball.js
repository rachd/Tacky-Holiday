var $mainSprite = $('#main-sprite'),
	started = false;

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

$(document).ready(function(){
	moveMainSprite();
});

