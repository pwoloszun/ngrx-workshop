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
};


// global app state
const state = {
  todos: todosStateSlice,

  // ...
};

export { }
