var controller = new ScrollMagic.Controller();

var numAnimating = 0;

let fadeEls = document.getElementsByClassName('fade-up')
for (fadeEl of fadeEls) {
	let scene = new ScrollMagic.Scene({
		triggerElement: fadeEl,
		triggerHook:'onEnter'
		})
  	.addTo(controller)
  	.on('enter', function(e) {
  		animateIn(scene.triggerElement());
  	})
}


window.onload = function(event) {
//handle preloaded images
	let preloadEls = document.getElementsByClassName('lazyload-image')
	for (preloadEl of preloadEls) {
		let scene = new ScrollMagic.Scene({
			triggerElement: preloadEl,
			triggerHook:'onEnter'
		})
		.addTo(controller)
		.on("enter", setPreload(preloadEl))
	}

//handle scramble-ins
  delay(1000).then(function() {
    for (el of els) {
        let fx = new TextScramble(el)
        el.style.visibility = "visible"
        fx.setText(el.innerText)  
        console.log('initiating scramble')
    }
  })
}

function setPreload(el) {
    el.setAttribute('src', el.getAttribute('data-src'));
	el.onload = function() {
	    el.classList.remove('preloader');
	}
}

function animateIn(element) {
	numAnimating++;
	setTimeout(function(){
  		element.classList.add('animate');
  		numAnimating--;
	},300*numAnimating);
}


//portfolio expansion

let expandEls = document.getElementsByClassName('expand-link')
const fullscreenArea = document.getElementById('fullscreenArea')
const fullscreenImage = document.getElementById('fullscreenImage')
const fullscreenDescription = document.getElementById('fullscreenDescription')
for (expandEl of expandEls) {
	expandEl.onclick = function(e) {
		let image = this.getElementsByClassName('portfolio-image')[0].outerHTML
		fullscreenImage.innerHTML = image
		let description = this.getElementsByClassName('portfolio-description')[0].innerHTML;
		fullscreenDescription.innerHTML = description
		fullscreenArea.classList.add('animate-in')
	}
}
const closeButton = document.getElementById('closeButton')
fullscreenArea.onclick = function(e) {
		fullscreenArea.classList.remove('animate-in')

}