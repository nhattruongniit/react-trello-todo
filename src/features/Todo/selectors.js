import { createSelector } from 'reselect';

export const getColumns = createSelector(
  (state) => state.todos.task,
  (task) => task.columns,
);

export const getLists = createSelector(
  (state) => state.todos.task,
  (task) => task.lists,
);

export const getCards = createSelector(
  (state) => state.todos,
  (todos) => todos.card,
);
