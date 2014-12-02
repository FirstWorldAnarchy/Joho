$(document).ready(function() {
	startAnimations();
	setInterval(updateTime, 1000);
	requestAnimationFrame(updateEpoch);
	registerKeyEvents();
});

function startAnimations() {
	window.scroll(0, 0);
	$(".main-content").hide();
	$(".slide-up").css({height: $(window).height() - $(".header-box").height()});
	$("#hexInput").val("#000000")
	$("#rgbInput").val("0,0,0");
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
}

function updateTime() {
	var local = new Date();
    var h = local.getHours();
    var m = local.getMinutes();
    var s = local.getSeconds();
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;
    var time = h + ":" + m + ":" + s;
    $(".time-local").html(time);
    $(".time-local-12-hour").html(h > 12 ? (h - 12) + ":" + m + ":" + s : time);
}

function updateEpoch() {
	$(".time-epoch").text(Date.now());
	requestAnimationFrame(updateEpoch);
}

function registerKeyEvents() {
	$("#rgbInput").keyup(function() {
		var rgb = getRGB();
		var hex;
		if (rgb) {
			rgb = rgb.split(",");
			hex = rgbToHex(rgb[0], rgb[1], rgb[2]);
			$("#hexInput").val(hex);
			updateWithHex(hex);	
		}
	});

	$("#hexInput").keyup(function() {
		var hex = getHex();
		$("#rgbInput").val(hexToRGB(hex));
		updateWithHex(hex);
	});
}
