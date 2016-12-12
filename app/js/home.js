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

var turnModalsOn = function() {
	if (!showModal) {
		alert('Due to your continued stay on our website, we turned the modals back on.')
		showModal = true;
		$('#myModal').modal();
		$('.stopModal').text('Stop The Modals!!!');
	}
}

var modalTimeout = window.setInterval(turnModalsOn, 7000);

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
	if (!($('html').is('.lt-ie8'))) {
		alert("Hi, we noticed that you are using one of those new-fangled browsers. We recommend using a tried-and-true browser such as Internet Explorer 7 instead.");
	}
	$('#myModal').modal();
	count ++;
});
