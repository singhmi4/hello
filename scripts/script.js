let isLoggedIn = false;
$('#dashboard').hide();

$(document).ready(function(){
	
  	const userNameInput = $('#exampleInputUserName1');
	const passWordInput = $('#exampleInputPassword1');
	const countryCodeInput = $('#inputCountryCode');
	const submitInput = $('#submit');
	const logoutBtns = $('.logout');
	
	
	
	const modalLogin = $('#modalLoginSuccessful');
	const greetingSpan = $('#greeting');
	const userNameSpan = $('.username');

	const modalLogout = $('#modalLogoutSuccessful');
	
	// Login
	$('form').on('submit', function() {
		if (userNameInput.val().length > 0 && passWordInput.val().length > 0) {
			userNameSpan.text(userNameInput.val());
			
			
			if (countryCodeInput.val().length == 2 ) {
				
				const greetingEndpoint = `https://fourtonfish.com/hellosalut/?cc=${countryCodeInput.val()}`;

					// Retrieve Greeting 			
					$.getJSON(greetingEndpoint)
						.done(function (greetingData) {
							console.log(greetingData);
							greetingSpan.text(greetingData.hello);
						})
						.fail(function() {
							console.log( "greeting error" );
							greetingSpan.text("Hello");
						})
						.always(function() {
							console.log( "greeting complete" );
						});
				
				
			} else {
				const geoLocationEndpoint = 'https://freegeoip.app/json/';

				// Retrieve country Code
				$.getJSON(geoLocationEndpoint)
					.done(function(geoData) {
						console.log(geoData.country_code);
						const greetingEndpoint = `https://fourtonfish.com/hellosalut/?cc=${geoData.country_code}`;

					// Retrieve Greeting 			
					$.getJSON(greetingEndpoint)
						.done(function (greetingData) {
							console.log(greetingData);
							greetingSpan.text(greetingData.hello);
						})
						.fail(function() {
							console.log( "greeting error" );
							greetingSpan.text("Hello");
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
			}
			modalLogin.modal('toggle');
			isLoggedIn = true;
			$('h1').text(`${userNameInput.val()}'s Dashboard`)
			$('#dashboard').show();
			$('form').trigger("reset");
			$('form').hide();
		} 
	return false;
	});

	// Logout
	logoutBtns.on('click', () => {
		isLoggedIn = false;
		$('#dashboard').hide();
		$('h1').text(`Sign In`);
		$('form').show();
		modalLogout.modal('toggle');
	});
});