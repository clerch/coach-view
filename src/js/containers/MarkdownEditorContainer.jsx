import React from 'react';
import MarkdownEditor from 'react-markdown-editor';
import FontAwesome from 'react-fontawesome';

export default class MarkdownEditorContainer extends React.Component {
  render() {
    return(
      <div 
      className="md-editor-textarea">
      <MarkdownEditor.MarkdownEditor
        initialContent="Type here..."
        iconsSet="font-awesome"
      />
      </div>
    )
  }
}
