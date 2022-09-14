
// function wow() {
//   wow = new WOW({
//       boxClass: "wow", // default
//       animateClass: "animated", // default
//       offset: 0, // default
//       mobile: true, // default
//       live: true, // default
//   });
// wow.init();
// }

new WOW().init();

// function aos() {
//   AOS.init({
//     // duration: 4000,
//     offset: 200,
//     easing: 'ease', // default easing for AOS animations
//     once: false, // whether animation should happen only once - while scrolling down
//     mirror: false, // whether elements should animate out while scrolling past them
//     anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
//   });
// }


function sidebar() {
  $(".menu-btn").on("click", function () {
    $('.bs-menu').addClass('active');
  });
  $(".btn-close").on("click", function () {
    $('.bs-menu').removeClass('active');
  });
}

function testimonial() {
  var swiper = new Swiper(".testimonial-slider", {
    navigation: {
      nextEl: ".small-triangle-next",
      prevEl: ".small-triangle-prev",
    },
  });
}

function sticky_nav() {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 0) {
      $('.bs-header').addClass('sticky');
      // $('.mod-black-logo .bs-header').addClass('aaa');
      $('.bs-header .navbar .container .collapse .right-nav .bs-btn').removeClass('typ-white');
    } else {
      $('.bs-header').removeClass('sticky');
      // $('.mod-black-logo .bs-header').removeClass('aaa');
      $('.bs-header .navbar .container .collapse .right-nav .bs-btn').addClass('typ-white');
    }

    // if ($('.white-header .bs-header')[0]) {
    //   $('.bs-header .navbar .container .collapse .right-nav .bs-btn').removeClass('typ-white');
    // }
  });
}
function team() {
  var swiper = new Swiper(".team-img", {
    slidesPerView: "auto",
    spaceBetween: 0,
    // pagination: {
    //   el: ".swiper-pagination",
    //   clickable: true,
    // },
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    // breakpoints: {
    //   320: {
    //     slidesPerView: 1.5,
    //     spaceBetween: 20,
    //   },
    //   768: {
    //     slidesPerView: 3,
    //     spaceBetween: 40,
    //   },
    //   1024: {
    //     slidesPerView: 3.5,
    //     spaceBetween: 50,
    //   },
    // },
  });
}


function magnific() {
  $('.popup-youtube').magnificPopup({
    type: 'iframe'
  });
}

function counter() {
  var counted = 0;
  // $(window).scroll(function () {
  // $(window).on('load', function () {
  if ($("#cstm-counter").length == 1) {
    var oTop = $("#cstm-counter").offset().top - window.innerHeight;
    if (counted == 0 && $(window).scrollTop() > oTop) {
      $(".count").each(function () {
        var $this = $(this),
          countTo = $this.attr("data-count");
        $({
          countNum: $this.text(),
        }).animate(
          {
            countNum: countTo,
          },

          {
            duration: 2000,
            easing: "swing",
            step: function () {
              $this.text(Math.floor(this.countNum));
            },
            complete: function () {
              $this.text(this.countNum);
              //alert('finished');
            },
          }
        );
      });
      counted = 1;
    }
  }

  // });
}

function masonry() {
  // $(window).on('load', function () {
  //   $('.gap-create').masonry({
  //     percentPosition: true
  //   });
  // });
  var $container = $('.gap-create');
  var $team = $('.new-team');
  $container.imagesLoaded(function () {
    $('.gap-create').masonry({
      itemSelector: '.typ-card-margin',
    });
  });
  $team.imagesLoaded(function () {
    $('.new-team').masonry({
      itemSelector: '.img-card-team',
    });
  });
}

function switch_tab() {
  $('.switch .checkbox').change(function () {
    if ($(this).is(":checked")) {
      $(".tab-2").fadeIn("slow");
      $(".tab-1").fadeOut("fast");
    } else {
      $(".tab-1").fadeIn("slow");
      $(".tab-2").fadeOut("fast");
    }
  });
  var tab_height = $('.tab-data').height();
  $('.tab-data').css("height", tab_height);
  $('.tab-data').css("overflow-y", "hidden");
}

function active_menu() {

  var filename = window.location.href.substr(window.location.href.lastIndexOf("/") + 1);


  $('.bs-header .bs-menu .list .item a').each(function () {
    //Compares the href of the nav a element to the URL page
    if ($(this).attr('href') == filename) {
      //If they match, add class name to the parent li element
      $(this).parent().addClass('active');
    }
  });
}



$(function () {
  active_menu();
  switch_tab();
  sidebar();
  testimonial();
  sticky_nav();
  team();
  magnific();
  // counter();
  masonry();
  // wow();
  // aos();
  // $('#hs-form-iframe-0 head').append('<link rel="stylesheet" type="text/css" href="assets/css/custom.css">') 
});




// document.addEventListener("click", function (e) {
//   if (e.target.classList.contains("video-screen")) {
//     const src = e.target.getAttribute("src");
//     document.querySelector(".video-show").src = src;
//     const myModal = new bootstrap.Modal(document.getElementById('video-modal'));
//     myModal.show();
//   }
// })

// document.addEventListener("click",function (e){
//   if(e.target.classList.contains("gallery-item")){
//       const src = e.target.getAttribute("src");
//       document.querySelector(".modal-img").src = src;
//       const myModal = new bootstrap.Modal(document.getElementById('gallery-modal'));
//       myModal.show();
//   }
// })

