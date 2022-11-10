import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatSnackBar, MatSnackBarRef, TextOnlySnackBar } from '@angular/material/snack-bar';
import { Store } from '@ngrx/store';

import { SubscriptionContainer } from '@utils/subscription-container';
import { of } from 'rxjs';

import { selectors, actions, types } from '../../state/my-mail';

@Component({
  selector: 'app-my-mail-info-toast',
  templateUrl: './my-mail-info-toast.component.html',
})
export class MyMailInfoToastComponent implements OnInit, OnDestroy {

  // TODO
  private emailSendStage$ = of(types.MailSendStage.SendingCancellable);

  private snackBarRef: MatSnackBarRef<TextOnlySnackBar> | null = null;
  private subs = new SubscriptionContainer();

  constructor(
    private store: Store,
    private matSnackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.subs.add = this.emailSendStage$.subscribe(this.emailStageChangeHandler);
  }

  ngOnDestroy(): void {
    this.subs.dispose();
  }

  private emailStageChangeHandler = (stage: types.MailSendStage) => {
    switch (stage) {
      case types.MailSendStage.SendingCancellable: {
        this.showCanCancelMessage();
        return;
      }
      case types.MailSendStage.SendingReversible: {
        this.showCanRevertMessage();
        return;
      }
      case types.MailSendStage.Sent: {
        this.showSuccessfullySentMessage();
        return;
      }
      case types.MailSendStage.Idle: {
        this.closeSnackBar();
        return;
      }
      case types.MailSendStage.SendingCancelled: {
        this.showCancellingMessage();
        return;
      }
      case types.MailSendStage.SendingReverted: {
        this.showRevertingMessage();
        return;
      }
      default: {
        throw new Error(`Unknown types.MailSendStage: ${stage}`);
      }
    }
  };

  private showCanCancelMessage() {
    this.snackBarRef = this.matSnackBar.open('Sending...', 'Cancel');
    this.subs.add = this.snackBarRef!.onAction().subscribe(() => {
      // TODO: event
    });
  }

  private showCanRevertMessage() {
    this.snackBarRef = this.matSnackBar.open('Mail has been sent.', 'Revert');
    this.subs.add = this.snackBarRef!.onAction().subscribe(() => {
      // TODO: event
    });
  }

  private showSuccessfullySentMessage() {
    this.snackBarRef = this.matSnackBar.open('Mail successfully sent!');
  }

  private closeSnackBar() {
    this.snackBarRef?.dismiss();
  }

  private showCancellingMessage() {
    this.snackBarRef = this.matSnackBar.open('Canceling...', 'Resume');
    this.subs.add = this.snackBarRef!.onAction().subscribe(() => {
      // TODO: event
    });
  }

  private showRevertingMessage() {
    this.snackBarRef = this.matSnackBar.open('Reverting changes...');
  }

}
