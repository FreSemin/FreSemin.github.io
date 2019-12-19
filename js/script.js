/* begin Scroll Down Button */
(function() {
  "use strict";

  var btnScrollDown = document.querySelector("#scroll_down");

  function scrollDown() {
    var windowCoords = document.documentElement.clientHeight;
    (function scroll() {
      if (window.pageYOffset < windowCoords) {
        window.scrollBy(0, 10);
        setTimeout(scroll, 0);
      }
      if (window.pageYOffset > windowCoords) {
        window.scrollTo(0, windowCoords);
      }
    })();
  }

  btnScrollDown.addEventListener("click", scrollDown);
})();
/* end Scroll Down Button */

// Filter
//   $(function () {
//     $('.toggles button').click(function () {
//       var get_id = this.id;
//       var get_current = $('.g_p_el .' + get_id);

//       $('.g_p_el').not(get_current).hide(500);
//       get_current.show(500);
//     });

//     $('#showall').click(function () {
//       $('.g_p_el').show(500);
//     });
// });
// Filter end

// gulp menu

window.onscroll = function() {
  var scrolled = window.pageYOffset || document.documentElement.scrollTop;
  var o = document.getElementById("sticky");
  if (scrolled > 100) o.setAttribute("class", "fix");
  else o.setAttribute("class", "not_fix");
};
