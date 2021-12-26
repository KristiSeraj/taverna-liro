function preloaderFadeOutInit(){
  $('.bouncing-loader').fadeOut('slow');
  $('body').attr('id','');
  }
  
  jQuery(window).on('load', function () {
  (function ($) {
  preloaderFadeOutInit();
  })(jQuery);
  });