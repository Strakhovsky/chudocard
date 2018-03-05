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

//ORDER DATA

$(function(){
  var $getData = $('#getData');
  var $stepBack = $('#stepBack');
  var $dataOrder = $('.data-order');

  $getData.on('click', function(e){

    var $name = $("#inputName3:input:text").val();
    var $date = $("#inputBirthday3:input:text").val();
    var $email = $("#inputEmail3:input:text").val();
    var $phone = $("#inputPhoneNumber3:input:text").val();

    var $country = $("#inputCountry3:input:text").val();
    var $city = $("#inputCity3:input:text").val();
    var $street = $("#inputStreet3:input:text").val();
    var $house = $("#inputHouse3:input:text").val();
    
    $dataOrder.append('<p class="customer-data">' + $name + '</br>' + 'ул. ' + $street + ' ' + $house + ', ' + $city + ', ' + $country + '</p>');

    console.log($country);
  });

  $stepBack.on('click', function(e){
    $( ".customer-data" ).remove();
  })

})