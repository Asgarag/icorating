$(".pre-sale__button").click(function () {
	$(".modal").addClass('modal--active');
	return false;
});

$(".token__buy-button").click(function () {
	$(".modal").addClass('modal--active');
	return false;
});

$(".modal__close").click(function () {
	$(".modal").removeClass('modal--active');
});