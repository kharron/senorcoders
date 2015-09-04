$(document).ready(function() {
  var mqb = matchMedia("all and (min-width: 1024px)");

  function section3DesktopMode() {
    console.log('TRIGGER');
    $('.rd-Section3-image').insertBefore('#rd-Section3-firstHeader');
  }

  function section3MobileMode() {
  }

  if (mqb.matches) {
    section3DesktopMode();
  } else {
    section3MobileMode();
  }

  mqb.addListener(function(mqb) {
    if (mqb.matches) {
      section3DesktopMode();
    } else {
      section3MobileMode();
    }
  });
  
  var section2offset = $('.rd-Section2').offset().top + 300;
  var section2once = false;
  $(window).scroll(function (event) {
    var scroll = $(window).scrollTop() + $(window).height();
    if (scroll > section2offset && !section2once) {
      $('.rd-Section2-image').addClass('rd-Section2-transition');
      once = true;
    }
  });
});
