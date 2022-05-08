// Play initial animations on page load.
$(window).on('load', () => {
	window.setTimeout(() => {
		$('body').removeClass('is-preload');
	}, 100);
});

// NavBar
$(() => {
	$('.toggle').on('click', function () {
		if ($('.item').hasClass('active')) {
			$('.item').removeClass('active');
			$(this).find('a').html("<i class='fas fa-bars'></i>");
		} else {
			$('.item').addClass('active');
			$(this).find('a').html("<i class='fas fa-times'></i>");
		}
	});
});
