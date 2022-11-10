interface TodoDto {
  id: number;
  title: string;
  description?: string;
}

enum TodoStatus {
  IS_EDITING = 'IS_EDITING',
  IS_SAVING = 'IS_SAVING',
  IS_REMOVING = 'IS_REMOVING',
  PERSISTED = 'PERSISTED' // default value
}

// data fetched from API
const todoDtos = [
  { id: 100, title: 'buy milk', },
  { id: 200, title: 'walk the dog', description: 'important' },
  { id: 300, title: 'do them math', },
  { id: 400, title: 'buy bread', description: 'sliced' },
  { id: 500, title: 'call Methew', },
];

// TODO: designing state shape
const todosStateSlice = {

  isLoading: false,

  // polute state
  // Persisted STATE aka Entities STATE aka Domain STATE
  todos: [
    { id: 100, title: 'buy milk', },
    { id: 200, title: 'walk the dog', description: 'important' },
    { id: 300, title: 'do them math', },
    { id: 400, title: 'buy bread', description: 'sliced' },
    { id: 500, title: 'call Methew', },
  ],

  // UI STATE aka Feature STATE aka Application STATE
  todoStatuses: {
    100: TodoStatus.PERSISTED,
    300: TodoStatus.IS_REMOVING,
    400: TodoStatus.IS_EDITING,
  },

  todosSortInfo: { sortBy: 'title', order: 'asc' },

  todosFilterQuery: 'batman',

  dndOrder: [200, 500, 100, 300, 400],

  // todosSortInfo: { sortBy: 'title', order: 'asc' },


};

// derived AKA computed state/view
const selectTodosWithStatuses = (todosStateSlice) => {
  return todosStateSlice.todos.map((t) => {
    const status = todosStateSlice.todoStatuses[t.id] || TodoStatus.PERSISTED;
    return {
      ...t,
      status,
    }
  });
};


// global app state
const state = {
  todos: todosStateSlice,


  // ...
};

export { }
