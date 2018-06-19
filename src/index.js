import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import rootReducer from './reducers'
import ReduxThunk from "redux-thunk";
import 'tachyons'
import {logger} from 'redux-logger'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import registerServiceWorker from './registerServiceWorker'

const store = createStore(rootReducer, applyMiddleware(ReduxThunk, logger))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
registerServiceWorker()
