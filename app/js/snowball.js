var $mainSprite = $('#main-sprite');

var moveMainSprite = function() {
	$('.snowball').on('mousemove', function( event ) {
		$mainSprite.css('left', event.pageX - 30);
		$mainSprite.css('top', event.pageY - 50);
	});
};

$(document).ready(function(){
	moveMainSprite();
});

