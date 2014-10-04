var images = ["img/img1.png", "img/img2.png", "img/img3.png", "img/img4.png"]
var currentImage = 0


function changePicture(whichNum){
	var img = document.getElementById('image');
	img.setAttribute('src', images[whichNum]);
	currentImage = whichNum;
}
function onClickNext() {
	currentImage++;
	if(currentImage === images.length){
		currentImage = 0;
	}
	var img = document.getElementById('image');
	img.setAttribute('src', images[currentImage]);
	// $( "#next" ).click(function() {
 	// // $( "image" ).fadeIn( 3000); 
 	// });
 	//Here I was trying to make a fade in
 	//I need to keep serching tho. There's something wrong.	
}
function onClickPrev() {
	currentImage = currentImage -1;
	if(currentImage === -1){
		currentImage = images.length -1;
	}
	var img = document.getElementById('image');
	img.setAttribute('src', images[currentImage]);

}
setInterval(
	function(){
		//$("#next").click();
		onClickNext();
	}, 
	5000);

