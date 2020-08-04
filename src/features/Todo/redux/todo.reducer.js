/* TYPES */
const ADD_LIST = 'TRELLO/ADD_LIST';
const CHANGE_TITLE_LIST = 'TRELLO/CHANGE_TITLE_LIST';
const REMOVE_LIST = 'TRELLO/REMOVE_LIST';

const ADD_CARD = 'TRELLO/ADD_CARD';
const REMOVE_CARD = 'TRELLO/REMOVE_CARD';
const EDIT_CARD = 'TRELLO/EDIT_CARD';

const DRAG_END_LIST = 'TRELLO/DRAG_END_LIST';
const DRAG_END_CARD = 'TRELLO/DRAG_END_CARD';

// actions
export const addList = (payload) => ({ type: ADD_LIST, payload });

export const changeTitleList = (listId, title) => ({
  type: CHANGE_TITLE_LIST,
  payload: { listId, title },
});

export const removeList = (listId) => ({
  type: REMOVE_LIST,
  payload: { listId },
});

export const addCard = (listId, card) => ({
  type: ADD_CARD,
  payload: {
    listId,
    card,
  },
});

export const removeCard = (listId, cardId) => ({
  type: REMOVE_CARD,
  payload: { listId, cardId },
});

export const editCard = (cardId, cardText) => ({
  type: EDIT_CARD,
  payload: { cardId, cardText },
});

export const onDragEndList = (payload) => ({ type: DRAG_END_LIST, payload });

export const onDragEndCard = (payload) => ({ type: DRAG_END_CARD, payload });

// reducers
const initialState = {
  lists: {
    'list-1': {
      id: 'list-1',
      title: 'list 1',
      cards: ['card-1-1', 'card-1-2'],
    },
    'list-2': {
      id: 'list-2',
      title: 'list 2',
      cards: ['card-2-1', 'card-2-2'],
    },
  },
  cards: {
    'card-1-1': {
      id: 'card-1-1',
      list: 'list-1',
      title: 'javascript ',
      member: ['./assets/images/avatar2.jpeg', './assets/images/avatar3.jpg'],
    },
    'card-1-2': {
      id: 'card-1-2',
      list: 'list-1',
      title: 'react',
      member: ['./assets/images/avatar.png'],
    },
    'card-2-1': {
      id: 'card-2-1',
      list: 'list-2',
      title: 'angular',
      member: ['./assets/images/avatar4.jpg', './assets/images/avatar5.jpg'],
    },
    'card-2-2': {
      id: 'card-2-2',
      list: 'list-2',
      title: 'vue',
      member: ['./assets/images/avatar6.jpg', './assets/images/avatar7.jpg'],
    },
  },
  columns: ['list-1', 'list-2'],
};

const reducers = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_LIST: {
      const { id, title, cards } = payload;
      const newLists = {
        id,
        title,
        cards,
      };

      return {
        ...state,
        columns: [...state.columns, id],
        lists: { ...state.lists, [id]: newLists },
      };
    }

    case CHANGE_TITLE_LIST: {
      const { listId, title } = payload;
      const newLists = state.lists[listId];
      newLists.title = title;

      return {
        ...state,
        lists: { ...state.lists, [listId]: newLists },
      };
    }

    case REMOVE_LIST: {
      const { listId } = payload;
      const newLists = state.lists;
      delete newLists[listId];
      const newColumns = state.columns.filter((column) => column !== listId);

      return {
        ...state,
        columns: newColumns,
        lists: newLists,
      };
    }

    case ADD_CARD: {
      const { listId, card } = payload;
      const newLists = {
        ...state.lists,
        [listId]: {
          ...state.lists[listId],
          cards: [...state.lists[listId].cards, card.id],
        },
      };

      return {
        ...state,
        lists: newLists,
        cards: { ...state.cards, [card.id]: card },
      };
    }

    case REMOVE_CARD: {
      const { listId, cardId } = payload;
      const newCards = state.cards;
      delete newCards[cardId];

      const newLists = {
        ...state.lists,
        [listId]: {
          ...state.lists[listId],
          cards: state.lists[listId].cards.filter((card) => card !== cardId),
        },
      };

      return {
        ...state,
        lists: newLists,
        cards: newCards,
      };
    }

    case EDIT_CARD: {
      const { cardId, cardText } = payload;
      const newCards = state.cards[cardId];
      newCards.title = cardText;

      return {
        ...state,
        cards: { ...state.cards, [cardId]: newCards },
      };
    }

    case DRAG_END_LIST: {
      const { destination, source } = payload;
      if (destination === null) return state;

      const newColumns = [...state.columns];
      const listSpliced = newColumns.splice(source.index, 1)[0];
      newColumns.splice(destination.index, 0, listSpliced);

      return {
        ...state,
        columns: newColumns,
      };
    }

    case DRAG_END_CARD: {
      const { destination, source } = payload;
      if (destination === null) return state;

      // in the same list
      if (source.droppableId === destination.droppableId) {
        const droppedIdStart = source.droppableId;
        const lists = state.lists[droppedIdStart];
        const newCards = [...lists.cards];
        [newCards[source.index], newCards[destination.index]] = [
          newCards[destination.index],
          newCards[source.index],
        ];

        return {
          ...state,
          lists: {
            ...state.lists,
            [droppedIdStart]: {
              ...lists,
              cards: newCards,
            },
          },
        };
      }

      // other list
      if (source.droppableId !== destination.droppableId) {
        const droppedIdStart = source.droppableId;
        const droppedIdEnd = destination.droppableId;
        const listStart = state.lists[droppedIdStart];
        const listEnd = state.lists[droppedIdEnd];
        const newCardsStart = [...listStart.cards];
        const newCardsEnd = [...listEnd.cards];

        // cut card in list start
        const cardSpliced = newCardsStart.splice(source.index, 1)[0];
        // add card spliced in list end
        newCardsEnd.splice(destination.index, 0, cardSpliced);

        return {
          ...state,
          lists: {
            ...state.lists,
            [droppedIdStart]: {
              ...listStart,
              cards: newCardsStart,
            },
            [droppedIdEnd]: {
              ...listEnd,
              cards: newCardsEnd,
            },
          },
        };
      }

      return {
        ...state,
      };
    }

    default:
      return state;
  }
};

export default reducers;
