
$(function(){
  $(".navbar-menu-icon").click(function(){
    $(this).toggleClass("fa-bars");
    $(this).toggleClass("fa-times");
    $(".navbar-mobile").toggleClass("expand");
  });


  var el = document.getElementById("pulsar");

  if (el){
    setInterval(function () {
      if (el.style.visibility == "hidden") el.style.visibility = "visible";
      else el.style.visibility = "hidden";
    }, 700);
  }

  var RELEASE_BANNER_KEY = 'RELEASE_2_0_BANNER_CLOSED';
  var bannerClosed = window.localStorage.getItem(RELEASE_BANNER_KEY);
  var releaseBanner = document.getElementById('release-banner');
  function removeBanner() {
    releaseBanner.parentNode.removeChild(releaseBanner);
    window.localStorage.setItem(RELEASE_BANNER_KEY, 'true');
  }

  if (bannerClosed) {
    removeBanner();
  } else {
    var bannerCloseButton = document.getElementById('release-banner-close');
    bannerCloseButton.addEventListener('click', removeBanner);
  }
});
