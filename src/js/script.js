window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.menu'),
    menuItem = document.querySelectorAll('.menu__link'),
    close = document.querySelector('.close'),
    hamburger = document.querySelector('.navbar__hamburger');

    hamburger.addEventListener('click', () => {
        menu.classList.toggle('menu_active');
    });


    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            menu.classList.toggle('menu_active');
        })
    })

    close.addEventListener('click', () => {
        menu.classList.toggle('menu_active');
    });

});

$(document).ready(function(){
    $('.advantages__carousel').slick({
        responsive: [
            {
                breakpoint: 1000000,
                settings: "unslick"
            },

            {
                breakpoint: 1190,
                settings: {
                    
                    infinite: true,
                    arrows: false,
                    // slidesToShow: 2,
                    slidesToScroll: 1,
                    dots: true,
                    centerMode: true,
                    variableWidth: true,
                }
              },
        ]
      });
  });

  $(document).ready(function(){
    $('.feedback__carousel').slick({

        infinite: true,
                    arrows: false,
                    slidesToScroll: 1,
                    dots: true,
                    centerMode: true,
                    variableWidth: true,       
      });
  });

  var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    /* Переключение между добавлением и удалением класса "active",
    чтобы выделить кнопку, управляющую панелью */
    this.classList.toggle("active");

    /* Переключение между скрытием и отображением активной панели */
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
};

$(document).ready(function(){
  $('.blog__carousel').slick({
      responsive: [
          {
              breakpoint: 1000000,
              settings: "unslick"
          },

          {
              breakpoint: 1025,
              settings: {
                  infinite: true,
                  arrows: false,
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  dots: true,
                  centerMode: true,
                  variableWidth: true,
              }
            },
      ]
    });
});