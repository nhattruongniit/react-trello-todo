import { createSelector } from 'reselect';

export const getColumns = createSelector(
  (state) => state.todo,
  (todo) => todo.columns,
);

export const getLists = createSelector(
  (state) => state.todo,
  (todo) => todo.lists,
);

export const getCards = createSelector(
  (state) => state.todo,
  (todo) => todo.cards,
);
