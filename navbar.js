jQuery(document).ready(function($) {

  if ($('body').hasClass('home')) {
    
    var $navbar = $('.uk-navbar-container');
    var $logoContainer = $('.uk-logo img'); 
    var $darkLogo = $('.uk-logo img:not(.uk-logo-inverse)');
    var $inverseLogo = $('img.uk-logo-inverse'); // White 
  
    // Add CSS transition for smooth background/color changes
    $navbar.css('transition', 'all 0.3s ease-in-out');
    $navbar.find('.uk-navbar-nav > li > a').css('transition', 'color 0.3s ease-in-out');
    
    $logoContainer.css('transition', 'all 0.3s ease-in-out');
    $darkLogo.css('display', 'none');
    $inverseLogo.css('display', 'block');
  
    // Initial load check
    if ($(window).scrollTop() <= 119) {
      $navbar.find('.uk-navbar-nav > li > a').css('color', '#ffffff');
      $darkLogo.css('display', 'none');
      $inverseLogo.css('display', 'block');
    }
  
  
    $(window).on('scroll', function() {
      if ($(this).scrollTop() > 120) {
        $navbar.removeClass('uk-navbar-transparent');
        $navbar.find('.uk-navbar-nav > li > a').css('color', '');
        $inverseLogo.css('display', 'none');
        $darkLogo.css('display', 'block');
        
      } else {
        $navbar.addClass('uk-navbar-transparent');
        $navbar.find('.uk-navbar-nav > li > a').css('color', '#ffffff');
        $inverseLogo.css('display', 'block');
        $darkLogo.css('display', 'none');
      }
    });
  }
  else {
    var $navbar = $('.uk-navbar-container');
    $navbar.removeClass('uk-navbar-transparent');
  }

});

// OR genereated:

jQuery(function($) {

  var $navbar      = $('.uk-navbar-container');
  var $navLinks    = $navbar.find('.uk-navbar-nav > li > a');
  var $darkLogo    = $('.uk-logo img:not(.uk-logo-inverse)');
  var $inverseLogo = $('.uk-logo img.uk-logo-inverse');

  if (!$('body').hasClass('home')) {
    $navbar.removeClass('uk-navbar-transparent');
    return;
  }

  // Smooth transitions
  $navbar.css('transition', 'all 0.3s ease-in-out');
  $navLinks.css('transition', 'color 0.3s ease-in-out');
  $('.uk-logo img').css('transition', 'all 0.3s ease-in-out');

  function updateNavbar() {
    var scrolled = $(window).scrollTop() > 120;

    $navbar.toggleClass('uk-navbar-transparent', !scrolled);
    $navLinks.css('color', scrolled ? '' : '#ffffff');
    $darkLogo.css('display', scrolled ? 'block' : 'none');
    $inverseLogo.css('display', scrolled ? 'none' : 'block');
  }

  updateNavbar();                    // initial state
  $(window).on('scroll', updateNavbar);
});
