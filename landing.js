(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-76245821-1', 'getdeckhub.com');
ga('send', 'pageview');

$(document).ready(function() {
  var platform = navigator.platform.toLowerCase();

  if (platform.includes('mac')) {
    platform = '.dmg';
  } else if(platform.includes('win')) {
    platform = '.exe';
  } else if (platform.includes('lin')) {
    platform = '.deb';
  } else {
    platform = null;
  }

  if (platform) {
    $(".platform").html("(" + platform + ")");
  } else {
    $(".platform").remove();
  }
});

if ($("#Particles").length > 0) {
  particlesJS.load('Particles', 'https://getdeckhub.com/particles.json');
}

$(".LandingButton").on("click", function (e) {
  $this = $(this);
  $this.addClass("isLoading");

  if ($this.hasClass('BuyButton')) {
    ga('send', 'event', 'callToActionClick', 'buy');
  } else {
    ga('send', 'event', 'callToActionClick', 'download');
  }

  setTimeout(function() {
    $this.removeClass('isLoading');
  }, 3000);
});
