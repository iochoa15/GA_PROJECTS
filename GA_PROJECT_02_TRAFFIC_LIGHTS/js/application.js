function stopClick(argument) { 
	var caution = document.getElementById('caution')
	var go = document.getElementById('go')
	caution.style.opacity = .2;
	go.style.opacity = .2;

	var stop = document.getElementById('stop');
	stop.style.opacity = 1;
}

function cautionClick(argument) { 
	var stop = document.getElementById('stop')
	var go = document.getElementById('go')
	stop.style.opacity = .2;
	go.style.opacity = .2;

	var caution = document.getElementById('caution');
	caution.style.opacity = 1;
}

function goClick(argument) { 
	var stop = document.getElementById('stop')
	var caution = document.getElementById('caution')
	stop.style.opacity = .2;
	caution.style.opacity = .2;

	var go = document.getElementById('go');
	go.style.opacity = 1;
}


// Looks good! Totally functional and well coded. This is great, though the code is a little redundant. Try and think as functions as jobs, like "walk", "open door", "scan hallway". What steps in the process about could be broken out into repeatable functions?

// We could write something like the code below.  


// function buttonClick(lightToTurnOn){
// 	turnLightsOff();
// 	turnLightOn(lightToTurnOn);
// }

// function turnLightsOff(){
// 	var greenLight = document.getElementById('green');
// 	var yellowLight = document.getElementById('yellow');
// 	var redLight = document.getElementById('red');

// 	greenLight.style.backgroundColor = "black";
// 	yellowLight.style.backgroundColor = "black";
// 	redLight.style.backgroundColor = "black";
// }

// function turnLightOn(lightToTurnOn){
// 	var whichLight = document.getElementById(lightToTurnOn);
// 	whichLight.style.backgroundColor = lightToTurnOn;
// }

// Each function pertains to one repeatable action, and the name of that function tells you it's purpose. Now, if we wanted to build a second traffic light that produces three totally new light colors, all we'd need to do is build the HTML so it fits with function "turnLightOn". Since the function is flexable -- meaning are are no hard-coded values inside of it -- it can be reused and applied in many different situations.
