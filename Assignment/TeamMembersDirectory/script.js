$(document).ready(function() {
  $('.manager').on('click', function() {
    $(this).find('.employee').toggleClass('highlight');
  });

  $('.employee').hover(
    function() { $(this).children('.contact').fadeIn(200); },
    function() { $(this).children('.contact').fadeOut(200); }
  );

  $('.dept-title').on('click', function() {
    $(this).siblings('.team').children('li').addClass('highlight');
  });

  $('#random-employee').on('click', function() {
    let allEmployees = $('.employee');
    let randomIndex = Math.floor(Math.random() * allEmployees.length);
    let selected = $(allEmployees[randomIndex]);
    selected.siblings('.employee').toggleClass('highlight');
  });
  $('#toggle-team').on('click', function() {
    $('.team').each(function() {
      $(this).find('.employees').slideToggle(300);
    });
  });

});
