$(document).ready(function() {
	window.scroll(0, 0);
	$(".main-content").hide();
	$(".slide-up").css({height: $(window).height() - $(".header-box").height()});
	headerContent.applyTo($(".header-content"));
	$(".header-content").animate({opacity: 1});
	setTimeout(function() {
		$(".slide-up").animate({height: 0});
		mainContent.applyTo($(".main-content"));
	}, 2500);

	setTimeout(function() {
		$(".main-content").fadeIn();
		$("body").css({"overflow": "visible"});
	}, 3000);

	setInterval(function() {
		var local = new Date();
	    var h = local.getHours();
	    var m = local.getMinutes();
	    var s = local.getSeconds();
	    m = m < 10 ? "0" + m : m;
	    s = s < 10 ? "0" + s : s;
	    var time = h + ":" + m + ":" + s;
	    $(".time-local").html(time);
	    $(".time-local-12-hour").html(h > 12 ? (h - 12) + ":" + m + ":" + s : time);
	}, 1000);

});

