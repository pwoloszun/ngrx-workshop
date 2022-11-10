import { createAction, props } from '@ngrx/store';

// example
export const GlobalCounterIncrement = createAction(
  '[GlobalCounter] Increment',
  props<{ incBy: number; timestamp: number; }>()
);


export const MyAsyncOpSuccess = createAction(
  '[GlobalCounter] Async op syccess',
  props<{ data: string[] }>()
);




