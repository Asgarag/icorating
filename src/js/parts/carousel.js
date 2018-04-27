$(".owl-carousel").owlCarousel({
	items: 3,
	loop: true,
	dots: false,
	nav: true,
	center: true,
	navText: ["",""],
	responsiveClass: true,
	responsive:{
		0:{
			items: 1
		},
		900:{
			items: 3
		}
	}
});