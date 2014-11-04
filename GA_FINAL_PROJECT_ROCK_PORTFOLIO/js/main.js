$(document).ready(function() {
    $('#main-content').fadeIn();
});

function goToWork () {		
	$('html, body').animate({
    	scrollTop: $("#myWorks").offset().top
	}, 750);
}

function goToAboutMe () {		
	$('html, body').animate({
    	scrollTop: $("#aboutMe").offset().top
	}, 750);
}

function selecEditorial() {
	$(".worksList .image").fadeTo(100, 1);
	var editorialWorks = $(".editorial");
	$(editorialWorks).remove();
	$(".worksList").prepend(editorialWorks);
	$(".worksList > :not(.editorial").fadeTo(100, 0.25);   
}

function selecBranding() {
	$(".worksList .image").fadeTo(100, 1);
	var editorialWorks = $(".branding");
	$(editorialWorks).remove();
	$(".worksList").prepend(editorialWorks);
	$(".worksList > :not(.branding").fadeTo(100, 0.25);
    
}
function selecPhotoretouching() {
	$(".worksList .image").fadeTo(100, 1);
	var editorialWorks = $(".pRetouching");
	$(editorialWorks).remove();
	$(".worksList").prepend(editorialWorks);
	$(".worksList > :not(.pRetouching").fadeTo(100, 0.25);
    
}
function selecMisc() {
	$(".worksList .image").fadeTo(100, 1);
	var editorialWorks = $(".misc");
	$(editorialWorks).remove();
	$(".worksList").prepend(editorialWorks);
	$(".worksList > :not(.misc").fadeTo(100, 0.25);
    
}
function selecAll() {
	$(".worksList .image").fadeTo(100, 1);
    
}