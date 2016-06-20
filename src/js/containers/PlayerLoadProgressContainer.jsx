import React from 'react';
import LinearProgress from 'material-ui/LinearProgress';

export default class PlayerLoadProgressContainer extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      completed: 0,
      style: {height: "5px"}
    };
  }

  componentDidMount() {
    this.timer = setTimeout(() => this.progress(5), 200);
  }

  componentWillUnmount() {
    clearTimeout(this.timer);
  }

  progress(completed) {
    if (completed > 100) {
      this.setState({completed: 100});
      this.setState({style: {height: "0px", transition:"height 0.3s", transitionDelay:"1s"}})
    } else {
      this.setState({completed});
      const diff = Math.random() * 10;
      this.timer = setTimeout(() => this.progress(completed + diff), 200);
    }
  }

  render() {
    return (
      <LinearProgress mode="determinate" value={this.state.completed} style={this.state.style}/>
    );
  }
}
