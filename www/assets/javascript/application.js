if (typeof PhoneGap == 'undefined') alert('PhoneGap variable does not exist. Check that you have included phonegap.js correctly');
if (typeof PG == 'undefined') alert('PG variable does not exist. Check that you have included pg-plugin-fb-connect.js correctly');
if (typeof FB == 'undefined') alert('FB variable does not exist. Check that you have included the Facebook JS SDK file.');

/**
 * When applictaion is ready
 */
var onDeviceReady = function () {
	alert('Ready');

  $('[title]').tooltip();
  $('.collapse').collapse({
    toggle: false
  }).on('shown', function () {
    $('[data-target="#' + this.id + '"]').html('<i>☟</i> Hide comments');
  }).on('hidden', function () {
    $('[data-target="#' + this.id + '"]').html('<i>☛</i> Show comments');
  });

  // FB Integration testing
  FB.init({ appId: "244777332265381", nativeInterface: PG.FB });

  var updateLoginStatus = function () {
	  FB.getLoginStatus(function(response) {
	  	var $fb = $('#fb-login');

	    if (response.status == 'connected') {
	    	$fb
	      	.text('Logout from Facebook')
	      	.toggleClass('btn-warning')
	      	.attr('data-role', 'fb:logout');
	    } else {
	    	$fb
	      	.text('Login using Facebook')
	      	.removeClass('btn-warning')
	      	.attr('data-role', 'fb:login');
	    }
	  });
	};

	updateLoginStatus();

  //
  // Facebook login
  $(document)
	  .on('click', '[data-role=fb:login]', function (event) {
		  FB.login(function (response) {
		  	updateLoginStatus();

	      if (!response.session) {
	        alert('User cancelled login or did not fully authorize.');
	      }
	    }, {
	      perms: 'email'
	    });
	  })
	  .on('click', '[data-role="fb:logout"]', function (event) {
	  	alert('Logout');
      FB.logout(function (response) {
        updateLoginStatus();
      });
	  });
};

// Fired when application starts
var documentReady = function () {
  document.addEventListener("deviceready", onDeviceReady, false);
};
