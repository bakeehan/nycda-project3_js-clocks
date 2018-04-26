// The greeting display clock that displays a random background image to the user with the time and a custom greeting based on the time of day. Ex: “Good morning”

var container = document.getElementById("clockContainer");

function passClock() {

	// date objects
	var date = new Date();
	var hour = date.getHours();
	var minute = date.getMinutes();
	var second= date.getSeconds();

	if (hour <7 && hour<1) {
		document.body.style.backgroundImage = "url('images/witching.jpeg')";
		var greeting = "Why are you awake?";
	} else if (hour >6 && hour <12) {
		document.body.style.backgroundImage = "url('images/morning.jpeg')";
		var greeting = "Good morning!";
	} else if (hour >11 && hour <18) {
		document.body.style.backgroundImage = "url('images/afternoon.jpeg')";
		// document.body.setAttribute("style", "background-image: url('images/afternoon.jpeg')");
		var greeting = "Good afternoon!";
	} else if (hour >17 && hour <21) {
		document.body.style.backgroundImage = "url('images/evening.jpg')";
		var greeting = "Good evening.";
	} else if (hour >20 || hour <2) {
		document.body.style.backgroundImage = "url('images/night.jpg')";
		var greeting = "Pleasant dreams."
	}

	container.innerHTML = "<h1>" + greeting + "</h1>";

	if (second <10) {
		var second = "0" + second.toString()
	}
	if (minute <10) {
		var minute = "0" + minute.toString()
	}
	if (hour <10) {
		var hour = "0" + hour.toString()
	}

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