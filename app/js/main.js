// Particles option
var particlesOptions = { //options for particles.js
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
particlesJS('particles-js', particlesOptions) //activate particles on the first slide

$.fn.modal.Constructor.TRANSITION_DURATION = 2000 //get more time for modal close
$.fn.modal.Constructor.BACKDROP_TRANSITION_DURATION = 2000 //get more time for modal close

    // PopOver
$(function() {
    $('[data-toggle="popover"]').popover({
      trigger: 'click'
    }); 
  })

    //Button tab trigger
$(document).on('click', '[data-click]', function (e) {
  e.preventDefault();
  var targetSelector = $(this).data('click');
  $(targetSelector).trigger('click');
});

    //Checkbox trigger for registration-ready
$(document).on('change', '#checkbox-reg', function () {

  if ($(this).prop('checked')) {
    $('.registration').addClass('ready');
    } else  {
      $('.registration').removeClass('ready'); 
    }

})

    //Order data for registration
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

  });

  $stepBack.on('click', function(e){
    $( ".customer-data" ).remove();
  })

})

    //Particles-JS in carousel
$('#carousel-top').on('slid.bs.carousel', function (e) {

  var $nextItem = $('#carousel-top .item.active');
  var now = new Date();   
  var id = 'particles-' + now.getTime(); //create uniq id for initialization particles-js at the same time in different elements
  var $particles = $('<div class="notUniqPart-carousel" id="' + id + '"></div>');

  if ($nextItem.find('.notUniqPart-carousel').length == 0) {
    $nextItem.append($particles);
    particlesJS(id.toString(), particlesOptions);
  }

  $('#carousel-top .item:not(.active) .notUniqPart-carousel').remove();

})

    //Particles-JS on modal
$('.modal-menu').on('show.bs.modal', function (e){
  var $modalItem1 = $('.particlesPoint1');
  var $modalItem2 = $('.particlesPoint2');
  var $modalItem3 = $('.particlesPoint3');
  var now = new Date();

  var idOne = 'particles-' + now.getTime() + '-1';
  var idTwo = 'particles-' + now.getTime() + '-2';
  var idThree = 'particles-' + now.getTime() + '-3';

  var $particles1 = $('<div class="notUniqPart-modal" id="' + idOne + '"></div>');
  var $particles2 = $('<div class="notUniqPart-modal" id="' + idTwo + '"></div>');
  var $particles3 = $('<div class="notUniqPart-modal" id="' + idThree + '"></div>');

  if ($modalItem1.find('.notUniqPart-modal').length == 0) {
    setTimeout( // particles-js work in modal window only with setTimeout
      function(){
        $modalItem1.append($particles1);
        particlesJS(idOne.toString(), particlesOptions);

        $modalItem2.append($particles2);
        particlesJS(idTwo.toString(), particlesOptions);

        $modalItem3.append($particles3);          
        particlesJS(idThree.toString(), particlesOptions);
      }, 500);
      
  }

})


    //Particles-JS on tab
$('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
  var $tabToggle = $(e.target); //get recent Tab
  var $tab = $($tabToggle.data('target') || $tabToggle.attr('href')); 

  var $previousTabToggle = $(e.relatedTarget) //get previous Tab
  var $previousTab = $($previousTabToggle.data('target') || $previousTabToggle.attr('href'));

  var now = new Date();   
  var id = 'particles-' + now.getTime();
  var $particles = $('<div class="notUniqPart-tab" id="' + id + '"></div>');

      if ($tab.find('.notUniqPart-tab').length == 0) {
        $tab.append($particles);
        particlesJS(id.toString(), particlesOptions);
      }

       $previousTab.find('.notUniqPart-tab').remove();

})

    // Anchor links
$(document).ready(function() {
  $(document).on('click', '.page-scroll', function(event) {
      event.preventDefault();
      var id = $(this).attr('href'),
          top = $(id).offset().top;
      $('body,html').animate({ scrollTop: top }, 800);
  });
});

$('#nav').affix({
  offset: {
    top: $('header').outerHeight()
  }
});