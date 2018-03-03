// PopOver

$.fn.modal.Constructor.TRANSITION_DURATION = 60000
$.fn.modal.Constructor.BACKDROP_TRANSITION_DURATION = 65000

$(function() {
    // Включаем поповер везде, где есть атрибут data-toggle="popover"
    $('[data-toggle="popover"]').popover({
      trigger: 'click'
    }); 
  })

  /* $(".modal-menu").on('show.bs.modal', function () {
    $("div.point-box1").addClass('point-box-1');  
  });*/

// Modal menu

$("#modal-menu").on('hide.bs.modal', function () {

});

$(document).on('click', '[data-click]', function (e) {
  e.preventDefault();

  var targetSelector = $(this).data('click');

  console.log(targetSelector);
  console.log($(targetSelector))

  $(targetSelector).trigger('click');
});

$(document).on('change', '#checkbox-reg', function () {
  console.log($(this).prop('checked'));

  if ($(this).prop('checked')) {
    $('.registration').addClass('ready');
    } else  {
      $('.registration').removeClass('ready'); 
    }
  
})