(function ($) {
  'use strict';

  var fullHeight = function () {
    $('.js-fullheight').css('height', $(window).height());
    $(window).resize(function () {
      $('.js-fullheight').css('height', $(window).height());
    });
  };
  fullHeight();

  // loader
  var loader = function () {
    setTimeout(function () {
      if ($('#ftco-loader').length > 0) {
        $('#ftco-loader').removeClass('show');
      }
    }, 1);
  };
  loader();

  $('nav .dropdown').hover(
    function () {
      var $this = $(this);
      // 	 timer;
      // clearTimeout(timer);
      $this.addClass('show');
      $this.find('> a').attr('aria-expanded', true);
      // $this.find('.dropdown-menu').addClass('animated-fast fadeInUp show');
      $this.find('.dropdown-menu').addClass('show');
    },
    function () {
      var $this = $(this);
      // timer;
      // timer = setTimeout(function(){
      $this.removeClass('show');
      $this.find('> a').attr('aria-expanded', false);
      // $this.find('.dropdown-menu').removeClass('animated-fast fadeInUp show');
      $this.find('.dropdown-menu').removeClass('show');
      // }, 100);
    }
  );

  $('#dropdown04').on('show.bs.dropdown', function () {
    console.log('show');
  });

  // scroll
  // var scrollWindow = function () {
  //   $(window).scroll(function () {
  //     var $w = $(this),
  //       st = $w.scrollTop(),
  //       navbar = $('.ftco_navbar'),
  //       sd = $('.js-scroll-wrap');

  //     if (st > 150) {
  //       if (!navbar.hasClass('scrolled')) {
  //         navbar.addClass('scrolled');
  //       }
  //     }
  //     if (st < 150) {
  //       if (navbar.hasClass('scrolled')) {
  //         navbar.removeClass('scrolled sleep');
  //       }
  //     }
  //     if (st > 350) {
  //       if (!navbar.hasClass('awake')) {
  //         navbar.addClass('awake');
  //       }

  //       if (sd.length > 0) {
  //         sd.addClass('sleep');
  //       }
  //     }
  //     if (st < 350) {
  //       if (navbar.hasClass('awake')) {
  //         navbar.removeClass('awake');
  //         navbar.addClass('sleep');
  //       }
  //       if (sd.length > 0) {
  //         sd.removeClass('sleep');
  //       }
  //     }
  //   });
  // };
  // scrollWindow();

  // navigation
  var OnePageNav = function () {
    $(".smoothscroll[href^='#'], #ftco-nav ul li a[href^='#']").on(
      'click',
      function (e) {
        e.preventDefault();

        var hash = this.hash,
          navToggler = $('.navbar-toggler');
        $('html, body').animate(
          {
            scrollTop: $(hash).offset().top,
          },
          700,
          'easeInOutExpo',
          function () {
            window.location.hash = hash;
          }
        );

        if (navToggler.is(':visible')) {
          navToggler.click();
        }
      }
    );
    $('body').on('activate.bs.scrollspy', function () {
      console.log('nice');
    });
  };
  OnePageNav();
})(jQuery);
