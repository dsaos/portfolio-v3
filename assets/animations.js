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