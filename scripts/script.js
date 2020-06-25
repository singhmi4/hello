$(document).ready(function(){
  	const userNameInput = $('#exampleInputUserName1');
	const passWordInput = $('#exampleInputPassword1');
	const submitInput = $('#submit');
	const modalDiv = $('#exampleModal');
	const greetingSpan = $('#greeting');
	const userNameSpan = $('#username');
	
	const geoLocationEndpoint = 'https://freegeoip.app/json/';
	
	// Retrieve country Code
	$.getJSON(geoLocationEndpoint)
		.done(function(geoData) {
			console.log(geoData.country_code);
			let greetingEndpoint = `https://fourtonfish.com/hellosalut/?cc=${geoData.country_code}`;
		
		// Retrieve Greeting 			
		$.getJSON(greetingEndpoint)
			.done(function (greetingData) {
				console.log(greetingData);
				greetingSpan.text(greetingData.hello);
			})
			.fail(function() {
				console.log( "greeting error" );
		 	})
		  	.always(function() {
				console.log( "greeting complete" );
		  	});
		})
		.fail(function() {
			console.log( "geolocation error" );
		})
		.always(function() {
			console.log( "geolocation complete" );
		});		 

	
	// console.log(countryCode)
	
	$('form').on('submit', function() {
		if (userNameInput.val().length > 0 && passWordInput.val().length > 0) {
			userNameSpan.text(userNameInput.val());
			modalDiv.modal('toggle');
		} 
	return false;
	});
});