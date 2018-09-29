import { combineReducers } from 'redux'
import rowReducer from './rowReducer'
import colReducer from './colReducer'

const rootReducer = combineReducers({
  rows: rowReducer,
  cols: colReducer
})

export default rootReducer
