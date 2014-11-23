var headerContent = new Bounce();
headerContent.translate({
	from: {x: 1000, y: 0},
	to: {x: 0, y: 0},
	duration: 3000,
	stiffness: 5
});

var mainContent = new Bounce();
mainContent.scale({
	from: {x: 0.1, y: 0.1},
	to: {x: 1, y: 1},
	duration: 1000,
	stiffness: 5
});