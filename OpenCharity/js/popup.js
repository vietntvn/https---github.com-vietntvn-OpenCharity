
$(document).ready(function(){
  $(".login-keeng").each(function() {
    var self = this;
    $(this).overlay({
      mask: {
        top: 200,
        color: '#000000',
        loadSpeed: 50,
        opacity: 0.5
      },
      onBeforeLoad: function() {

        // grab wrapper element inside content
       // var wrap = this.getOverlay().find(".contentWrap");
       // wrap.html('');
        //var href = $(self).attr('vthref');
        // load the page specified in the trigger
       // wrap.load(href);
      }

    });
  });
	// Dong dialog
	$('h1.header a.close-popup').live('click', function(){
		$('#overlay-login a.close').click();
	});
	});