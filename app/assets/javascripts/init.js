var ready = function() {
  $('.button-collapse').sideNav();
  $('.parallax').parallax();
  $('.carousel').carousel();
  // setTimeout(function(){
  //   $('.tap-target').tapTarget('open');
  // }, 2500);
};

$(document).ready(ready);
$(document).on('page:change', ready);
