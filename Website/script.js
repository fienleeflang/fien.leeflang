	$('.detail').each(function(){
		var x = Math.round(Math.random() * ($(window).width() - $(this).width()));
		var y = Math.round(Math.random() * ($(window).height() - $(this).height()));

		$(this).css({
			top: x+'px',
			left: y+'px'
		})
	});