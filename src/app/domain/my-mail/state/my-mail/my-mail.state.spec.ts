import { fakeAsync, tick } from '@angular/core/testing';

import { createStore } from 'src/test-utils/create-store';
import { expectStateChanges } from 'src/test-utils/expect-state-changes';

import { myMailFeatureKey, myMailReducer } from './my-mail.reducer';
import * as actions from './my-mail.actions';
import * as selectors from './my-mail.selectors';
import * as types from './my-mail.types';
import { MyMailEffects } from './my-mail.effects';

describe('MyMail actions', () => {

  it('[jest.useFakeTimers example] should perform happy path', async () => {
    const store = createFeatureStore();

    const consecutiveExpectedStages = [
      types.MailSendStage.Idle,
      types.MailSendStage.SendingCancellable,
      types.MailSendStage.SendingReversible,
      types.MailSendStage.Sent,
      types.MailSendStage.Idle,
    ];
    expectStateChanges(
      store,
      consecutiveExpectedStages,
      selectors.selectEmailSendStage
    );

    jest.useFakeTimers();

    // TODO

    jest.advanceTimersByTime(15_000);
  });

  it('[fakeAsync example] should perform happy path', fakeAsync(async () => {
    const store = createFeatureStore();

    const consecutiveExpectedStages = [
      types.MailSendStage.Idle,
      types.MailSendStage.SendingCancellable,
      types.MailSendStage.SendingReversible,
      types.MailSendStage.Sent,
      types.MailSendStage.Idle,
    ];
    expectStateChanges(
      store,
      consecutiveExpectedStages,
      selectors.selectEmailSendStage
    );

    // TODO

    tick(15_000);
  }));

});

function createFeatureStore() {
  return createStore({
    reducers: {
      [myMailFeatureKey]: myMailReducer,
    },
    effects: [
      MyMailEffects,
    ],
  });
}

function createMailEntity(): types.MailEntityParams {
  return {
    title: 'Meeting',
    to: ['recipient@qq.qq'],
    from: 'sender@ww.ww',
    content: 'Lorem ipsum...',
    createdAt: Date.now(),
    status: types.PersistedMailStatus.Sent,
  };
}
