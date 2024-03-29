$(document).ready(function(){
    
    navbarscroll();
    menu();
  
    function navbarscroll(){
        $(window).on("scroll",function(){
        
            var vscroll = $(this).scrollTop();

            if(vscroll > 125){
                $("#navbar-container").addClass('navbg');
            }
            else{
                $("#navbar-container").removeClass('navbg');
            }

        });
    }
    
    function menu(){
        $(".icon").on("click",function(){
           $(".navbar-mobile").toggleClass("navbar-mobile-on");
            $(".nav-links").toggleClass('show-links');
            $(this).toggleClass('active');
            $(".hamburger").toggleClass('hamburger-on-click');
        });
        
        $(".nav-click").on("click",function(){
            $(".navbar-mobile").removeClass("navbar-mobile-on");
            $(".nav-links").removeClass('show-links'); 
            $(".hamburger").removeClass('hamburger-on-click');
            $(".icon").removeClass('active');
        });
    }
    
    $('.zoom-gallery').magnificPopup({
		delegate: 'a',
		type: 'image',
		closeOnContentClick: false,
		closeBtnInside: false,
		mainClass: 'mfp-with-zoom mfp-img-mobile',
		image: {
			verticalFit: true,
			titleSrc: function(item) {
				return item.el.attr('title') + ' &middot; <a class="image-source-link" href="'+item.el.attr('data-source')+'" target="_blank">image source</a>';
			}
		},
		gallery: {
			enabled: true
		},
		zoom: {
			enabled: true,
			duration: 300, // don't foget to change the duration also in CSS
			opener: function(element) {
				return element.find('img');
			}
		}
		
	});

    $('.owl-carousel').owlCarousel({
        nav: true,
        items: 3,
        dots: true
    });
    
    $('.zoom-gallery1').magnificPopup({
		delegate: 'a',
		type: 'image',
		closeOnContentClick: false,
		closeBtnInside: false,
		mainClass: 'mfp-with-zoom mfp-img-mobile',
		image: {
			verticalFit: true,
			titleSrc: function(item) {
				return item.el.attr('title') + ' &middot; <a class="image-source-link" href="'+item.el.attr('data-source')+'" target="_blank">image source</a>';
			}
		},
		gallery: {
			enabled: true
		},
		zoom: {
			enabled: true,
			duration: 300, // don't foget to change the duration also in CSS
			opener: function(element) {
				return element.find('img');
			}
		}
		
	});

});
