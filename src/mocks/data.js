export const mockData = {
  lists: {
    'list-1': {
      id: 'list-1',
      title: 'Todo',
      cards: [
        'card-1-1',
        'card-1-2',
        'card-1-3',
        'card-1-4',
        'card-1-5',
        'card-1-6',
        'card-1-7',
        'card-1-8',
        'card-1-9',
        'card-1-10',
      ],
    },
    'list-2': {
      id: 'list-2',
      title: 'In process',
      cards: ['card-2-1', 'card-2-2'],
    },
    'list-3': {
      id: 'list-3',
      title: 'Review',
      cards: [],
    },
    'list-4': {
      id: 'list-4',
      title: 'Done',
      cards: [],
    },
  },
  cards: {
    'card-1-1': {
      id: 'card-1-1',
      list: 'list-1',
      title: 'javascript',
    },
    'card-1-2': {
      id: 'card-1-2',
      list: 'list-1',
      title: 'react',
    },
    'card-1-3': {
      id: 'card-1-3',
      list: 'list-1',
      title: 'react advance',
    },
    'card-1-4': {
      id: 'card-1-4',
      list: 'list-1',
      title: 'redux',
    },
    'card-1-5': {
      id: 'card-1-5',
      list: 'list-1',
      title: 'thunk',
    },
    'card-1-6': {
      id: 'card-1-6',
      list: 'list-1',
      title: 'saga',
    },
    'card-1-7': {
      id: 'card-1-7',
      list: 'list-1',
      title: 'backbone',
    },
    'card-1-8': {
      id: 'card-1-8',
      list: 'list-1',
      title: 'ember',
    },
    'card-1-9': {
      id: 'card-1-9',
      list: 'list-1',
      title: 'refine',
    },
    'card-1-10': {
      id: 'card-1-10',
      list: 'list-1',
      title: 'lighthouse',
    },
    'card-2-1': {
      id: 'card-2-1',
      list: 'list-2',
      title: 'angular',
    },
    'card-2-2': {
      id: 'card-2-2',
      list: 'list-2',
      title: 'vue',
    },
  },
  columns: ['list-1', 'list-2', 'list-3', 'list-4'],
}
