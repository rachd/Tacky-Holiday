var count = 0,
	showModal = true;
var showModal = function(){
	if ($('body').scrollTop() >= 100 && showModal) {
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
	showModal();
});
