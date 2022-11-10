import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromMyMail from './my-mail.reducer';

const selectMyMailState = createFeatureSelector<fromMyMail.State>(
  fromMyMail.myMailFeatureKey
);

export const selectEmailSendStage = createSelector(
  [selectMyMailState],
  (state) => state.mailSendStage
);

export const selectIsMailOpened = createSelector(
  [selectMyMailState],
  (state) => state.isMailOpened
);
