$(document).ready(function () {
    let index = 0;
    const slides = $('.review-slide');
    function showNextSlide() {
        slides.eq(index).fadeOut(500, function () {
            index = (index + 1) % slides.length;
            slides.eq(index).fadeIn(500);
        });
    }
    setInterval(showNextSlide, 8000);

    $(".fade-in").css("opacity", 1).delay(300).fadeIn(800);
});

$('.hamburger-menu-open-icon').on('click', function() {
    $('.hamburger-menu').toggleClass('active')
});
$('.hamburger-menu-close-icon').on('click', function() {
    $('.hamburger-menu').toggleClass('active')
});

gsap.from("body", { opacity: 0, duration: 0.3 });

document.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", (event) => {
        event.preventDefault();
        let href = link.getAttribute("href");

        gsap.to("body", { opacity: 0, duration: 0.3, onComplete: () => {
            window.location.href = href;
        }});
    });
});