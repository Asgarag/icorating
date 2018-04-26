$(".owl-carousel").owlCarousel({
	items: 3,
	loop: true,
	dots: false,
	center: true,
	navText: ["",""],
	responsiveClass: true,
	responsive:{
		0:{
			items: 1,
			nav: false
		},
		480:{
			nav: true
		},
		768:{
			items: 3,
			nav: true
		}
	}
});