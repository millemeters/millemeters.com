$(document).ready(function() {
    console.log('\'Allo \'Allo!');

    $('#tell-me-more').on('click', function() {
        $('html').addClass('side');
        $('.pages').disablescroll();
    });

    $('#tell-me-less').on('click', function() {
        $('html').removeClass('side');
        $('.pages').disablescroll('undo');
    });

});