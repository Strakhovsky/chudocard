// PopOver

$(function() {
    // Включаем поповер везде, где есть атрибут data-toggle="popover"
    $('[data-toggle="popover"]').popover({
      trigger: 'click'
    }); 
  })

// Modal menu
/*
$(".modal-transparent").on('show.bs.modal', function () {
  setTimeout( function() {
    $(".modal-backdrop").addClass("modal-backdrop-transparent");
  }, 0);
});
$(".modal-transparent").on('hidden.bs.modal', function () {
  $(".modal-backdrop").addClass("modal-backdrop-transparent");
});
*/