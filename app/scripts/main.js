var iPad = navigator.platform.indexOf('iPad') !== -1;

function hideSidePage() {
    $('html').removeClass('side');
    $('.pages').removeClass('not-scrollable');
}

function showSidePage(event) {
    var sidePageName = $(event.target).attr('data-side-page-target'),
        sidePage = $('[data-side-page='+sidePageName+']');

    $('.side-page').removeClass('visible');
    sidePage.addClass('visible');

    $('html').addClass('side');
    $('.pages').addClass('not-scrollable');

    sidePage.find('img.lazy').trigger('show-side-page');
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
    $('.tell-me-more').on('click', showSidePage);

    $('.user-research-page').swipe({
        swipeLeft: showSidePage
    });

    $('.tell-me-less, .overlay').on('click', hideSidePage);

    $('.side-page').swipe({
        swipeRight: hideSidePage
    });
}

$(document).ready(setupSidePages);

if (!iPad) {
    $(document).ready(setupParallax);
}

$(document).ready(function() {
    $('img.lazy').lazyload({
        event: 'show-side-page'
    });
});
