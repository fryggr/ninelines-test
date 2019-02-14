import '@babel/polyfill';
import svg4everybody from 'svg4everybody';
import $ from 'jquery';
import Foundation from 'foundation-sites';
import './vendor/odometer.min.js';

svg4everybody();

window.$ = $;
window.jQuery = $;

setTimeout(() => {
	$('.odometer').html(50);
}, 1000);

Foundation.addToJquery($);

$(document).foundation();

require('ninelines-ua-parser');
