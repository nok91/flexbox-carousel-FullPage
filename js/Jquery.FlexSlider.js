/**
 * @author Mohammed Nokri <nokri.mohammed@gmail.com>
 */
(function ( $ ) {

    $.fn.flexSlider = function( options ) {

        // This is the easiest way to have default options.
        var settings = $.extend({
            index: 0,
            width: $( window ).width()
        }, options );

         var nSlides = $(this).find(".child").length;
         var widthSlider = settings.width * nSlides;
         var _container = $(this).find(".container");
         var _next =  $(this).find("#next");
         var _previous =  $(this).find("#previous");

        $(_container).css({width: widthSlider});

        //Create a pagination
        for(i=0; i<nSlides; i++){
           var li = document.createElement('li');
           $(li).data("index",i);
           $(this).find("#pagination-wrap ul").append(li);
        }

        $('#pagination-wrap ul li').click( function(){
           var index = $(this).data("index");
           if(index >= 0 && index <= nSlides)  slideTo(index);
        });
        pagination() ;

       //automatic slider
        var autoSlider = setInterval(function(){slideTo("Right")}, 3000);

        //Slide to Direction: "Left", "Right"
        function slideTo(direction){
         switch(direction){
           case "Left":  settings.index = --settings.index==-1 ?  nSlides-1 : settings.index--; break;
           case "Right":  settings.index = ++settings.index==nSlides ?  0 : settings.index++; break;
           default: settings.index = (direction >= 0 && direction <= nSlides) ? direction : 0;  break;
         }
          $(_container).css('-webkit-transform', 'translateX('+ (-(settings.width*settings.index)) +'px)');
          pagination () ;
        }

        function pagination () {
          $('#pagination-wrap ul li').removeClass('active');
          $('#pagination-wrap ul li:eq('+settings.index+')').addClass('active');
        }

       //next slide
        $(_next).click(function(){ slideTo("Right"); });

        //previous slide
        $(_previous).click(function(){ slideTo("Left")	});

        //hide/show controls/btns when hover pause automatic slide when hover
        $(this).hover(
          function(){ $(this).addClass('active'); clearInterval(autoSlider); },
          function(){ $(this).removeClass('active'); autoSlider = setInterval(function(){slideTo("Right")}, 3000); }
        );

        return this;
    };

}( jQuery ));
