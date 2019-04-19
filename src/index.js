import React from 'react'
import ReactDOM from 'react-dom'

import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'

import Pages from 'pages'
import store, { history } from 'store'

import 'stylesheets/vendor/sanitize.css'
import 'stylesheets/vendor/reset.css'
import 'stylesheets/global.sass'

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Pages />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root'),
)
