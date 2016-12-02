var moveTitle = function() {
	var title = $('#jokesTitle')
		color = title.css('color') == 'rgb(29, 125, 35)' ? 'rgb(255, 0, 0)' : 'rgb(29, 125, 35)';
	title.css('color', color);
	setTimeout(function() {
		moveTitle();
	}, 400);
}

$(document).ready(function() {
	setTimeout(function() {
		moveTitle();
	}, 800);
});