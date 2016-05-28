"use strict";
var Highlights = require('highlights');
var grammars = {};
if (global.atom && atom.grammars) {
    grammars.registry = atom.grammars;
}
var highlighter = new Highlights(grammars);
function highlight(code, lang) {
    return highlighter.highlightSync({
        fileContents: code,
        scopeName: 'source.' + (lang || 'js')
    });
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = highlight;
