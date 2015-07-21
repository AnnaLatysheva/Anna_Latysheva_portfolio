/* To avoid CSS expressions while still supporting IE 7 and IE 6, use this script */
/* The script tag referencing this file must be placed before the ending body tag. */

/* Use conditional comments in order to target IE 7 and older:
	<!--[if lt IE 8]><!-->
	<script src="ie7/ie7.js"></script>
	<!--<![endif]-->
*/

(function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'icomoon\'">' + entity + '</span>' + html;
	}
	var icons = {
		'icon-close': '&#xe60a;',
		'icon-caret-square-o-down': '&#xe60b;',
		'icon-edit': '&#xf044;',
		'icon-pencil-square-o': '&#xf044;',
		'icon-paper-plane-o': '&#xf1d9;',
		'icon-send-o': '&#xf1d9;',
		'icon-photo': '&#xe604;',
		'icon-adjustments': '&#xe01d;',
		'icon-linegraph': '&#xe039;',
		'icon-reload': '&#xe605;',
		'icon-power': '&#xe086;',
		'icon-cog': '&#xe023;',
		'icon-heart': '&#xe024;',
		'icon-circle-plus': '&#xe040;',
		'icon-circle-check': '&#xe042;',
		'icon-briefcase': '&#xe075;',
		'icon-infinity': '&#xe608;',
		'icon-book': '&#xe606;',
		'icon-user-tie': '&#xe607;',
		'icon-meter': '&#xe602;',
		'icon-search': '&#xe609;',
		'icon-windows': '&#xe603;',
		'icon-user': '&#xe600;',
		'icon-comment': '&#xe601;',
		'icon-primitive-square': '&#xf053;',
		'0': 0
		},
		els = document.getElementsByTagName('*'),
		i, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		c = el.className;
		c = c.match(/icon-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
}());
