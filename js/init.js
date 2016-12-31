(function($){
  $(function(){

    $('.button-collapse').sideNav();
    $('.parallax').parallax();
    $(function(){
        $(".typewriter-header").typed({
          strings: ["Guten Tag.", "Herzlich Willkommen bei <span style='color:#d81b60;'><b>alb</b>phone</span>.", "Wie können wir Ihnen behilflich sein?"],
          typeSpeed:70
        });
    });

    $(function(){
        $(".typewriter-logo").typed({
          strings: ["sales", "marketing", "secretary"],
          typeSpeed:10
        });
    });


  }); // end of document ready
})(jQuery); // end of jQuery name space
