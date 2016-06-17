import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducer from './reducers/index'
import { Router, Route, Link, hashHistory } from 'react-router'
import createBrowserHistory from 'history/lib/createBrowserHistory';
import TeamViewContainer from './containers/TeamViewContainer.jsx'
import EditorViewContainer from './containers/EditorViewContainer.jsx'


const Message = React.createClass({
  render() {
    return <h3>Message</h3>
  }
})

let store = createStore(reducer)

ReactDOM.render((
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={TeamViewContainer}>
      </Route>
      <Route path="/editor" component={EditorViewContainer} />
    </Router>
  </Provider>
), document.getElementById('root'))
