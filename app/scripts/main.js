function hideSidePage() {
    $('html').removeClass('side');
    $('.pages').removeClass('not-scrollable');
}

function showSidePage() {
    $('html').addClass('side');
    $('.pages').addClass('not-scrollable');
}

$(document).ready(function() {
    console.log('\'Allo \'Allo!');

    $('.tell-me-more').on('click', showSidePage);

    $('.user-research-page').swipe({
        swipeLeft: showSidePage
    });

    $('.tell-me-less').on('click', hideSidePage);

    $('.side-page').swipe({
        swipeRight: hideSidePage
    });

});