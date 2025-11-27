$(document).ready(function() {

  let existingEmails = ["test@example.com", "user@example.com"];

  function showMessage(msg, color = 'green') {
    $('#message').text(msg).css('color', color).fadeIn(200).delay(2000).fadeOut(200);
  }

  function validateEmail(email) {
    let regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }

  $('#registration-form').on('submit', function(e) {
    e.preventDefault();

    let name = $('#name').val().trim();
    let email = $('#email').val().trim();
    let password = $('#password').val().trim();
    let valid = true;

    $('input').css('border', '1px solid #ccc');

    if(name === '') {
      $('#name').css('border', '2px solid red');
      valid = false;
    }

    if(!validateEmail(email) || existingEmails.includes(email)) {
      $('#email').css('border', '2px solid red');
      valid = false;
    }

    if(password.length < 8) {
      $('#password').css('border', '2px solid red');
      valid = false;
    }

    if(valid) {
      showMessage('Registration successful!', 'green');
      $('#registration-form')[0].reset();
    } else {
      showMessage('Please correct the highlighted fields.', 'red');
    }

  });

  $('#name, #email, #password').on('input', function() {
    $(this).css('border', '1px solid #ccc');
  });

});
