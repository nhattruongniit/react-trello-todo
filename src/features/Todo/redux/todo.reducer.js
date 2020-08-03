// types
const ADD_LIST = 'TODO/ADD_LIST';
const REMOVE_LIST = 'TODO/REMOVE_LIST';
const EDIT_TITLE_LIST = 'TODO/EDIT_TITLE_LIST';

// actions
export const addList = (newList) => ({ type: ADD_LIST, payload: { newList } });

// reducers
const initialState = {
  lists: {
    'list-1': {
      id: 'list-1',
      title: 'list 1',
      cards: ['card-1', 'card-2'],
    },
  },
  columns: ['list-1'],
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_LIST: {
      console.log('ADD_LIST', payload);
      const { id } = payload.newList;
      return {
        ...state,
        lists: { ...state.lists, [id]: payload.newList },
        columns: [...state.columns, id],
      };
    }
    default:
      return state;
  }
};

export default reducer;
