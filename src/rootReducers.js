import { combineReducers } from 'redux';

// reducers
import todo from 'features/Todo/redux/todo.reducer';
import todoCard from 'features/Todo/redux/todoCard.reducer';
const todoReducer = combineReducers({
  task: todo,
  card: todoCard,
});

const rootReducers = combineReducers({
  todos: todoReducer,
});

export default rootReducers;
