$(document).ready(function() {

  $('.subscribe').on('click', function() {
    let topicName = $(this).closest('.topic').text().trim();
    showMessage(`Subscribed to "${topicName}" successfully!`);
  });

  $('.unsubscribe').on('click', function() {
    let topicName = $(this).closest('.topic').text().trim();
    showMessage(`Unsubscribed from "${topicName}" successfully!`);
  });

  $('#add-topic').on('click', function() {
    let newTopic = $('#new-topic').val().trim();
    if(newTopic !== '') {
      let topicItem = $('<li class="topic"></li>').text(newTopic + ' ');
      let subBtn = $('<button class="subscribe">Subscribe</button>');
      let unsubBtn = $('<button class="unsubscribe">Unsubscribe</button>');
      topicItem.append(subBtn, unsubBtn);
      $('.topics').append(topicItem);
      $('#new-topic').val('');
    }
  });

  $('.topics').on('click', '.subscribe', function() {
    let topicName = $(this).closest('.topic').text().trim();
    showMessage(`Subscribed to "${topicName}" successfully!`);
  });

  $('.topics').on('click', '.unsubscribe', function() {
    let topicName = $(this).closest('.topic').text().trim();
    showMessage(`Unsubscribed from "${topicName}" successfully!`);
  });

  setTimeout(function() {
    $('.topics li:first .unsubscribe').off('click');
    showMessage('Unsubscribe disabled for first topic.');
  }, 10000);

  function showMessage(msg) {
    $('#message').text(msg).fadeIn(200).delay(2000).fadeOut(200);
  }

});
