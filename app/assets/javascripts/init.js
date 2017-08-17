var ready = function() {
  $('.button-collapse').sideNav();
  $('.parallax').parallax();
  $('.carousel').carousel();
};

$(document).ready(ready);
$(document).on('page:change', ready);
