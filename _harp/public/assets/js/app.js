$(function() {

  $(".panel-video--full").click(function () {
    $(this).append('<div class="video"><iframe src="//player.vimeo.com/video/' + $(this).data('video-id') + '?title=0&amp;byline=0&amp;portrait=0&amp;wmode=opaque&amp;api=1&amp;&autoplay=1" width="1004" height="565" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe></div>');
  });

});