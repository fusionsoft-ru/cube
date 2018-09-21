import { combineReducers } from 'redux'
import dimensionReducer from './dimensionReducer'
import factReducer from './factReducer'

const rootReducer = combineReducers({
  dimensions: dimensionReducer,
  facts: factReducer
})

export default rootReducer
