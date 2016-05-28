import * as Highlights from 'highlights';

let grammars = {};
if (atom && atom.grammars) {
  grammars.registry = atom.grammars;
}
const highlighter = new Highlights(grammars);

export default function highlight(code: string, lang: string) {
  return highlighter.highlightSync({
    fileContents: code,
    scopeName: 'source.' + (lang || 'js')
  });
}
