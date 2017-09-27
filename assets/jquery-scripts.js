
document.addEventListener("DOMContentLoaded", function(event) {
  $("#load_overlay").fadeOut(500);


  delay(1000).then(function() {
    for (el of els) {
        let fx = new TextScramble(el)
        el.style.visibility = "visible"
        fx.setText(el.innerText)  
    }
  })
})



$('.next').click(function() {
document.querySelector('.hello').scrollIntoView({ 
  behavior: 'smooth' 
});
})


  
function delay(interval) {
  return new Promise(function(resolve) {
      setTimeout(resolve, interval);
  });
}
