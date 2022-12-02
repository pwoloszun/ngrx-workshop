import { NEVER, Observable } from 'rxjs';

interface Action { // events
  type: string;
  payload?: any;
  [key: string]: any;
}

// FSA - Flux Standard Action

// type = '[Source] Event',

const action2: Action = {
  type: '[CartWidget] AddProduct',
  payload: [
    { productId: 123, quantity: 2 }
  ]
}


// FSA = Flux Standard Action

class Store {
  dispatch(action: Action) { /*...*/ }
  subscribe(listenerFn: () => void) { /*...*/ }
  getState(): State { /*...*/ return {} as any }

  // ngrx
  select(): Observable<State> { return NEVER }
  pipe(): Observable<any> { return NEVER }
}


// =======
// in app:
const store = new Store();



// design state shape
type CartStateSlice = any;
type UsersStateSlice = any;
type CatalogStateSlice = any;

interface State {
  cart: CartStateSlice;
  users: UsersStateSlice;
  catalog: CartStateSlice;
}

// global app state
const state: State = {

  // 'globalCounter': {
  //   value: 100,
  //   updatedAt: 1212123123213121
  // },

  cart: { // cart state slice
    // ...
  },

  users: { // users state slice
    entities: [],
    count: 123
  },

  catalog: [ //catalog state slice
    // ...
  ],
};


// ANYWHERE in client code (our app): Component/service/etc
// create an app event (aka action)
const action: Action = {
  type: '[CartWidget] AddProduct',
  payload: [
    { productId: 123, quantity: 2 }
  ]
}
// dispatch event
store.dispatch(action);



// reducers === MANY action listeners ONLY for state management
// ALL reducers are listening on EVERY event (aka action) dispatched globally in our app
function usersReducer(state: UsersStateSlice, action: Action): State {
  const { someData } = action.payload;
  // IMPORTANT!: immutable, DEEP copy
  const nextState = {
    ...state,
    entities: [...state.entities, { id: 123 }]
  };
  return nextState;
}

function cartReducer(state: CartStateSlice, action: Action): State {
  const { someData } = action.payload;
  // IMPORTANT!: immutable, DEEP copy
  const nextState = {
    ...state,
    // ...
  };
  return nextState;
}

// some Store private impl
function rootReducer(state: State, action: Action) {
  const nextCartState = cartReducer(state.cart, action);
  const nextUsersState = usersReducer(state.users, action);

  const nextAppState = {
    ...state,
    users: nextUsersState,
    cart: nextCartState,
  };
  return nextAppState;
}



// client code - Components
// Counter component
store.subscribe(() => {
  const state = store.getState();
  //do smth modufy local cmp state
});

// // Todos component
store.subscribe(() => {
  const state = store.getState();
  //do smth
  // selectGlobCounterValue(state)
});

export { }
