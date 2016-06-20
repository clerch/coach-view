import React from 'react';
import MarkdownEditor from 'react-markdown-editor';
import RaisedButton from 'material-ui/RaisedButton';

const style = {
  margin: 12,
};


export default class MarkdownEditorContainer extends React.Component {
  render() {
    return(
      <div
      className="md-editor-textarea">
      <MarkdownEditor.MarkdownEditor
        initialContent="Type here..."
        iconsSet="font-awesome"
      />
        <div className="markdown-buttons">
          <RaisedButton label="Save" primary={true} style={style} />
          <RaisedButton label="Delete" secondary={true} style={style} />
        </div>
      </div>
    )
  }
}
