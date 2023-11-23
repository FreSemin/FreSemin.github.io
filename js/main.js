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

document.addEventListener("DOMContentLoaded", function () {
  let loader = document.getElementById("loader");
  loader.style.display = "none";

  new WOW().init();
});

window.onscroll = function() {
  var scrolled = window.pageYOffset || document.documentElement.scrollTop;
  var o = document.getElementById("sticky");
  if (scrolled > 100) o.setAttribute("class", "fix");
  else o.setAttribute("class", "not_fix");
};
