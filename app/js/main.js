// Particles option

var particlesOptions = {
  "particles": {
    "number": {
      "value": 60,
      "density": {
        "enable": true,
        "value_area": 600
      }
    },
    "color": {
      "value": "#ffffff"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 5
      },
      "image": {
        "src": "img/github.svg",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 0.5,
      "random": false,
      "anim": {
        "enable": false,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 3,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 40,
        "size_min": 0.1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": false,
      "distance": 150,
      "color": "#ffffff",
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 6,
      "direction": "none",
      "random": true,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": false,
        "mode": "repulse"
      },
      "onclick": {
        "enable": false,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 400,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 400,
        "size": 40,
        "duration": 2,
        "opacity": 8,
        "speed": 3
      },
      "repulse": {
        "distance": 200,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
}
particlesJS('particles-js', particlesOptions)

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

    var $name = $("#inputName3").val();

    var $country = $("#inputCountry3").val();
    var $city = $("#inputCity3").val();
    var $street = $("#inputStreet3").val();
    var $house = $("#inputHouse3").val();
    
    $dataOrder.append('<p class="customer-data">' + $name + '</br>' + 'ул. ' + $street + ' ' + $house + ', ' + $city + ', ' + $country + '</p>');

    console.log($country);
  });

  $stepBack.on('click', function(e){
    $( ".customer-data" ).remove();
  })

})

//particles-JS in carousel
$('#carousel-top').on('slid.bs.carousel', function (e) {                                                       // Ивент, который срабатывает когда листается слайд
  console.log(e.direction);
  var $nextItem = $('#carousel-top .item.active')
  var now = new Date();   
  var id = 'particles-' + now.getTime();                                                                              // Обьявили переменную в котую ниже с помощью if esle мы закидываем селекторы, которые определяем с помощью direction
  var $particles = $('<div class="notUniqPart" id="' + id + '"></div>');                                             // testing if real we added elements на примере кнопки. Мы тут огорнули в два селектора что бы сделать масив из всех кнопок и добавить только первую [0]

  // if (e.direction == 'right') {                                                                                           // проверили смена слайда уходит в право мы получаем значение 'right' 
  //   $nextItem = $('#carousel-top .item.active').prev();                                                                                           // мы в переменную вносим селектор следующего итема который после активного  
  // } else {                                                                                          // в любом другом случае мы получаем значение 'left'
  //   $nextItem = $('#carousel-top .item.active').next();                                                                                         // мы в переменную вносим селектор следующего итема который перед активным
  // }
  
  if ($nextItem.find('.notUniqPart').length == 0) {
    $nextItem.append($particles);
    particlesJS(id.toString(), particlesOptions);
  }

})

$('#carousel-top').on('slid.bs.carousel', function () {                               // ивент который срабатывает в момент, когда слайд перелистнулся
    //$('.item:not(.active) #particles-js').remove();

})
                                                        //  начинае пробовать обернуть это все в переменную задав параметр, так как потом мы будем каждый раз инициализировать новый партиклз