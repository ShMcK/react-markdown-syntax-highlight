"use strict";
var React = require('react');
var format_markdown_1 = require('./format-markdown');
var Markdown = function (_a) {
    var style = _a.style, children = _a.children;
    return (React.createElement("span", {className: className ? className : null, style: style ? style : null, dangerouslySetInnerHTML: { __html: format_markdown_1.default(children) }}));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Markdown;
