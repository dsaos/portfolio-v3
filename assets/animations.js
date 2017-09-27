var controller = new ScrollMagic.Controller();

let fadeEls = document.getElementsByClassName('fade-up')
for (el of fadeEls) {
	let scene = new ScrollMagic.Scene({
		triggerElement: el,
		triggerHook:'onEnter'
		});
  	scene.setClassToggle(el, "animate")
  		.addTo(controller);
}

let preloadEls = document.getElementsByClassName('lazyload-image')
for (el of preloadEls) {
	const scene = new ScrollMagic.Scene({
		triggerElement: el,
		triggerHook:'onEnter'
	})
	.on("enter", setPreload(el)).addTo(controller)

}

function setPreload(el) {
    el.setAttribute('src', el.getAttribute('data-src'))
	el.onload = function() {
	    el.classList.remove('preloader')
	}
}