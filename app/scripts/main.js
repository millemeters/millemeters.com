$(document).ready(function() {
    console.log('\'Allo \'Allo!');

    $('#tell-me-more').on('click', function(e) {
        $('html').addClass('side');
        $('.pages').disablescroll();
    });

    $('#tell-me-less').on('click', function(e) {
        $('html').removeClass('side');
        $('.pages').disablescroll('undo');
    });

});