$(".pre-sale__button, .token__buy-button").click(function () {
	$(".modal").addClass('modal--active');
	return false;
});

$(".modal__close").click(function () {
	$(".modal").removeClass('modal--active');
});

$(".modal").on('click',function(event) {
	if ($(this).is(event.target)) {
		$(".modal").removeClass('modal--active');
	}
});