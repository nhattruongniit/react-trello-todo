export default {
  lists: {
    'list-1': {
      id: 'list-1',
      title: 'card 1',
      cards: ['card-0', 'card-1'],
    },
    'list-2': {
      id: 'list-2',
      title: 'card 2',
      cards: ['card-2', 'card-3'],
    },
    'list-3': {
      id: 'list-3',
      title: 'card 3',
      cards: ['card-4', 'card-5'],
    },
    'list-4': {
      id: 'list-4',
      title: 'card 4',
      cards: ['card-6', 'card-7'],
    },
    'list-5': {
      id: 'list-5',
      title: 'card 5',
      cards: ['card-8', 'card-9'],
    },
  },
  cards: {
    'card-0': {
      id: 'card-0',
      list: 'list-1',
      text: 'learn javascriptlearn javascriptlearn javascriptlearn javascriptlearn javascriptlearn javascriptlearn javascriptlearn javascript',
    },
    'card-1': {
      id: 'card-1',
      list: 'list-1',
      text:
        'learnreactlearnreactlearnreactlearnreactlearnreactlearnreactlearnreactlearnreactlearnreactlearnreactlearnreactlearnreactlearnreactlearnreactlearnreactlearnreactlearnreactlearnreact',
    },
    'card-2': {
      id: 'card-2',
      list: 'list-2',
      text: 'learn php',
    },
    'card-3': {
      id: 'card-3',
      list: 'list-2',
      text: 'learn go',
    },
    'card-4': {
      id: 'card-4',
      list: 'list-3',
      text: 'learn php',
    },
    'card-5': {
      id: 'card-5',
      list: 'list-3',
      text: 'learn go',
    },
    'card-6': {
      id: 'card-6',
      list: 'list-4',
      text: 'learn php',
    },
    'card-7': {
      id: 'card-7',
      list: 'list-4',
      text: 'learn go',
    },
    'card-8': {
      id: 'card-8',
      list: 'list-5',
      text: 'learn php',
    },
    'card-9': {
      id: 'card-9',
      list: 'list-5',
      text: 'learn go',
    },
  },
  columns: ['list-1', 'list-2'],
};
