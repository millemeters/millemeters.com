function hideSidePage(){$("html").removeClass("side"),$(".pages").removeClass("not-scrollable")}function showSidePage(a){var b=$(a.target).attr("data-side-page-target"),c=$("[data-side-page="+b+"]");$(".side-page").removeClass("visible"),c.addClass("visible"),$("html").addClass("side"),$(".pages").addClass("not-scrollable"),c.find("img.lazy").trigger("show-side-page")}function setupParallax(){$(".hero-page").each(function(){var a=$(this);$(".pages").scroll(function(){var b=$(".pages").scrollTop()/2,c=b+"px";a.css({"background-position-y":c})})})}function setupSidePages(){$(".tell-me-more").on("click",showSidePage),$(".user-research-page").swipe({swipeLeft:showSidePage}),$(".tell-me-less, .overlay").on("click",hideSidePage),$(".side-page").swipe({swipeRight:hideSidePage})}var iPad=-1!==navigator.platform.indexOf("iPad");$(document).ready(setupSidePages),iPad||$(document).ready(setupParallax),$(document).ready(function(){$("img.lazy").lazyload({event:"show-side-page"})});