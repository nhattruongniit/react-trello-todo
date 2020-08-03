import { combineReducers } from 'redux';

// reducers
import todo from 'features/Todo/redux/todo.reducer';

const rootReducers = combineReducers({
  todo,
})

export default rootReducers;
