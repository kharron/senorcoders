/* 
 *
 * Created by Kharron Reid 2015 | RODINA.com
 * for Rdio.com Landing page
 *
 * General javascript interactions
 *
 */

		
$(document).ready(function(){
/********KHARRON********/

		$('#nav-dropnav').addClass('drop-default').removeClass('drop-fixed');
		$('#mobile-nav-dropnav').addClass('drop-default').removeClass('drop-fixed');
		$("#nav-slidein").removeClass("nav-slidein-active").addClass("nav-slidein-default");
		$("#cover-up").css("display", "none");
		$(".carousel img").addClass("carousel-image-default");
		$(".dots-link1").addClass("dot-active");
		if (!$(".carousel").hasClass("started")){
			$(".carousel").addClass("started");
			start_carousel();
		}

		$("#hero-bgvid").resize(function(){
			var w = window.innerWidth;
			if (w >= 750){
				video_height = $("#hero-bgvid").height();
				$("#hero-wrapper").css("height", video_height+"px");
			} else {
				hero_height = $(".hero-bg-mobile").height();
				$("#hero-wrapper").css("height",hero_height+"px");
			}
		});
		$(window).on('resize', function(){
			var w = window.innerWidth;
			if (w >= 750){
				video_height = $("#hero-bgvid").height();
				$("#hero-wrapper").css("height", video_height+"px");
			} else {
				hero_height = $(".hero-bg-mobile").height();
				$("#hero-wrapper").css("height",hero_height+"px");
			}
		});

		// X to close is clicked
		$("body").on("click", ".X", function(){
			if ($("#nav-slidein").hasClass("nav-slidein-default")){
				$("#nav-slidein").removeClass("nav-slidein-default").addClass("nav-slidein-active");
				$("#cover-up").css("display", "block");
				$("#cover-up").removeClass("cover-up-clear").addClass("cover-up-dark");
			} else {
				$("body").css("overflow", "auto");
				$("#nav-slidein").removeClass("nav-slidein-active").addClass("nav-slidein-default");
				$("#cover-up").removeClass("cover-up-dark").addClass("cover-up-clear");
				$("#cover-up").css("display", "none");
			}
		});

		// Non-Active area is clicke while layover is active
		$("body").on("click", "#cover-up", function(){
			$(".X").click();
		});

		// Hamburger Menu is clicked
		$("header").on("click", ".ham-menu", function(event){
			event.preventDefault();
			if ($("#nav-slidein").hasClass("nav-slidein-default")){
				$("#cover-up").css("display","block");
				$("#nav-slidein").removeClass("nav-slidein-default").addClass("nav-slidein-active");
				$("body").css("overflow", "hidden");
				$("#cover-up").removeClass("cover-up-clear").addClass("cover-up-dark");
			} else {
				$("body").css("overflow", "auto");
				$("#nav-slidein").removeClass("nav-slidein-active").addClass("nav-slidein-default");
				$("#cover-up").removeClass("cover-up-dark").addClass("cover-up-clear");
				$("#cover-up").css("display", "none");
			} 
		});

    $(function(){

        // call our function on ready. only if necessary
        WidthControl.Set();

        // handle resize event
        $(window).on('resize', function(){
            WidthControl.Set();
        });

    });

    var WidthControl = {
        current: null,  // variable to get current width when necessary

        Set: function(){  // sets the current width and call DoStuff function
            var w = window.innerWidth;
            this.current = w;
            this.DoStuff();
        },

        DoStuff: function(){  // here we pause (or stop if you want) the video element
            var target = document.getElementById('hero-bgvid');
            if( this.current > 0 && this.current < 425 ){
                //target.autoplay = false;
                //target.load();
            } else {
                //target.autoplay = true;
                //target.load();
						}
        }
    };

		// TODO Manage disappearing  navbar
		// when HERO is 80px from top white nav bar (desktop or mobile) should slide down.
		// when HERO is < 80px from top white nav bar (desktop or mobile) should slide up.
		// Bind to a scroll event.  Test the y-axis and act on it. Action will be handled by CSS transitions

		window.onscroll = function() {
			// Get the y-axis of the section 1
				var w = window.innerWidth;
				var new_zero = window.pageYOffset;
				$("#nav-slidein").css("top", new_zero + "px");
				if (w < 750){
					var action_id = "#mobile-nav-dropnav";
					var trigger_id = "section1";
				} else {
					var action_id = "#nav-dropnav";
					var trigger_id = "desktop-section1";
				}
				element = document.getElementById(trigger_id);
				var trigger_box = element.getBoundingClientRect();
				if (trigger_box.top < 80){
						$(action_id).addClass('drop-fixed').removeClass('drop-default');
				} else {
						$(action_id).addClass('drop-default').removeClass('drop-fixed');
				}

				if (trigger_box.top < 20001){
					// Add class to object to check if this has been started
					if (!$(".carousel").hasClass("started")){
						$(".carousel").addClass("started");
						start_carousel();
					}

				}
		};

		$("body").on("mouseover", ".link1, .dots-link1", function(){
			$(".link1").click();
			counter = -200000;
		});
		$("body").on("mouseover", ".link2, .dots-link2", function(){
			$(".link2").click();
			counter = -200000;
		});
		$("body").on("mouseover", ".link3, .dots-link3", function(){
			$(".link3").click();
			counter = -200000;
		});
		$("body").on("mouseout", ".link1, .dots-link1", function(){
			counter = 0;
		});
		$("body").on("mouseout", ".link2, .dots-link2", function(){
			counter = 0;
		});
		$("body").on("mouseout", ".link3, .dots-link3", function(){
			counter = 0;
		});

		$(".link1, .dots-link1").click(function(){
			$(".carousel img").removeClass("carousel-image-active").addClass("carousel-image-default"); 
			gallery_num = 1
			counter = 0;
			$(".link1, .link2, .link3").removeClass("section1-purple-active").addClass("section1-purple-default");
			$(".dots-link1, .dots-link2, .dots-link3").removeClass("dot-active")
			$(".dots-link1").addClass("dot-active");
			$(".link" + gallery_num).addClass("section1-purple-active");
		});
		$(".link2, .dots-link2").click(function(){
			$(".carousel img").removeClass("carousel-image-active").addClass("carousel-image-default"); 
			gallery_num = 2
			counter = 0;
			$(".link1, .link2, .link3").removeClass("section1-purple-active").addClass("section1-purple-default");
			$(".dots-link1, .dots-link2, .dots-link3").removeClass("dot-active")
			$(".dots-link2").addClass("dot-active");
			$(".link" + gallery_num).addClass("section1-purple-active");
		});
		$(".link3, .dots-link3").click(function(){
			$(".carousel img").removeClass("carousel-image-active").addClass("carousel-image-default"); 
			gallery_num = 3
			counter = 0;
			$(".link1, .link2, .link3").removeClass("section1-purple-active").addClass("section1-purple-default");
			$(".dots-link1, .dots-link2, .dots-link3").removeClass("dot-active")
			$(".dots-link3").addClass("dot-active");
			$(".link" + gallery_num).addClass("section1-purple-active");
		});
		var docWidth = document.documentElement.offsetWidth;

		[].forEach.call(
				  document.querySelectorAll('*'),
					  function(el) {
							    if (el.offsetWidth > docWidth) {
										      console.log(el);
										      console.log("Doc Width: " + docWidth + " |  Offset width: " + el.offsetWidth);
													    }
									  }
				);

/********STEPHAN********/

  var mqb = matchMedia("all and (min-width: 1024px)");

  function section2DesktopMode() {
    $('.rd-Section2-image').removeClass('hidden');
    $('br').css('display', 'none');
  }

  function section2MobileMode() {
    $('.rd-Section2-image').addClass('hidden');
    $('br').css('display', 'block');
  }

  function section3DesktopMode() {
    $('.rd-Section3-image').insertBefore('#rd-Section3-firstHeader');
  }

  function section3MobileMode() {
    $('.rd-Section3-header').insertBefore('.rd-Section3-image');
  }

  if (mqb.matches) {
    section2DesktopMode();
    section3DesktopMode();
  } else {
    section2MobileMode();
    section3MobileMode();
  }

  mqb.addListener(function(mqb) {
    if (mqb.matches) {
      section2DesktopMode();
      section3DesktopMode();
    } else {
      section2MobileMode();
      section3MobileMode();
    }
  });

  var section2offset = $('.rd-Section2').offset().top + 300;
  var section3offset = $('.rd-Section3').offset().top + 330;
  var section5offset = $('.rd-Section5').offset().top + 350;
  var section2once = false;
  var section3once = false;
  var section5once = false;

  $(window).scroll(function (event) {
    if (mqb.matches) {
      var scroll = $(window).scrollTop() + $(window).height();
      if (scroll > section2offset && !section2once) {
        $('.rd-Section2-image').addClass('rd-transition');
        section2once = true;
      }
      if (scroll > section3offset && !section3once) {
        $('.rd-Section3-image').addClass('rd-transition');
        section3once = true;
      }
      if (scroll > section5offset && !section5once) {
        var nthChild = 2;
        var section5Interval = setInterval(function() {
          var section5Animation = '.rd-Section5-logoBucket:nth-child(' + nthChild++;
          $(section5Animation + ') .rd-Section5-img').addClass('rd-transition');
          $(section5Animation + ') .rd-Section5-logoText').addClass('rd-transition');
          if (nthChild > 6) {
            clearInterval(section5Interval);
          }
        }, 140);
        section5once = true;
      }
    }
  });
});

