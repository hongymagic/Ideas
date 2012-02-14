// Fired when application starts
var documentReady = function () {
	document.addEventListener("deviceready", onDeviceReady, false);
};

var onDeviceReady = function () {
    $('[title]').tooltip();
    $('.collapse')
		.collapse({ toggle: false })
		.on('shown', function () {
			$('[data-target="#' + this.id + '"]').html('<i>☟</i> Hide comments');
		})
		.on('hidden', function () {
			$('[data-target="#' + this.id + '"]').html('<i>☛</i> Show comments');
		});
};