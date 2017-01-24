$( document ).ready(function() {
	//Toggle for the meet the team "button"
	$( "#meetTheTeam" ).on( "click", function(e) {
		$("#team").toggle();
		e.stopPropagation();
	});

	//Close the meet the team page if it is visable and the body is clicked on
	$( "#main" ).on( "click", function() {
	  if($("#team").is(":visible")){
			$("#team").toggle();
			console.log("Catch two");
		}
	});

	

});


