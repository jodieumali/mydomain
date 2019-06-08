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

});

/*$(document).ready(function(){
    
    parallaxscroll();
    remove();
    
    function parallaxscroll(){
        
        $(window).scroll(function(){
            
            var vscroll = $(this).scrollTop();
            
            $(".title").css({
                'transform' : 'translate(0px, '+ vscroll/10 +'%)'
            });
            
            $(".lantern1").css({
                'transform' : 'translate(0px, '+ vscroll/5 +'%)'
            });
            
            $(".lantern2").css({
                'transform' : 'translate(0px, -'+ vscroll/10 +'%)'
            });
            
            $(".lantern3").css({
                'transform' : 'translate(0px, '+ vscroll/5 +'%)'
            });
            
            $(".lantern4").css({
                'transform' : 'translate(0px, -'+ vscroll/10 +'%)'
            });
            
            if(vscroll > $('.menubox').offset().top - ($(window).height() / 1.2)){ 
                
                $('.kiki').each(function(i){
                    
                    setTimeout(function(){
                        $('.kiki').eq(i).addClass('show'); 
                    }, 150 * (i+1));
                    
                });
            }
            
        });
        
    }
    
    function remove(){
        
        $(window).scroll(function(){
            
            var wscroll = $(this).scrollTop();
            
            if(wscroll > 650){
                $(".lantern1").css('display', 'none');
            }
            else{
                $(".lantern1").css('display', 'block');
            }
            
        });
        
    }
    
});*/