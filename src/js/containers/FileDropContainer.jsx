import React from 'react';
import Dropzone from 'react-dropzone';


export default class FileDropContainer extends React.Component {
  render() {
    return(
    <div
    className="dropzone-content">
      <Dropzone onDrop={this.onDrop}>
        <p>Click to add, or drag and drop files here</p>
      </Dropzone>
    </div>
    )
  }
}