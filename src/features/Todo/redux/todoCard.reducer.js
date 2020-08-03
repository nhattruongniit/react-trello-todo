// types
const ADD_CARD = 'TODO/ADD_CARD';
const REMOVE_CARD = 'TODO/REMOVE_CARD';
const EDIT_TITLE_CARD = 'TODO/EDIT_TITLE_CARD';

// reducers
const initialState = {
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
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_CARD: {
      console.log('ADD_CARD');
      return {
        ...state,
      };
    }
    default:
      return state;
  }
};

export default reducer;
