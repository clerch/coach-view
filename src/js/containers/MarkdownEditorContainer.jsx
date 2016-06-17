import React from 'react';
import MarkdownEditor from 'react-markdown-editor';

export default class MarkdownEditorContainer extends React.Component {
  render() {
    return(
      <div class="markdown-editor">
      <MarkdownEditor.MarkdownEditor
        initialContent="Type here..."
        iconsSet= "font-awesome"
      />
      </div>
    )
  }
}
