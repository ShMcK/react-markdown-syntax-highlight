"use strict";
var marked = require('marked');
var highlight_1 = require('./highlight');
var options = {
    breaks: true,
    gfm: true,
    highlight: highlight_1.default,
    tables: true,
    sanitize: true,
    smartLists: true,
};
function formatMarkdown(text) {
    return typeof text !== 'string'
        ? ''
        : marked(text.toString(), options);
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = formatMarkdown;
