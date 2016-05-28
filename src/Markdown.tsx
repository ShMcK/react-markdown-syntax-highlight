import * as React from 'react';
import formatMarkdown from './format-markdown';

const Markdown: React.StatelessComponent<{
  children?: string, style?: Object, className?: string
}> = ({style, children}) => (
  <span
    className={className ? className : null}
    style={style ? style : null}
    dangerouslySetInnerHTML={
      {__html: formatMarkdown(children)}
    }
  />
);
export default Markdown;
