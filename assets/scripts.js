// ——————————————————————————————————————————————————
// TextScramble
// ——————————————————————————————————————————————————

class TextScramble {
  constructor(el) {
    this.el = el
    this.chars = '!<>_\\/[]{}—=+*^?#________'
    this.update = this.update.bind(this)
  }
  setText(newText) {
    const oldText = ''
    const length = Math.max(oldText.length, newText.length)
    const promise = new Promise((resolve) => this.resolve = resolve)
    this.queue = []
    for (let i = 0; i < length; i++) {
      if (newText[i] != ' ') {
        const from = oldText[i] || ''
        const to = newText[i] || ''
        const start = Math.floor(Math.random() * 100)
        const end = start + Math.floor(Math.random() * 100)
        this.queue.push({ from, to, start, end })
      } else {
        const from = oldText[i] || ''
        const to = newText[i] || ''
        const start = 1
        const end = 2
        this.queue.push({ from, to, start, end })

      }
    }
    cancelAnimationFrame(this.frameRequest)
    this.frame = 0
    this.update()
    return promise
  }
  update() {
    let output = ''
    let complete = 0
    for (let i = 0, n = this.queue.length; i < n; i++) {
      let { from, to, start, end, char } = this.queue[i]
      if (this.frame >= end) {
        complete++
        output += to
      } else if (this.frame >= start) {
        if (!char || Math.random() < 0.28) {
          char = this.randomChar()
          this.queue[i].char = char
        }
        output += `<span class="dud">${char}</span>`
      } else {
        output += from
      }
    }
    this.el.innerHTML = output
    if (complete === this.queue.length) {
      this.resolve()
    } else {
      this.frameRequest = requestAnimationFrame(this.update)
      this.frame++
    }
  }
  randomChar() {
    return this.chars[Math.floor(Math.random() * this.chars.length)]
  }
}



const els = document.getElementsByClassName('scramble-in')
for (el of els) {
el.style.visibility = "hidden"
}

// ——————————————————————————————————————————————————
// misc functions
// ——————————————————————————————————————————————————

  
function delay(interval) {
  return new Promise(function(resolve) {
      setTimeout(resolve, interval);
  });
}

//preload images
function setPreload(el) {
    el.setAttribute('src', el.getAttribute('data-src'));
	el.onload = function() {
	    el.classList.remove('preloader');
	}
}


function animateIn(element) {
	//we don't want everything animating all at once, so delay based on the number animating
	numAnimating++;
	setTimeout(function(){
  		element.classList.add('animate');
  		numAnimating--;
	},200*numAnimating);
}



// ——————————————————————————————————————————————————
// scrollmagic setup
// ——————————————————————————————————————————————————

var controller = new ScrollMagic.Controller();

var numAnimating = 0;

//slide elements need to be wrapped to work properly
let slideEls = document.getElementsByClassName('slide-in')
for (slideEl of slideEls) {
	slideEl.innerHTML = "<span>" + slideEl.innerHTML + "</span>";	
}


let fadeEls = document.querySelectorAll('.fade-up, .slide-in')
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



// ——————————————————————————————————————————————————
// fullscreen toggling for the portfolio area
// ——————————————————————————————————————————————————


let expandEls = document.getElementsByClassName('expand-link')
const fullscreenArea = document.getElementById('fullscreenArea')
const fullscreenImage = document.getElementById('fullscreenImage')
const fullscreenDescription = document.getElementById('fullscreenDescription')
for (expandEl of expandEls) {
	expandEl.onclick = function(e) {
		if (this.getElementsByClassName('portfolio-image-fullonly')[0]) {
			image = this.getElementsByClassName('portfolio-image-fullonly')[0].outerHTML		
		} else {
			image = this.getElementsByClassName('portfolio-image')[0].outerHTML		
		}
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



// ——————————————————————————————————————————————————
// window.onload
// ——————————————————————————————————————————————————




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

//open links in new window
var links = document.links;

for (var i = 0, linksLength = links.length; i < linksLength; i++) {
   if (links[i].hostname != window.location.hostname) {
       links[i].target = '_blank';
   } 
}
}