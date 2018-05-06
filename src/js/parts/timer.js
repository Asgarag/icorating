$(".timer").countdown('2018/05/14', function(event) {
	$(this).html(event.strftime(''
			+ '<div class="timer__item"><span class="timer__value">%D</span><span class="timer__name">days</span></div> '
			+ '<div class="timer__item"><span class="timer__value">%H</span><span class="timer__name">hours</span></div> '
			+ '<div class="timer__item"><span class="timer__value">%M</span><span class="timer__name">min</span></div> '
			+ '<div class="timer__item"><span class="timer__value">%S</span><span class="timer__name">sec</span></div> '));
});