/* Global Vars for Carousel */
var counter = 0;
var gallery_num = 1;

function start_carousel(){
  var interval = setInterval(function() {
    if (counter <= 0){
			var w = window.innerWidth;
			if (w <= 750){
				mobile = "-mobile";
			} else {
				mobile = "";
			}
      $(".carousel img").attr("src", "images/section1-image" + gallery_num + mobile +".jpg");
      $(".carousel img").removeClass("carousel-image-default").addClass("carousel-image-active");
      $(".link1, .link2, .link3").removeClass("section1-purple-active").addClass("section1-purple-default");
      $(".link" + gallery_num).addClass("section1-purple-active");
      $(".dots-link1, .dots-link2, .dots-link3").removeClass("dot-active")
      $(".dots-link" + gallery_num).addClass("dot-active");
    }
		counter = counter+500;
      if (counter == 4000) {
        $(".carousel img").removeClass("carousel-image-active").addClass("carousel-image-default"); 
        $(".link1, .link2, .link3").removeClass("section1-purple-active").addClass("section1-purple-default");
        $(".link" + gallery_num).addClass("section1-purple-active");
        gallery_num++;
        if (gallery_num>3){
          gallery_num = 1;
        }
        counter = 0;
       // Display a login box
      }
  }, 500);
}
