jQv1(document).ready(function() {
  let slides = jQv1('.slide');
  let index = 0;
  function showSlide(i) {
    slides.removeClass('active');
    slides.eq(i).addClass('active');
  }
  showSlide(index);
  setInterval(function() {
    index = (index + 1) % slides.length;
    showSlide(index);
  }, 3000);

  jQv1('.widget').on('click', function() {
    jQv1('.widget').removeClass('active');
    jQv1(this).addClass('active');
  });
});

jQv2(document).ready(function() {

  jQv2('#show-modal').on('click', function() {
    jQv2('#modal').fadeIn(300);
  });
  jQv2('.close').on('click', function() {
    jQv2('#modal').fadeOut(300);
  });

  jQv2('.widget').hover(
    function() {
      let tooltipText = jQv2(this).data('tooltip');
      let tooltip = jQv2('<div class="tooltip"></div>').text(tooltipText).appendTo('body');
      jQv2(this).data('tooltipEl', tooltip);
      tooltip.css({
        position: 'absolute',
        top: jQv2(this).offset().top - tooltip.outerHeight() - 5,
        left: jQv2(this).offset().left,
        background: '#333',
        color: '#fff',
        padding: '5px 10px',
        borderRadius: '4px',
        zIndex: 2000
      }).fadeIn(200);
    },
    function() {
      jQv2(this).data('tooltipEl').remove();
    }
  );
});
