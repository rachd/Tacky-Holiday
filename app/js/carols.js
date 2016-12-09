var number,
	audio = new Audio(),
	playing = [false, false, false, false, false, false, false];

var pickRand = function() {
	return Math.floor(Math.random() * 3);
}

var playFirstRow = function() {
	if (!playing[0]) {
		number = pickRand();
		changePlaying(['audio/carol-of-the-bells.mp3', 'audio/wassailing.mp3', 'audio/jingle-bells.mp3'][number]);
		setBools(0);
	}
}

var playSecondRow = function() {
	if (!playing[1]) {
		number = pickRand();
		changePlaying(['audio/all-i-want.mp3', 'audio/rockin-around.mp3', 'audio/feliz-navidad.mp3'][number]);
		setBools(1);
	}
}

var playThirdRow = function() {
	if (!playing[2]) {
		number = pickRand();
		changePlaying(['audio/holly-jolly.mp3', 'audio/most-wonderful-time.mp3', 'audio/rudolph.mp3'][number]);
		setBools(2);
	}
}

var playFourthRow = function() {
	//fix this row
	if (!playing[3]) {
		number = pickRand();
		changePlaying(['audio/grinch.mp3', 'audio/o-tannenbaum.mp3', 'audio/frosty.mp3'][number]);
		setBools(3);
	}
}

var playFifthRow = function() {
	if (!playing[4]) {
		number = pickRand();
		changePlaying(['audio/hark-the-herald.mp3', 'audio/home-for-the-holidays.mp3', 'audio/coming-to-town.mp3'][number]);
		setBools(4);
	}
}

var playSixthRow = function() {
	if (!playing[5]) {
		number = pickRand();
		changePlaying(['audio/o-come-all.mp3', 'audio/christmas-song.mp3', 'audio/let-it-snow.mp3'][number]);
		setBools(5);
	}
}

var playSeventhRow = function() {
	if (!playing[6]) {
		number = pickRand();
		changePlaying(['audio/cold-outside.mp3', 'audio/santa-baby.mp3', 'audio/mommy-kissing.mp3'][number]);
		setBools(6);
	}
}

var setBools = function(current) {
	for (var i = 0; i < 6; i++) {
		playing[i] = false;
	}
	playing[current] = true;
}

var changePlaying = function(song) {
	audio.pause();
	audio = new Audio(song);
	audio.play();
}

$(window).scroll(function() {
	var firstOffset = $('#row1').offset().top,
		secondOffset = $('#row2').offset().top,
		thirdOffset = $('#row3').offset().top,
		fourthOffset = $('#row4').offset().top,
		fifthOffset = $('#row5').offset().top,
		sixthOffset = $('#row6').offset().top,
		seventhOffset = $('#row7').offset().top,
		windowScroll = $(window).scrollTop(),
		windowHeight = $(window).height();
  	
  	if( (seventhOffset - windowScroll - windowHeight) <= 0) {
    	playSeventhRow();
  	} else if ( (sixthOffset - windowScroll - windowHeight) <= 0) {
  		playSixthRow();
  	} else if ( (fifthOffset - windowScroll - windowHeight) <= 0) {
  		playFifthRow();
  	} else if ( (fourthOffset - windowScroll - windowHeight) <= 0) {
  		playFourthRow();
  	} else if ( (thirdOffset - windowScroll - windowHeight) <= 0) {
  		playThirdRow();
  	} else if ( (secondOffset - windowScroll - windowHeight) <= 0) {
  		playSecondRow();
  	} else {
  		playFirstRow();
  	}
});

$(document).ready(function() {
	playFirstRow();
});