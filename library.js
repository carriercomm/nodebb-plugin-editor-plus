"use strict";

var plugin = {};
plugin.parse = function(postContent, callback) {

	postContent = postContent

			//Handle line breaks inside a paragraph.
			.replace(/([^>]+)\n/g, "$1<br>")
			//Text align left
			.replace(/[^`]?<p>&lt;-((?:.|\n)*?)&lt;-<\/p>/gm,'<p class="text-left">$1</p>')
			//Text align center
			.replace(/[^`\n]?<p>-&gt;((?:.|\n)*?)&lt;-<\/p>/gm,'<p class="text-center">$1</p>')
			//Text align right
			.replace(/[^`]?<p>-&gt;((?:.|\n)*?)-&gt;<\/p>/gm,'<p class="text-right">$1</p>')
			//Text align center
			.replace(/[^`]?<p>=&gt;((?:.|\n)*?)&lt;=<\/p>/gm,'<p class="text-justify">$1</p>')
			//Underlined text.
			.replace(/[^`]?~((?:.|\n)*?)~/g, "<u>$1</u>")
            //Spoiler
            .replace(/<p>! *([\S\s]*?)<\/p>/gm, '</blockquote><blockquote class="spoiler"><p>$1</p></blockquote><blockquote>')
            .replace(/<blockquote>\s*<\/blockquote>/g, '')
            //Color
            .replace(/%\((#(?:[A-Fa-f0-9]{3}(?:[A-Fa-f0-9]{3})?)|(?:rgb\(\d{1,3},\d{1,3},\d{1,3}\))|(?:[a-z]){3,})\)\[(.+?)\]/g, '<font style="color:$1">$2</font>');
    callback(null, postContent);
};

plugin.addAdminNavigation = function(header, callback) {

	header.plugins.push({
		route: '/plugins/editor-plus',
		icon: 'fa-pencil',
		name: 'Editor Plus'
	});

	callback(null, header);
};

module.exports = plugin;

