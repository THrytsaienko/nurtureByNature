var menuIcon = $(".site-header__menu-icon");
var menuContent = $(".site-header__menu-content");

menuIcon.on("click", function () {
    menuContent.toggleClass("is-visible");
});

// LAZYLOAD PHOTOS
$(document).ready(() => {
    $('.lazy').Lazy();
});


// ANIMATION ON SCROLL
$('.join-the-club').waypoint(function (direction) {
    $('.join-the-club').addClass('animated zoomIn');
}, {
    offset: '30%'
});

$('.our-systems').waypoint(function (direction) {
    $('.our-systems').addClass('animated bounceInRight');
}, {
    offset: '70%'
});


$(document).ready(function () {
    $("#our-systems-link").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 400, function () {
                window.location.hash = hash;
            });
        }
    });
});

$(document).ready(function () {
    $("#formulas-link").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 400, function () {
                window.location.hash = hash;
            });
        }
    });
});

$(document).ready(function () {
    $("#join-the-club-link").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 400, function () {
                window.location.hash = hash;
            });
        }
    });
});

$(document).ready(function () {
    $("#reviews-link").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 400, function () {
                window.location.hash = hash;
            });
        }
    });
});

// $(window).scroll(function () {
//     if ($(window).scrollTop() >= 200) {
//         $('#sticker').addClass('fixed-header');
//     } else {
//         $('#sticker').removeClass('fixed-header');
//     }
// });