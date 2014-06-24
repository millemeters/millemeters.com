var iPad = navigator.platform.indexOf('iPad') !== -1;

function hideSidePage() {
    $('html').removeClass('side');
    $('.pages').removeClass('not-scrollable');
}

function showSidePage() {
    $('html').addClass('side');
    $('.pages').addClass('not-scrollable');
}

function setupParallax() {
    $('.hero-page').each(function(){
        var $bgobj = $(this); // assigning the object
             
        $('.pages').scroll(function() {
            var yPos = ($('.pages').scrollTop() / 2);
             
            // Put together our final background position
            var coords = yPos + 'px';
 
            // Move the background
            $bgobj.css({'background-position-y': coords });
        });
    });
}

function setupSidePages() {
    console.log('\'Allo \'Allo!');

    $('.tell-me-more').on('click', showSidePage);

    $('.user-research-page').swipe({
        swipeLeft: showSidePage
    });

    $('.tell-me-less').on('click', hideSidePage);

    $('.side-page').swipe({
        swipeRight: hideSidePage
    });
}

$(document).ready(setupSidePages);

if (!iPad) {
    $(document).ready(setupParallax);
}
