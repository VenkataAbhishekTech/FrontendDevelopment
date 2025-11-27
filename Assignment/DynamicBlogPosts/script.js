$(document).ready(function() {

  $('#add-post').on('click', function() {
    let newPost = $('#new-post').val().trim();
    if(newPost !== '') {
      $('.blog-list').append(`<li class="post">${newPost}</li>`);
      $('#new-post').val('');
    }
  });

  $('#prepend-post').on('click', function() {
    let featuredPost = prompt("Enter featured post title:");
    if(featuredPost) {
      $('.blog-list').prepend(`<li class="post">${featuredPost}</li>`);
    }
  });

  $('#remove-last').on('click', function() {
    $('.blog-list .post').last().remove();
  });

  $('.blog-list').on('click', '.post', function() {
    let tag = prompt("Enter a tag for this post:");
    if(tag) {
      $(this).after(`<span class="tags">#${tag}</span>`);
    }
  });

  $('#highlight-keyword').on('keyup', function() {
    let keyword = $(this).val().toLowerCase();
    $('.post').each(function() {
      let text = $(this).text();
      if(keyword && text.toLowerCase().includes(keyword)) {
        $(this).addClass('highlight');
      } else {
        $(this).removeClass('highlight');
      }
    });
  });

});
