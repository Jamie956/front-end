import { combineReducers } from 'redux'
import todos from './todos'
import visibilityFilter from './visibilityFilter'

//关联多个reducer
export default combineReducers({
  todos,
  visibilityFilter
})
