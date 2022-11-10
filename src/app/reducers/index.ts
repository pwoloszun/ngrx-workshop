import {
  Store,
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from 'src/environments/environment';

export interface State { }
export type AppStore = Store<State>;

export type AppActionReducerMap = ActionReducerMap<State>;
export const reducers: AppActionReducerMap = {};

export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
