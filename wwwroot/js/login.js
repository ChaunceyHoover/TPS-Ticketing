var current = 1;

// setInterval(function() {
// 	current++;
// 	switch(current) {
// 		case 1:
// 			$("html").css("background", "url('/img/background-1.png') no-repeat fixed center center");
// 			break;
// 		case 2:
// 			$("html").css("background", "url('/img/background-2.png') no-repeat fixed center center");
// 			break;
// 		case 3:
// 			$("html").css("background", "url('/img/background-3.png') no-repeat fixed center center");
// 			break;
// 		default:		
// 			location.reload();
// 			break;
// 	}
// }, 3000);


setTimeout(function() { location.reload() }, 10000);

var counter = 0;
setInterval(function() {
	var circle = $("<div class='shape' id='circle" + (++counter) + "'></div>");
	var radius = Math.round(Math.random() * 100) + 300;
	circle.css('width', radius + 'px');
	circle.css('height', radius + 'px');
	circle.css('border-radius', (radius / 2) + "px");
	circle.css('background-color', 'red');
	circle.css('left', (Math.random() * (1920 - (radius / 2))) + 'px');
	circle.css('top', (Math.random() * (1080 - (radius / 2))) + 'px');
	circle.css('position', 'absolute');
	circle.css('filter', 'blur(100px)').css('oFilter', 'blur(100px)');

	$('#shape-container').append(circle);
}, 2000);