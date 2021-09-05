$(document).ready(function(){

    $('.slider-active').owlCarousel({
        loop:true,
        dots:true,
        nav:true,
        navText:['<i class="fas fa-angle-left"{prev}></i>','<i class="fas fa-angle-right"{next}></i>'],
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    })

    $('.project-active').owlCarousel({
        loop:true,
        dots:true,
        nav:true,
        navText:['<i class="fas fa-angle-left"{prev}></i>','<i class="fas fa-angle-right"{next}></i>'],
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:4 
            }
        }
    })
    $('.test-active').owlCarousel({
        loop:true,
        
        
        navText:['<','>'],
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    })
    
    $('.blog-active').owlCarousel({
        loop:true,
        
        nav:true,
        navText:['<','>'],
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    })
    $('.brand-active').owlCarousel({
        loop:true,
        autoplay:true,
        autoplayTimeout:2000,
        margin:40,
       
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:6
            }
        }
    })


    $('.vedio-popup-link').magnificPopup({
        type: 'iframe'
        // other options
      });


})