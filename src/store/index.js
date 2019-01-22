import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import planeList from './planeList/reducer'
import planeInfo from './planeInfo/reducer'

export default createStore(combineReducers({ planeList, planeInfo }), applyMiddleware(thunk))
