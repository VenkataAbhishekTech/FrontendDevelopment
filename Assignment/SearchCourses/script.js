$(document).ready(function() {

  function updateMatchCount(count) {
    $('#match-count').text(count);
  }

  $('#search').on('keyup', function() {
    let query = $(this).val().toLowerCase();
    let matchCount = 0;

    $('.course').each(function() {
      let courseText = $(this).text();
      if (courseText.toLowerCase().includes(query)) {
        $(this).show();
        $(this).html(courseText.replace(new RegExp(query, 'gi'), match => `<span style="background-color: yellow">${match}</span>`));
        matchCount++;
      } else {
        $(this).hide();
      }
    });

    updateMatchCount(matchCount);
  });

  $('#clear-search').on('click', function() {
    $('#search').val('');
    $('.course').show().each(function() {
      $(this).html($(this).text());
    });
    updateMatchCount($('.course').length);
  });

  updateMatchCount($('.course').length);

});
