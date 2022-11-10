import { createAction, props } from '@ngrx/store';

// example
export const GlobalCounterIncrement = createAction(
  '[GlobalCounter] Increment',
  props<{ incBy: number; timestamp: number; }>()
);




