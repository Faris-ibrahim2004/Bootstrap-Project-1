// $(function () {
//   "use strict";
//   $(window).scroll(function () {
//     let navbar = document.querySelector(".navbar");
//     if ($(window).scrollTop() >= navbar.style.height) {
//       navbar.classList.add("scrolled");
//     } else {
//       navbar.classList.remove("scrolled");
//     }
//   });
// });

// let navbar = document.querySelector(".navbar");
// window.scroll(function () {
//   if ($(window).scrollTop() >= navbar.style.height) {
//     navbar.classList.add("scrolled");
//   } else {
//     navbar.classList.remove("scrolled");
//   }
// });

$(function () {
  "use strict";
  $(window).scroll(function () {
    var navbar = $(".navbar");
    $(window).scrollTop() >= navbar.height()
      ? navbar.addClass("scrolled")
      : navbar.removeClass("scrolled");
  });
  // Deal With Tabs
  $(".tab-switch li").click(function () {
    //Add selected class to active link
    $(this).addClass("selected").siblings().removeClass("selected");
    // Hide All Divs
    $(".tabs-section .tabs-content > div").hide();
    // Show div connected with link
    $($(this).data("class")).show();
    window.console.log();
  });
});
