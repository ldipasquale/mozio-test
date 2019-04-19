import React from 'react'
import { Route, Switch } from 'react-router'

import Home from './Home'
import Results from './Results'

export default class App extends React.PureComponent {
  render() {
    return (
      <Switch>
        <Route exact path="/" render={() => (<Home />)} />
        <Route render={() => (<Results />)} />
      </Switch>
    )
  }
}
