import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import list from './list/reducer'

export default createStore(combineReducers({ list }), applyMiddleware(thunk))
