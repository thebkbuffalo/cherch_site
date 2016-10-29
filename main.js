$(document).ready(function(){

  // $('video').attr('loop','loop');
  $('video').on('ended', function () {
    this.load();
    this.play();
  });


});
