$(".menu__switch").click(function() {
	$(".menu__list").addClass("menu__list--active")
});
	$(".menu__close").click(function() {
		$(".menu__list").removeClass("menu__list--active")
});

$(".menu__link[href=\"#about\"]").click(function () {
	event.preventDefault();
	var header = $(".header").height();
	var scrollTop = $('#about').offset().top - header;
	$('body,html').animate({
		scrollTop: scrollTop
	}, 600);
	$(".menu__list").removeClass("menu__list--active");
});

$(".menu__link[href=\"#token\"]").click(function () {
	event.preventDefault();
	var header = $(".header").height();
	var scrollTop = $('#token').offset().top - header;
	$('body,html').animate({
		scrollTop: scrollTop
	}, 600);
	$(".menu__list").removeClass("menu__list--active");
});

$(".menu__link[href=\"#token-sale\"]").click(function () {
	event.preventDefault();
	var header = $(".header").height();
	var scrollTop = $('#token-sale').offset().top - header;
	$('body,html').animate({
		scrollTop: scrollTop
	}, 600);
	$(".menu__list").removeClass("menu__list--active");
});

$(".menu__link[href=\"#plans\"]").click(function () {
	event.preventDefault();
	var header = $(".header").height();
	var scrollTop = $('#plans').offset().top - header;
	$('body,html').animate({
		scrollTop: scrollTop
	}, 600);
	$(".menu__list").removeClass("menu__list--active");
});

$(".menu__link[href=\"#token-distribution\"]").click(function () {
	event.preventDefault();
	var header = $(".header").height();
	var scrollTop = $('#token-distribution').offset().top - header;
	$('body,html').animate({
		scrollTop: scrollTop
	}, 600);
	$(".menu__list").removeClass("menu__list--active");
});

$(".menu__link[href=\"#funds-distribution\"]").click(function () {
	event.preventDefault();
	var header = $(".header").height();
	var scrollTop = $('#funds-distribution').offset().top - header;
	$('body,html').animate({
		scrollTop: scrollTop
	}, 600);
	$(".menu__list").removeClass("menu__list--active");
});

$(".menu__link[href=\"#road\"]").click(function () {
	event.preventDefault();
	var header = $(".header").height();
	var scrollTop = $('#road').offset().top - header;
	$('body,html').animate({
		scrollTop: scrollTop
	}, 600);
	$(".menu__list").removeClass("menu__list--active");
});

$(".menu__link[href=\"#team\"]").click(function () {
	event.preventDefault();
	var header = $(".header").height();
	var scrollTop = $('#team').offset().top - header;
	$('body,html').animate({
		scrollTop: scrollTop
	}, 600);
	$(".menu__list").removeClass("menu__list--active");
});

