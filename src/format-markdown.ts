import * as marked from 'marked';
import highlight from './highlight';

const options = {
  breaks: true,
  gfm: true,
  highlight,
  tables: true,
  sanitize: true,
  smartLists: true,
};

export default function formatMarkdown(text: string): string {
  return typeof text !== 'string'
    ? ''
    : marked(text.toString(), options);
}
