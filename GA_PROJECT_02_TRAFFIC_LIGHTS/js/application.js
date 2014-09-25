function stopClick (argument) { 
	var caution = document.getElementById('caution')
	var go = document.getElementById('go')
	caution.style.opacity = .2;
	go.style.opacity = .2;

	var stop = document.getElementById('stop');
	stop.style.opacity = 1;
}

function cautionClick (argument) { 
	var stop = document.getElementById('stop')
	var go = document.getElementById('go')
	stop.style.opacity = .2;
	go.style.opacity = .2;


	var caution = document.getElementById('caution');
	caution.style.opacity = 1;
}

function goClick (argument) { 
	var stop = document.getElementById('stop')
	var caution = document.getElementById('caution')
	stop.style.opacity = .2;
	caution.style.opacity = .2;

	var go = document.getElementById('go');
	go.style.opacity = 1;
}
