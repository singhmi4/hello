$(document).ready(function(){
  	const userNameInput = $('#exampleInputUserName1');
	const passWordInput = $('#exampleInputPassword1');
	const submitInput = $('#submit');
	const modalDiv = $('#exampleModal');
	
	$('form').on('submit', function() {
	// do your things
		if (userNameInput.val().length > 0 && passWordInput.val().length > 0) {
			modalDiv.modal('toggle');
		} 
	return false;
	});
});