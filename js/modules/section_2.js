$(document).ready(function() {
  var mqb = matchMedia("all and (min-width: 1024px)");

  function section2DesktopMode() {
    $('.rd-Section2-image').removeClass('hidden');
    $('br').css('display', 'none');
  }

  function section2MobileMode() {
    $('.rd-Section2-image').addClass('hidden');
    $('br').css('display', 'block');
  }

  if (mqb.matches) {
    section2DesktopMode();
  } else {
    section2MobileMode();
  }

  mqb.addListener(function(mqb) {
    if (mqb.matches) {
      section2DesktopMode();
    } else {
      section2MobileMode();
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
