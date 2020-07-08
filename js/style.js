var nav11 = document.getElementById('nav11');

       window.onscroll = function () {

         if(window.pageYOffset > 100){

          nav11.style.position = "fixed";
          nav11.style.top = 0;

          }else{
            // nav.style.position = "absolute";
            nav11.style.position = 'relative'; //fixed
            nav11.style.top = 100;
          }
       }