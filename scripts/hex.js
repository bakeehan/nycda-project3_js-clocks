// The hex clock is a hex code that reflects the time of day in #hhmmss format instead of hh:mm:ss format. The background color of the screen is then changed based on the hex code which is created by the current time.

// document variables
var container = document.getElementById("clockContainer");

function passClock() {

	// date objects
	var date = new Date();
	var hour = date.getHours();
	var minute = date.getMinutes();
	var second= date.getSeconds();

	if (second <10) {
		var second = "0" + second.toString()
	}
	if (minute <10) {
		var minute = "0" + minute.toString()
	}
	if (hour <10) {
		var hour = "0" + hour.toString()
	}

	container.innerHTML = "<h1> #"+ (hour.toString() + minute.toString() + second.toString()) + "</h1>";

	let color = (hour.toString() + minute.toString() + second.toString());
	console.log("#" + color);
	document.body.style.backgroundColor = "#" + color;

	var half = "am";

	if (hour > 12) {
		var hour = (hour-12);
		var half = "pm";
	}

	let twelveTime = (hour.toString() + ":" + minute.toString());
	container.innerHTML += "It is <b>" + (hour.toString() + ":" + minute.toString()) + half +"</b>.";
}

passClock();

setInterval(passClock, 1000);