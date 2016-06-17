import React from 'react';
import Dropzone from 'react-dropzone';


export default class FileDropContainer extends React.Component {
  render() {
    return(
    <div>
      <Dropzone onDrop={this.onDrop}>
        <div>Try dropping some files here, or click to select files to upload.</div>
      </Dropzone>
    </div>
    )
  }
}