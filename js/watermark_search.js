(function($) {          
    $(document).ready(function(){

      var selector = '.front .form-text';
      var watermark = 'Search...';
 
      //init, set watermark text and class
      $(selector).val(watermark).addClass('watermark');
     
      //if blur and no value inside, set watermark text and class again.
      $(selector).blur(function(){
          if ($(this).val().length == 0){
            $(this).val(watermark).addClass('watermark');
        }
      });
     
      //if focus and text is watermrk, set it to empty and remove the watermark class
      $(selector).focus(function(){
          if ($(this).val() == watermark){
            $(this).val('').removeClass('watermark');
        }
      });
    });
})(jQuery);