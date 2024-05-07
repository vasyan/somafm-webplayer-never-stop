// ==UserScript==
// @name         [SomaFM] Never stop playback!
// @namespace    none
// @version      2024-05-06
// @description  SomaFM web-player stops for some reason in any browser. Fix it in a dirty way.
// @author       https://github.com/vasyan
// @match        https://somafm.com/player/*
// @grant        none
// @license MIT
// ==/UserScript==

(function() {
	'use strict';
	function debounce (func, timeout) {
		var timer;
		return function () {
			clearTimeout(timer);
			timer = setTimeout(function () {
				func.apply(this, arguments);
			}, timeout);
		}
	}

	var reloadPage = debounce(function () {
		console.log('reload')
		location.reload();
	}, 2500);


	// console.log('listen timeupdate', document.querySelector('#audioPlayer audio'), document.querySelector('#audioPlayer audio').paused);
	document.querySelector('#audioPlayer audio').addEventListener('timeupdate', function() {
		// console.log('call debounced');
		reloadPage();
	});



	console.info('SomaFM will never stop!');
})();
