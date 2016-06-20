import React from 'react';
import MarkdownEditorContainer from './MarkdownEditorContainer.jsx';
import FileDropContainer from './FileDropContainer.jsx';
import ResourceList from '../components/ResourceList.jsx'
import NavBar from '../components/NavBar.jsx'
import AddResourceButton from '../components/AddResourceButton.jsx'
import {Tabs, Tab} from 'material-ui/Tabs';


export default class EditorViewContainer extends React.Component {
  render() {
    return(
      <div>
        <NavBar/>
        <MarkdownEditorContainer/>
        <div
          className="resourceListContainerEditor">
          <Tabs>
            <Tab label="Resources" >
              <div className="resourceListContainer">
                <ResourceList/>
                <AddResourceButton/>
              </div>
            </Tab>
            <Tab label="Upload" >
              <div className="resourceList">
                <FileDropContainer/>
              </div>
            </Tab>
          </Tabs>
        </div>
      </div>
    );
  }
}

