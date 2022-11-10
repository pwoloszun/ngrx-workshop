import { createAction, props } from '@ngrx/store';

import { MailEntityParams } from './my-mail.types';

export const MyMailDialogOpen = createAction(
  '[Create MyMail Button] Open Dialog',
  props<{ mailParams: MailEntityParams; }>()
);

export const MyMailDialogClose = createAction(
  '[MyMail Dialog] Close Dialog',
);

// TODO: identify & impl events
