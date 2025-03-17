
'use strict';

$(function () {
    var $carousel = $('.slick-carousel');
    console.log($carousel);

    if ($carousel.length) {
        if (typeof $carousel.slick === 'function') {
            console.log('Slick is available!');
            $carousel.slick({
                dots: true,
                infinite: true, 
                speed: 300,
                slidesToShow: 4,
                slidesToScroll: 4,
                responsive: [
                    {
                        breakpoint: 1024,
                        settings: {
                            slidesToShow: 3,
                            slidesToScroll: 3,
                            infinite: true,
                            dots: true
                        }
                    },
                    {
                        breakpoint: 600,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 2
                        }
                    },
                    {
                        breakpoint: 480,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1
                        }
                    }
                ] 
            });
        } else {
            console.error('Slick is not available!');
        }
    } else {
        console.warn('Slick carousel element not found.');
    }
});
 