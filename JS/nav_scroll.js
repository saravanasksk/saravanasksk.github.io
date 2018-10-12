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
	
	
	
	
