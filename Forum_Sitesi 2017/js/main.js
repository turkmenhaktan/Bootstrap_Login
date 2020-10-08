$("document").ready(function($){
	$(window).scroll(function(){
		var y = $(".anasayfa-head").height();
		if(y == 150)
			{
				if($(this).scrollTop() > 150)
			{
				$(".nav-border").addClass("fixed-nav");
				$(".slide-duzen").addClass("ana-bosluk");
				$(".r-duzen").addClass("ana-bosluk");
			}
				else
			{
				$(".nav-border").removeClass("fixed-nav");
				$(".slide-duzen").removeClass("ana-bosluk");
				$(".r-duzen").removeClass("ana-bosluk");

			}
			}
		else
			{
			if($(this).scrollTop() > 75)
			{
				$(".nav-border").addClass("fixed-nav");
				$(".slide-duzen").addClass("ana-bosluk");
				$(".r-duzen").addClass("ana-bosluk");
			}
				else
			{
				$(".navbar").removeClass("fixed-nav");
				$(".slide-duzen").removeClass("ana-bosluk");
				$(".r-duzen").removeClass("ana-bosluk");

			}
			}
		
		
	});
	
});
