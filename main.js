$(document).ready(function(){
  $('video').on('ended', function () {
    this.load();
    this.play();
  });
  $('.nav_icon').on('click', function(){
    $('.nav').show();
  })
});
