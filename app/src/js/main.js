var menuIcon = $(".site-header__menu-icon");
var menuContent = $(".site-header__menu-content");

menuIcon.on("click", function () {
    menuContent.toggleClass("is-visible");
});


// $(window).scroll(function () {
//     if ($(window).scrollTop() >= 200) {
//         $('#sticker').addClass('fixed-header');
//     } else {
//         $('#sticker').removeClass('fixed-header');
//     }
// });


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

// var siteHeader = $(".site-header");
// var headerTriggerElement = $(".large-hero__title");
// //         this.createHeaderWaypoint();
// var pageSections = $(".page-section");
// var headerLinks = $(".primary-nav a");
// //         this.createSectionPageWaypoints();
// //         this.addSmoothScrolling();



// class StickyHeader {
//     constructor() {
//         this.siteHeader = $(".site-header");
//         this.headerTriggerElement = $(".large-hero__title");
//         this.createHeaderWaypoint();
//         this.pageSections = $(".page-section");
//         this.headerLinks = $(".primary-nav a");
//         this.createSectionPageWaypoints();
//         this.addSmoothScrolling();
//     }



//     addSmoothScrolling() {
//         this.headerLinks.smoothScroll();
//     }

//     createHeaderWaypoint() {
//         var correctThis = this;
//         new Waypoint({
//             element: this.headerTriggerElement[0],
//             handler: function (direction) {
//                 if (direction == "down") {
//                     correctThis.siteHeader.addClass("site-header--dark");
//                 } else {
//                     correctThis.siteHeader.removeClass("site-header--dark");
//                 }
//             }
//         });
//     }

//     createSectionPageWaypoints() {
//         var that = this;
//         this.pageSections.each(function () {
//             var currentPageSection = this;
//             new Waypoint({
//                 element: currentPageSection,
//                 handler: function (direction) {
//                     if (direction == "down") {
//                         var machingHeaderLink = currentPageSection.getAttribute("data-maching-link");
//                         that.headerLinks.removeClass("is-current-link");
//                         $(machingHeaderLink).addClass("is-current-link");
//                     }
//                 },
//                 offset: "18%"
//             });

//             new Waypoint({
//                 element: currentPageSection,
//                 handler: function (direction) {
//                     if (direction == "up") {
//                         var machingHeaderLink = currentPageSection.getAttribute("data-maching-link");
//                         that.headerLinks.removeClass("is-current-link");
//                         $(machingHeaderLink).addClass("is-current-link");
//                     }
//                 },
//                 offset: "-40%"
//             });
//         });
//     }
// }