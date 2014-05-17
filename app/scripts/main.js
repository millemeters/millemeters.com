$(document).ready(function() {
    console.log('\'Allo \'Allo!');

    $('.tell-me-more').on('click', function() {
        $('html').addClass('side');
        $('.pages').addClass('not-scrollable');
    });

    $('.tell-me-less').on('click', function() {
        $('html').removeClass('side');
        $('.pages').removeClass('not-scrollable');
    });

});