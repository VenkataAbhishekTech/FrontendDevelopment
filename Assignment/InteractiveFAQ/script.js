$(document).ready(function() {

  $('.question').on('click', function() {
    $(this).next('.answer').slideToggle(200);
    $(this).toggleClass('active');
  });

  $('.question').hover(
    function() { $(this).addClass('hover-color'); },
    function() { $(this).removeClass('hover-color'); }
  );

  $('.question').on('dblclick', function() {
    $('.answer').slideUp(200);
    $('.question').removeClass('active');
  });

  $('input').on('focus', function() {
    $(this).closest('.faq-item').find('.question').addClass('highlight');
  });

  $('input').on('blur', function() {
    $(this).closest('.faq-item').find('.question').removeClass('highlight');
  });

});
