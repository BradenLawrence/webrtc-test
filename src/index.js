import React                            from 'react'
import ReactDOM                         from 'react-dom'
import { Provider }                     from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import promise                          from 'redux-promise'
import App                              from './App'
import { rootReducer }                  from './reducers'
import registerServiceWorker            from './registerServiceWorker'
import './index.css'

const createStoreWithMiddleware = applyMiddleware(promise)(createStore)

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(rootReducer)}>
        <App />
    </Provider>
    , document.getElementById('root')
)
registerServiceWorker()
