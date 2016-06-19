import React from 'react'
import ReactDOM from 'react-dom'
import injectTapEventPlugin from 'react-tap-event-plugin';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducer from './reducers/index'
import { Router, Route, Link, hashHistory } from 'react-router'
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import createBrowserHistory from 'history/lib/createBrowserHistory';
import TeamViewContainer from './containers/TeamViewContainer.jsx'
import EditorViewContainer from './containers/EditorViewContainer.jsx'

injectTapEventPlugin();


let store = createStore(reducer)

ReactDOM.render((
  <MuiThemeProvider muiTheme={getMuiTheme()}>
    <Provider store={store}>
      <Router history={hashHistory}>
        <Route path="/" component={TeamViewContainer}>
        </Route>
        <Route path="/editor" component={EditorViewContainer} />
      </Router>
    </Provider>
  </MuiThemeProvider>
), document.getElementById('root'))
