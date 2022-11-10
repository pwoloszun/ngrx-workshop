import { createAction, props } from '@ngrx/store';

// example
export const CartWidgetAddProduct = createAction(
  '[CartWidget] AddProduct', // `[Source] Event`
  props<{ productInfo: { id: 123, quantity: 2 } }>()
);

export const GlobalCounterIncrement = createAction(
  '[GlobalCounter] Increment',
  props<{ incBy: number; }>()
);




