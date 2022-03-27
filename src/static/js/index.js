// Play initial animations on page load.
$(window).on('load', () => {
	window.setTimeout(() => {
		$('body').removeClass('is-preload');
		$('.mask').css('background-color', '#00000050');
	}, 100);
});
