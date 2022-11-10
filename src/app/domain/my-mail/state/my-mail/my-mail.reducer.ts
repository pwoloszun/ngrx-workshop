import { createReducer, on } from '@ngrx/store';
import produce from 'immer';

import * as actions from './my-mail.actions';
import { MailEntityParams, MailSendStage } from './my-mail.types';

export const myMailFeatureKey = 'myMail';

export interface State {
  mailSendStage: MailSendStage;
  toSend: MailEntityParams | null;
  isMailOpened: boolean;
}

const initialState: State = {
  mailSendStage: MailSendStage.Idle,
  isMailOpened: false,
  toSend: null,
};

export const myMailReducer = createReducer(
  initialState,


  on(actions.MyMailDialogOpen, (state, action) => {
    const { mailParams } = action;
    const nextState = produce(state, (draft) => {
      draft.isMailOpened = true;
      draft.toSend = mailParams;
    });
    return nextState;
  }),

  on(actions.MyMailDialogClose, (state) => {
    const nextState = produce(state, (draft) => {
      draft.isMailOpened = false;
    });
    return nextState;
  }),

  // listen to & handle event(s)
  // TODO


);
