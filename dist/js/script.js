
// Menu toggle button
$(document).ready(function(){
 
    $(".menu-icon").on("click",function(){
        $("nav ul").toggleClass("showing")
    });

});

// Scrolling effect
$(window).on("scroll",function(){

    if($(window).scrollTop()){
       $('nav').addClass('black');
    }
    else {
       $('nav').removeClass('black');
    }

});

// SMOOTH SCROLLING


$('.menu a').on('click', function(event){
    if (this.hash !== ''){
        event.preventDefault();

        const hash = this.hash;
        $('html,body').animate({

            scrollTop:$(hash).offset().top
        },
        // milli seconds
        600, 
            function(){
                window.location.hash = hash;
            }
        );


    }

});



