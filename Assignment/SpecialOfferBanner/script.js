$(document).ready(function() {
  $('#hide').click(function() {
    $('.banner').hide();
  });

  $('#show').click(function() {
    $('.banner').show();
  });

  $('#slide').click(function() {
    $('.banner').slideToggle(500);
  });

  $('#fade').click(function() {
    $('.banner').fadeToggle(500);
  });

  let banners = $('.banner');
  let current = 0;
  banners.hide();
  $(banners[current]).fadeIn(500);

  setInterval(function() {
    $(banners[current]).fadeOut(500, function() {
      current = (current + 1) % banners.length;
      $(banners[current]).fadeIn(500);
    });
  }, 5000);
});
