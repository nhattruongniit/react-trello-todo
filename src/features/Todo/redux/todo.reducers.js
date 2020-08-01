// types
import todoTypes from './todo.types';

// actions
export const addCard = () => ({
  type: todoTypes.ADD_CARD,
  payload: {},
});

export const removeCard = () => ({
  type: todoTypes.REMOVE_CARD,
  payload: {},
});

export const editTitleCard = () => ({
  type: todoTypes.EDIT_TITLE_CARD,
  payload: {},
});

// reducers
const initialState = {
  lists: {
    'list-1': {
      id: 'list-1',
      title: 'list 1',
      cards: ['card-1', 'card-2'],
    },
  },
  cards: {
    'card-1': {
      id: 'card-1',
      list: 'list-1',
      title: 'learn javascript',
    },
    'card-2': {
      id: 'card-2',
      list: 'list-1',
      title: 'learn react',
    },
  },
  columns: ['list-1'],
};

const reducers = (state = initialState, { type, payload }) => {
  switch (type) {
    case todoTypes.ADD_CARD: {
      console.log(todoTypes.ADD_CARD);
      return {
        ...state,
      };
    }
    default:
      return state;
  }
};

export default reducers;
