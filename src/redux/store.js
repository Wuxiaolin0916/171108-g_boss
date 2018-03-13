import {createStore,applyMiddleware} from 'redux'
import trunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import reducers from './reducers'





export default createStore(reducers,composeWithDevTools(applyMiddleware(trunk)))