$(function () {
    $('.toggles button').click(function () {
      var get_id = this.id;
      var get_current = $('.grid .' + get_id);

      $('.post').not(get_current).hide(500);
      get_current.show(500);
    });

    $('#showall').click(function () {
      $('.post').show(500);
    });
});



$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
     items:8,

     loop: true,

     nav: true,
     navText : ["<",">"],
     rewindNav :  true,
     scrollPerPage : false,


     dots: false,

     responsive:{
             0:{
                 items:1,
                 nav:true
             },
             768:{
                 items:1,
                 nav:false,
                 dots:true
             },
             1000:{
                 items:8,
                 loop: true,

                 nav: true,

                 dots: false,
             }
         }
  });
});


  window.onload = function () {
    var scrolled;
    var timer;


  document.getElementById('top').onclick = function () {
      scrolled = window.pageYOffset;
      // window.scrollTo(0,0);
      scrollToTop();
  }
  function scrollToTop() {
      if (scrolled > 0) {
        window.scrollTo(0, scrolled) ;
        scrolled = scrolled - 100 ;
        timer = setTimeout(scrollToTop, 30);
    }
    else{
        clearTimeout(timer);
        window.scrollTo(0,0);
    }
  }
}
