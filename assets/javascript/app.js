// Side Nav Bar
$('.button-collapse').sideNav({
    menuWidth: 120,
    edge: 'left',
    closeOnClick: true,
    draggable: true
});
// modal trigger
$(document).ready(function() {
    $('.modal').modal();
});
// Smooth scrolling
$(document).ready(function() {
    $(".smooth-scroll").on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function() {
                window.location.hash = hash;
            });
        }
    });
});