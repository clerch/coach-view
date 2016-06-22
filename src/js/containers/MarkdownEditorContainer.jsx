import React from 'react';
import MarkdownEditor from 'react-markdown-editor';

export default class MarkdownEditorContainer extends React.Component {
  render() {
    return(
      <div
      className="md-editor-textarea">
      <MarkdownEditor.MarkdownEditor
        initialContent={this.props.resource ? this.props.resource.content : ''}
        iconsSet="font-awesome"
        onContentChange={(content) => {this.props.setCurrentResource(content,null,null)}}
      />
      </div>
    )
  }
}
