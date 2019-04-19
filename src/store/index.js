import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import { createBrowserHistory } from 'history'
import { connectRouter, routerMiddleware } from 'connected-react-router'
import thunk from 'redux-thunk'

import tree from './tree'

export const history = createBrowserHistory()

export default createStore(
  combineReducers({
    router: connectRouter(history),
    ...tree,
  }),
  compose(
    applyMiddleware(
      routerMiddleware(history),
      thunk,
    ),
  ),
)
