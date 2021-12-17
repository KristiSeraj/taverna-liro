function preloaderFadeOutInit(){
  $('.loader-container').fadeOut('slow');
  $('body').attr('id','');
  }
  
  jQuery(window).on('load', function () {
  (function ($) {
  preloaderFadeOutInit();
  })(jQuery);
  });