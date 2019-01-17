import { createStore, combineReducers } from 'redux'
import list from './list/reducer'

export default createStore(combineReducers({ list }))
