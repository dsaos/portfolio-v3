$(window).on("load", function(e) {
  $("#load_overlay").fadeOut(500);
})

$('.next').click(function() {
document.querySelector('.hello').scrollIntoView({ 
  behavior: 'smooth' 
});
})
