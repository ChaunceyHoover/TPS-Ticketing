var current = 1;

setInterval(function() {
	current++;
	switch(current) {
		case 1:
			$("html").css("background", "url('/img/background-1.png') no-repeat fixed center center");
			break;
		case 2:
			$("html").css("background", "url('/img/background-2.png') no-repeat fixed center center");
			break;
		default:
			$("html").css("background", "url('/img/background-3.png') no-repeat fixed center center");
			current = 0;
			break;
	}
}, 3000);