(function() { 
	var selector, elems, makeActive;

	selector = '.btn';

	elems = document.querySelectorAll(selector);

	makeActive = function () {
			for (var i = 0; i < elems.length; i++)
					elems[i].classList.remove('active');

			this.classList.add('active');
	};

	for (var i = 0; i < elems.length; i++)
			elems[i].addEventListener('mousedown', makeActive);
})()


function changeQueueHeight(event) {
	var videoHeight = document.querySelector('.video-detail').offsetHeight;
	var windowHeight = window.innerHeight;
	var videoList = document.querySelector('.queue-container');

	var videoListInner = document.querySelector('.queue-list');
	var changes = 
		"height: " + (windowHeight - videoHeight -108) + "px;" + 
		"max-height: " + (windowHeight - videoHeight -108) + "px;";
		
	videoList.setAttribute("style", changes);
	videoListInner.setAttribute("style", changes);
};
changeQueueHeight();
window.onresize = changeQueueHeight;
window.onclick =  changeQueueHeight;
