window.onload = init;

function init() {
	var selector = 'ul.sidebar li', i, elems, makeActive;

	elems = document.querySelectorAll(selector);

	makeActive = function () {
	  for (i = 0; i < elems.length; i++)
	      elems[i].classList.remove('active');

	  this.classList.add('active');
	};

	for (i = 0; i < elems.length; i++)
	  elems[i].addEventListener('mousedown', makeActive);
}