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

	// console.log(second)

	container.innerHTML = (hour.toString() + minute.toString() + second.toString());

	let color = (hour.toString() + minute.toString() + second.toString());
	console.log("#" + color);
	container.style.backgroundColor = "#" + color;
}

passClock();

setInterval(passClock, 1000);