// ==UserScript==
// @name		DNA 9GAG Plus
// @namespace	DNA 9GAG Plus
// @version		2.1
// @author		Last Roze
// @description	Dominion With Domination
// @copyright	©2020 - Yoga Budiman
// @homepage	https://github.com/LastRoze/
// @homepageURL	https://github.com/LastRoze/
// @website		https://lastroze.github.io/
// @source		https://github.com/LastRoze/9GAG-Plus
// @icon		https://github.com/LastRoze/9GAG-Plus/blob/master/DNA.jpg?raw=true
// @iconURL		https://github.com/LastRoze/9GAG-Plus/blob/master/DNA.jpg?raw=true
// @defaulticon	https://github.com/LastRoze/9GAG-Plus/blob/master/DNA.jpg?raw=true
// @icon64		https://github.com/LastRoze/9GAG-Plus/blob/master/DNA.jpg?raw=true
// @icon64URL	https://github.com/LastRoze/9GAG-Plus/blob/master/DNA.jpg?raw=true
// @updateURL	https://github.com/LastRoze/9GAG-Plus/raw/master/9GAG-Plus.meta.js
// @downloadURL	https://github.com/LastRoze/9GAG-Plus/raw/master/9GAG-Plus.user.js
// @supportURL	https://lastroze.github.io/
// @require		https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js
// @match		*://*.9gag.com/*
// @run-at		document-start
// @grant		none
// ==/UserScript==

document.addEventListener("scroll", function() {
	$('.off.sound-toggle').remove();
	$('.length').remove();
	$('.play').remove();
	var DNA = document.getElementsByTagName('video');
	for( var i = 0; i <= DNA.length; i++ ){
		var eDNA = DNA.item(i);
		eDNA.setAttribute("controls", "");
		eDNA.volume = 1;
	}
})();
