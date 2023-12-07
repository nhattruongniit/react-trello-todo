import { combineReducers } from 'redux'

// reducers
import todo from 'redux/todo.reducer'

const rootReducers = combineReducers({
  todo,
})

export default rootReducers
