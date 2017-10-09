# David Sprankle's Portfolio
Source code for my portfolio, soon to be available at [sprankledesign.com](http://www.sprankledesign.com). This was based off of another Jekyll project of mine, [Bootstrap 4.0.0-beta portfolio](https://github.com/dsaos/jekyll-bootstrap-portfolio), which is functionally a boilerplate Jekyll template built to leverage up-to-date Bootstrap components such as [cards](https://getbootstrap.com/docs/4.0/components/card/).

## Developer Details
The focus of this portfolio--as with many of my projects--was to learn new technologies. To that end, this site was my first practical application of Jekyll, used to serve portfolio "items" by category. On the front-end, I eschewed Javascript frameworks in favor of ES6 functionality and CSS3 animations/transitions. The site itself does not include any jQuery, and has been packed to optimize its network load. Indeed, the only framework included is ScrollMagic to provide support for deferred image loading and animation.

This also marked the first project with a focus on thorough auditing through Google Chrome's developer tools. The site now scores at 56 for a progressive web app (not a focus of this portfolio), 97 for accessibility (low contrast due to my own aesthetic decisions), and 90 on performance due to a lack of included libraries and "lazyloading" of images. 

