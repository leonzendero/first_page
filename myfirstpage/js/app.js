window.onload = function () {

    let brandsSwiper = new Swiper('.brands__block', {
        slidesPerView: 3,
        spaceBetween: 40,
        navigation: {
            nextEl: '.brands__arrow-right',
            prevEl: '.brands__arrow-left',
        },

        breakpoints: {
            760: {
                slidesPerView: 3,
            },
            500: {
                slidesPerView: 2
            },

            320: {
                slidesPerView: 1
            }
        },
    });


    let list = document.querySelectorAll('.work__block-item');
    let listOpen = document.querySelectorAll('.work__store-item');
    let exit = document.querySelectorAll('.work__store-item-exit');

    for (let i = 0; i < list.length; i++) {
        list[i].addEventListener('click', function () {
            listOpen[i].classList.add('active');
        });
        for (let l = 0; l < exit.length; l++) {
            exit[l].addEventListener('click', function () {
                listOpen[i].classList.remove('active');
            });
        }
    }

    let icon = document.querySelector('.header__icon');

    function animationScroll() {
        icon.classList.toggle('active');
    }

    setInterval(animationScroll, 1000);

}