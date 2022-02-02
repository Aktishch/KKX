$('[data-fancybox]').fancybox({
    animationEffect: "slide",
    loop: true,
    buttons: [
        "zoom",
        "slideShow",
        "thumbs",
        "close"
    ]
});

jQuery.fancybox.defaults.backFocus = false;
jQuery.fancybox.defaults.ajaxTpl = '<button class="fancybox-custom-modal container-block fancybox-container" role="dialog" tabindex="-1">' +
	'<div class="fancybox-bg"></div>' +
	'<div class="fancybox-infobar"><span data-fancybox-index></span>&nbsp;/&nbsp;<span data-fancybox-count></span></div>' +
	'<div class="fancybox-toolbar">{{buttons}}</div>' +
	'<div class="fancybox-navigation">{{arrows}}</div>' +
	'<div class="fancybox-custom-inner"><div class="fancybox-stage"></div></div>' +
	'<div class="fancybox-caption"><div class=""fancybox-caption__body"></div></div>' +
	'</button>';