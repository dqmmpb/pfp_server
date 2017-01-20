/*
   This JavaScript code was generated by Jemplate, the JavaScript
   Template Toolkit. Any changes made to this file will be lost the next
   time the templates are compiled.

   Copyright 2006-2014 - Ingy döt Net - All rights reserved.
*/

var Jemplate;
if (typeof(exports) == 'object') {
    Jemplate = require("jemplate").Jemplate;
}

if (typeof(Jemplate) == 'undefined')
    throw('Jemplate.js must be loaded before any Jemplate template files');

Jemplate.templateMap['footer.html'] = function(context) {
    if (! context) throw('Jemplate function called without context\n');
    var stash = context.stash;
    var output = '';

    try {
output += '<div>\n    footer_div.....\n</div>\n';
    }
    catch(e) {
        var error = context.set_error(e, output);
        throw(error);
    }

    return output;
}

Jemplate.templateMap['header.html'] = function(context) {
    if (! context) throw('Jemplate function called without context\n');
    var stash = context.stash;
    var output = '';

    try {
output += '<div>\n    header_div.....\n</div>\n';
    }
    catch(e) {
        var error = context.set_error(e, output);
        throw(error);
    }

    return output;
}

Jemplate.templateMap['list.html'] = function(context) {
    if (! context) throw('Jemplate function called without context\n');
    var stash = context.stash;
    var output = '';

    try {
//line 1 "list.html"
output += context.include('header.html');
output += '\n\n<ul data-id="list_';
//line 3 "list.html"
output += stash.get('name');
output += '" class="list-ul list-ul-text list-ul-text-1 margin-bottom-m margin-top-m">\n\n    ';
//line 12 "list.html"

// FOREACH 
(function() {
    var list = stash.get('datas');
    list = new Jemplate.Iterator(list);
    var retval = list.get_first();
    var value = retval[0];
    var done = retval[1];
    var oldloop;
    try { oldloop = stash.get('loop') } finally {}
    stash.set('loop', list);
    try {
        while (! done) {
            stash.data['data'] = value;
output += '\n\n    <li class="row">\n        <p class="col-4 bold pr0">';
//line 8 "list.html"
output += stash.get(['data', 0, 'key', 0]);
output += '</p>\n        <p class="col-8 pl0 pr0">';
//line 9 "list.html"
output += stash.get(['data', 0, 'component', 0]);
output += '</p>\n    </li>\n\n    ';;
            retval = list.get_next();
            value = retval[0];
            done = retval[1];
        }
    }
    catch(e) {
        throw(context.set_error(e, output));
    }
    stash.set('loop', oldloop);
})();

output += '\n\n</ul>\n\n';
//line 16 "list.html"
output += context.include('footer.html');
output += '\n';
    }
    catch(e) {
        var error = context.set_error(e, output);
        throw(error);
    }

    return output;
}
