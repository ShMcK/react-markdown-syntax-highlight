# React Markdown Syntax Highlight

React component for markdown blocks with syntax highlighting.

## Example

```js
import * as React from 'react';
import Markdown from 'react-markdown-syntax-highlight';

class SomeComponent extends React.Component{
  render() {
    return (
      <div>
        <Markdown># Renders Markdown
        `const a = 1;`
        `function b() { return a; }`
        </Markdown>
      </div>
    );
  }
}
```
