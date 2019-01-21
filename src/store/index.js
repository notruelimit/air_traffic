import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import planeList from './planeList/reducer'

export default createStore(combineReducers({ planeList }), applyMiddleware(thunk))
