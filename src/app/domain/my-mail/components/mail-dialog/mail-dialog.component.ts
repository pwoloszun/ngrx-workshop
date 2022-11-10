import { Component, Output, EventEmitter, Input } from '@angular/core';

import { types } from '@domain/my-mail/state/my-mail';

const EMPTY_MAIL_PARAMS: types.MailEntityParams = {
  title: '',
  to: [''],
  from: '',
  content: '',
  createdAt: null,
  status: types.PersistedMailStatus.Draft
};

@Component({
  selector: 'app-mail-dialog',
  templateUrl: './mail-dialog.component.html',
})
export class MailDialogComponent {

  @Input() mailParams = EMPTY_MAIL_PARAMS;
  @Output() send = new EventEmitter<types.MailEntityParams>();
  @Output() close = new EventEmitter<types.MailEntityParams>();

  sendHandler() {
    this.send.emit(this.mailParams);
  }

  closeHandler() {
    this.close.emit(this.mailParams);
  }

}
