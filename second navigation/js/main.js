$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-default").addClass("top-nav-collapse");
    } else {
        $(".navbar-default").removeClass("top-nav-collapse");
    }
});

$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top-50
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

$(document).ready(function(){
    $(window).bind('scroll', function() {
        var navHeight = $("#box1").height();
        if(parseInt($(window).scrollTop())+100 > navHeight )
		{
			$('nav').addClass('goToTop');
			$(".box").each(function(index, element) {
			$(this).find('.content-background').removeClass("bg-toggled");
			//alert($(".box2").offset().top);
			if($(this).visible(true))
				$(this).find('.content-background').addClass("bg-toggled");
			else
				$(this).find('.content-background').removeClass("bg-toggled");
        }); 
		}
		else
		{
			$('nav').removeClass('goToTop');
			$('.top-background').addClass("bg-toggled");
			$('.content-background').removeClass("bg-toggled");
		}
		
		
		//var currentScreenId=$("nav li.active a").attr('href');
		//$(currentScreenId).find('.content-background').addClass("bg-toggled");
		/*$('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top-50
        }, 1500, 'easeInOutExpo');*/
		
		//$('.content-background').scrollTop($('#menu'));
		
		//$('#content-background').css('display','none');
		
    });
	
	$("#box1").scroll(function(){
        alert("A");
    });
});
