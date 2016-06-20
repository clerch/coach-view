import React from 'react';
import MarkdownEditorContainer from './MarkdownEditorContainer.jsx';
import FileDropContainer from './FileDropContainer.jsx';
import ResourceList from '../components/ResourceList.jsx'
import NavBar from '../components/NavBar.jsx'

export default class EditorViewContainer extends React.Component {
  render() {
    return(
      <div>
        <NavBar/>
        <FileDropContainer/>
        <MarkdownEditorContainer/>
      <div
      className="resourceListContainer">
        <ResourceList/>
        </div>
      </div>
    );
  }
}
