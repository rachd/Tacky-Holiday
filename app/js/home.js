var count = 0,
	showModal = true;
var showModal = function() {
	if ($('body').scrollTop() >= 100 && showModal) {
		$('.modal-body').html('<iframe src="https://www.youtube.com/embed/0tQRXl4nsww?autoplay=1&controls=0&loop=1&playlist=0tQRXl4nsww"></iframe>');
		$('#myModal').modal();
		count ++;
		if (count >= 4) {
			$('.stopModal').css('display', 'block');
		}
	}
};

$(window).scroll(showModal);

$('.stopModal').click(function(){
	if (showModal) {
		showModal = false;
		$('.stopModal').text('More Modals Please!');
	} else {
		showModal = true;
		$('.stopModal').text('Stop The Modals!!!');
	}
});

$(document).ready(function() {
	$('#myModal').modal();
	count ++;
});
