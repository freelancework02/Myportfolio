var slidesToShow;

$(document).ready(function(){
    $('.customer-logos').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2500,
        arrows: false,
        dots: false,
        pauseOnHover: false,
        responsive: [{
            breakpoint: 960,
            settings: {
                slidesToShow: 5
            }
        }, {
            breakpoint: 720,
            settings: {
                slidesToShow: 3
            }
        }, {
            breakpoint: 540,
            settings: {
                slidesToShow: 2
            }
        }]
    });
});
