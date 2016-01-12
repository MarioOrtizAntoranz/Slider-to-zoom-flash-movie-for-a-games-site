$( document ).ready(function() { 

          // RECOGE VALOR ANCHO Y ALTO DEL OBJETO SWF AUMENTA O DISMINUYE DIMENSIONES SEGÚN EL VALOR POR DEFECTO    
            
            var ventana_ancho = Number($('object').attr( "width" ));
            var ventana_alto = Number($('object').attr( "height" ));

            var w25 = ventana_ancho /4;
            var h25 = ventana_alto /4;

            var w50 = ventana_ancho /2;
            var h50 = ventana_alto /2;

            var w75 = ventana_ancho * 0.75;
            var h75 = ventana_alto * 0.75;

            var w125 = ventana_ancho * 1.25;
            var h125 = ventana_alto * 1.25;

            var w150 = ventana_ancho * 1.50;
            var h150 = ventana_alto * 1.50;

            var w175 = ventana_ancho * 1.75;
            var h175 = ventana_alto * 1.75;

            var w200 = ventana_ancho * 2;
            var h200 = ventana_alto * 2;      
           
            $('.game').css('width', ventana_ancho);

            if(w175 > 780) {
            $('.bdcn.cont').css('max-width', 'none');
            $('.pagint').css('margin', '0px');
            $('.gamecnt').css('width', w175 + 20);
            $('.bnr-lft').css('display', 'none');
            $('.bnr-rgt').css('display', 'none');
            }
            if(w150 > 780) {
            $('.bdcn.cont').css('max-width', 'none');
            $('.gamecnt').css('width', w150 + 20);
            $('.bdcn.cont').css('max-width', 'none');
            $('.bnr-lft').css('display', 'none');
            $('.bnr-rgt').css('display', 'none');
            }
            if(w125 > 780) {
            $('.bdcn.cont').css('max-width', 'none');
            $('.gamecnt').css('width', w125 + 20);
            $('.bdcn.cont').css('max-width', 'none');
            $('.bnr-lft').css('display', 'none');
            $('.bnr-rgt').css('display', 'none');
            }
            if (ventana_ancho > 640) {
            $('.bnr-lft').css('display', 'none');
            $('.bnr-rgt').css('display', 'none');
            $('.gamecnt').css('width', ventana_ancho + 20);
            $('.game').css('width', ventana_ancho);
            };
            if (ventana_ancho < 780) {
            $('.bdcn.cont').css('max-width', '1260px');
            $('.gamecnt').css('width', '780');
            $('.bnr-lft').css('display', 'inline-block');
            $('.bnr-rgt').css('display', 'inline-block');
            };


            var select = $( "#demo" );
              
            var slider = $("#slider").slider({
                
            value: 100,
            min: 25,
            max: 175,
            step: 25,
            range: "min",
          
              change: function(event, ui) {             
           
              var sliderValue = $( "#slider" ).slider( "option", "value" );

          
              if (sliderValue==175){
              
              if(w175 < 780) {
              
              $('.gamecnt').css('width', '780');
              $('.game').css('width', w175);
              }
              else {
              $('.gamecnt').css('width', w175  + 20);
              $('.game').css('width', w175);
              }

              $('object').attr({
                        'width':  w175,
                        'height': h175,
                });
              }

             if (sliderValue==150){

               if(w150 < 780) {
                        $('.gamecnt').css('width', '780');
                        $('.game').css('width', w150);
                    }
               else {
                        $('.gamecnt').css('width', w150 + 20);
                        $('.game').css('width', w150);
                    }

                $('object').attr({
                        'width':  w150,
                        'height': h150,
                    });
              }

              if (sliderValue==125){

                 if(w125 < 780) {
                        $('.gamecnt').css('width', '780');
                        $('.game').css('width', w125);
                    }
               else {
                        $('.gamecnt').css('width', w125 + 20);
                        $('.game').css('width', w125);
                        $('.bnr-lft').css('display', 'none');
                        $('.bnr-rgt').css('display', 'none');
                    }

                $('object').attr({
                        'width':  w125,
                        'height': h125,
                    });
              }

              if (sliderValue==100){
                
                if(ventana_ancho < 780) {
                        $('.gamecnt').css('width', '780');
                        $('.game').css('width', ventana_ancho);
                        $('.bnr-lft').css('display', 'inline-block');
                        $('.bnr-rgt').css('display', 'inline-block');
                        if ($(window).width() < 1249 ){
                         $('.bnr-lft').css('display', 'none');
                         $('.bnr-rgt').css('display', 'none');
                      }
                    }
               else {
                        $('.gamecnt').css('width', ventana_ancho + 20);
                        $('.game').css('width', ventana_ancho);
                        $('.bnr-lft').css('display', 'none');
                        $('.bnr-rgt').css('display', 'none');
                    }

                $('object').attr({
                        'width':  ventana_ancho,
                        'height': ventana_alto,
                    });
              }
  

              if (sliderValue==75){

                if(w75 < 780) {
                        $('.gamecnt').css('width', '780');
                        $('.game').css('width', w75);
                        $('.bnr-lft').css('display', 'inline-block');
                        $('.bnr-rgt').css('display', 'inline-block');
                        if ($(window).width() < 1249 ){
                         $('.bnr-lft').css('display', 'none');
                         $('.bnr-rgt').css('display', 'none');
                      }
                    }
               else {
                        $('.gamecnt').css('width', w75);
                    }

                $('object').attr({
                        'width':  w75,
                        'height': h75,
                    });
              }
              if (sliderValue==50){

                if(w50 < 780) {
                        $('.gamecnt').css('width', '780');
                        $('.game').css('width', w50);
                        $('.bnr-lft').css('display', 'inline-block');
                        $('.bnr-rgt').css('display', 'inline-block');
                        if ($(window).width() < 1249 ){
                         $('.bnr-lft').css('display', 'none');
                         $('.bnr-rgt').css('display', 'none');
                      }
                    }
               else {
                        $('.gamecnt').css('width', w50);
                    }

                $('object').attr({
                        'width':  w50,
                        'height': h50,
                    });
              }
              if (sliderValue==25){

                if(w25 < 780) {
                        $('.gamecnt').css('width', '780');
                        $('.game').css('width', w25);
                        $('.bnr-lft').css('display', 'inline-block');
                        $('.bnr-rgt').css('display', 'inline-block');
                        if ($(window).width() < 1249 ){
                         $('.bnr-lft').css('display', 'none');
                         $('.bnr-rgt').css('display', 'none');
                      }
                    }
               else {
                        $('.gamecnt').css('width', w25);
                    }

                $('object').attr({
                        'width':  w25,
                        'height': h25,
                    });
              }

            } 


        });
          

  $('#increase').click(function() {
  var sliderCurrentValue = $( "#slider" ).slider( "option", "value" );
    slider.slider( "value", sliderCurrentValue + 25 );
  });

  $('#decrease').click(function() {
  var sliderCurrentValue = $( "#slider" ).slider( "option", "value" );
    slider.slider( "value", sliderCurrentValue - 25 );
  });

  checkSize();
  $(window).resize(checkSize);
  
});

            //Function to the css rule
            function checkSize(){
                if ($(window).width() < 1249 ){
                    $('.bnr-lft').css('display', 'none');
                    $('.bnr-rgt').css('display', 'none');
                }

            }

