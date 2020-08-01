import { combineReducers } from 'redux';

// reducers
import todo from 'features/Todo/redux/todo.reducers';

const rootReducers = combineReducers({
  todo,
});

export default rootReducers;
