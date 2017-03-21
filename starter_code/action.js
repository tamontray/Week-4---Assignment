$( document ).ready(function() {


$ ( ".readmore, .learnmore, .readless" ).click(function( event ) {
	event.preventDefault();
});


$ ( ".readmore" ).click(readMore);
$ ( ".readless" ).click(readLess);
$ ( ".learnmore" ).click(learnMore);


function readMore() {
	$( "#show-this-on-click" ).show();
	/*I could NOT get "slideDown();" to work. 
	Kept getting "Uncaught TypeError: $(...).slideDown 
	is not a function" error. It might have something to do
	with the Display property in CSS? Had to 
	use "Show" to get the functionality at all.*/

	$( ".readmore" ).hide();
	$( ".readless" ).show();
}

function readLess() {
	$( "#posts .hide" ).hide();
	/*Calling out just ".hide" kept forcing my sidebar
	"Learn More" text to disappear when I'd "read less" 
	in the main article. Needed to specify .hide classes
	in the section tag only.*/
	$( ".readmore" ).show();
}

function learnMore() {
	$( "#learnmoretext" ).show();
	$( ".learnmore" ).hide();
	$( ".learnless" ).show();
}

	console.log( "ready" );

});