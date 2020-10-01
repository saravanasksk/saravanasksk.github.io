// JavaScript Document


	
	$(window).on("scroll",function()
	{
		if($(window).scrollTop())
		{
			$('nav').addClass('black');
			$('nav .menu a').addClass('red');
		}
		else
		{
			$('nav').removeClass('black');
			$('nav .menu a').removeClass('red');
		}
	})

	var shiftWindow = function() { scrollBy(0, -100) };
	if (location.hash) shiftWindow();
	window.addEventListener("hashchange", shiftWindow);
	
	
	
	
