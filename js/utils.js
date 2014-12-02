function updateWithHex(hex) {
	console.log("New Color Set to: " + hex);
	$(".color-box").css({background: hex});
}

function getHex() {
	var val = $("#hexInput").val();
	var matches = val.match("^#[A-Fa-f0-9]{6}$");
	return matches ? matches[0] : undefined;
}

function getRGB() {
	var val = $("#rgbInput").val();
	var matches = val.match("^([0-9]{1,3}),([0-9]{1,3}),([0-9]{1,3})$");
	return matches ? matches[0] : undefined;
}

function rgbToHex(R,G,B) {
	return "#" + toHex(R) + toHex(G) + toHex(B);
}

function toHex(n) {
	 n = parseInt(n,10);
	 if (isNaN(n)) return "00";
	 n = Math.max(0,Math.min(n,255));
	 return "0123456789ABCDEF".charAt((n-n%16)/16) + "0123456789ABCDEF".charAt(n%16);
}

function hexToRGB(hex) {
	hex = hex.substring(1);
	var hexCut = [hex.substring(0,2), hex.substring(2,4), hex.substring(4,6)];
	return parseInt(hexCut[0], 16) + "," + parseInt(hexCut[1], 16) + "," + parseInt(hexCut[2], 16);
}