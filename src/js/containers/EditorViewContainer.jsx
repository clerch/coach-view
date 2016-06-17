import React from 'react';
import MarkdownEditorContainer from './MarkdownEditorContainer.jsx';
import FileDropContainer from './FileDropContainer.jsx';

export default class EditorViewContainer extends React.Component {
  render() {
    return(
      <div>
        <MarkdownEditorContainer/>
        <FileDropContainer/>
      </div>
    );
  }
}
