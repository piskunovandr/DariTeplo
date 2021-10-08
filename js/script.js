

$(".your-class").slick({
   dots: true,
   arrows: false,
   dotsClass: "slick-dots  slider__dots",
});

$(".main-sliderr").slick({
   dots: true,
   arrows: false,
});

$(".product-img").slick({
   dots: true,
   arrows: false,
});






$(".about-body-instagram-body-slider").slick({
   dots: false,
   arrows: false,
   slidesToShow: 5,
   centerMode: true,
});


$(document).ready(function () {
   $('body').on('click', '.number-minus, .number-plus', function () {
      var $row = $(this).closest('.number');
      var $input = $row.find('.number-text');
      var step = $row.data('step');
      var val = parseFloat($input.val());
      if ($(this).hasClass('number-minus')) {
         val -= step;
      } else {
         val += step;
      }
      $input.val(val);
      $input.change();
      return false;
   });

   $('body').on('change', '.number-text', function () {
      var $input = $(this);
      var $row = $input.closest('.number');
      var step = $row.data('step');
      var min = parseInt($row.data('min'));
      var max = parseInt($row.data('max'));
      var val = parseFloat($input.val());
      if (isNaN(val)) {
         val = step;
      } else if (min && val < min) {
         val = min;
      } else if (max && val > max) {
         val = max;
      }
      $input.val(val);
   });

   let inpt = document.querySelector('#name');
   let label = document.querySelector('label[for="name"]');
   inpt.addEventListener('focus', () => {
     label.style.visibility = 'hidden';
   });
   inpt.addEventListener('blur', () => {
     label.style.visibility = 'visible';
   });
});
