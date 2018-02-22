// PopOver

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

$(".modal-menu").on('show.bs.modal', function () {
  setTimeout( function() {
    $(".modal-backdrop").addClass("modal-backdrop-transparent");
  }, 0);
/*
  setTimeout( function() {
    $("div.point-box1").addClass('point-box-1');
  }, 400);

  setTimeout( function() {
    $("div.point-box2").addClass('point-box-1');
  }, 600);

  setTimeout( function() {
    $("div.point-box3").addClass('point-box-1');
  }, 800);

  setTimeout( function() {
    $("div.point-box4").addClass('point-box-1');
  }, 1000);

  setTimeout( function() {
    $("div.point-box5").addClass('point-box-1');
  }, 1200);

  setTimeout( function() {
    $("div.point-box6").addClass('point-box-1');
  }, 1400);

  setTimeout( function() {
    $("div.point-box7").addClass('point-box-1');
  }, 1600);

  setTimeout( function() {
    $("div.point-box8").addClass('point-box-1');
  }, 1800);

  setTimeout( function() {
    $("div.point-box9").addClass('point-box-1');
  }, 2000);
*/
});

$("#modal-menu").on('hide.bs.modal', function () {
    /*
    setTimeout(function() {
      $('div.point-box1').removeClass("point-box-1");
      $('div.point-box1').addClass('point-test');
    }, 2000);
    alert(1000);
    $("div.point-box1").removeClass("point-box-1");
    $("div.point-box2").removeClass("point-box-1");
    $("div.point-box2").removeClass("point-box-1");
    $("div.point-box3").removeClass("point-box-1");
    $("div.point-box4").removeClass("point-box-1");
    $("div.point-box5").removeClass("point-box-1");
    $("div.point-box6").removeClass("point-box-1");
    $("div.point-box7").removeClass("point-box-1");
    $("div.point-box8").removeClass("point-box-1");
    */
});

