import React from 'react';
import { connect } from 'react-redux'
import MarkdownEditor from 'react-markdown-editor';

class MarkdownEditorContainer extends React.Component {
  render() {
    return(
      <div
      className="md-editor-textarea">
      <MarkdownEditor.MarkdownEditor
        initialContent={this.props.initialContent}
        resourceId={this.props.resourceId}
        iconsSet="font-awesome"
      />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    initialContent: state.team.currentResource ? state.team.currentResource.content : '',
    resourceId: state.team.currentResource ? state.team.currentResource.id : null

  }
}

export default connect(
  mapStateToProps
)(MarkdownEditorContainer)
