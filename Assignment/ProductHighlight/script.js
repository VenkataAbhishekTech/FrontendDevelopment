$(document).ready(function(){
  $('.product').on('click', function(){
    $(this).toggleClass('highlighted');
    if ($(this).data('stock') === 'out') {
      alert('Sorry, this product is out of stock!');
    }
  });

  $('.product').hover(
    function(){ $(this).find('.details').slideDown(200); },
    function(){ $(this).find('.details').slideUp(200); }
  );

  $('.favorite').on('click', function(event){
    event.stopPropagation();
    $(this).toggleClass('selected');
  });

  $('.product[data-discount]').each(function(){
    if ($(this).data('discount')) {
      $(this).addClass('discounted');
    }
  });
});
