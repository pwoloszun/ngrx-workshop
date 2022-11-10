import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { distinctUntilChanged } from 'rxjs/operators';

import { SubscriptionContainer } from '@utils/subscription-container';

import { MailDialogComponent } from '../mail-dialog/mail-dialog.component';
import { actions, selectors, types } from '../../state/my-mail';

@Component({
  selector: 'app-create-my-mail-modal',
  templateUrl: './create-my-mail-modal.component.html',
})
export class CreateMyMailModalComponent implements OnInit {

  private isMailOpened$ = this.store.select(selectors.selectIsMailOpened);

  private dialogStatus$ = this.isMailOpened$.pipe(
    distinctUntilChanged()
  );

  private dialogRef: MatDialogRef<MailDialogComponent> | null = null;

  private subs = new SubscriptionContainer();

  get mailEntity(): types.MailEntityParams { // TODO
    return {
      title: 'Meeting',
      to: ['recipient@qq.qq'],
      from: 'sender@ww.ww',
      content: 'Lorem ipsum...',
      createdAt: Date.now(),
      status: types.PersistedMailStatus.Sent
    };
  }

  constructor(
    private store: Store,
    private dialogService: MatDialog
  ) { }

  createMailHandler() {
    const action = actions.MyMailDialogOpen({ mailParams: this.mailEntity });
    this.store.dispatch(action);
  }

  ngOnInit(): void {
    this.subs.add = this.dialogStatus$.subscribe(this.dialogStatusChangeHandler);
  }

  ngOnDestroy(): void {
    this.subs.dispose();
  }

  private dialogStatusChangeHandler = (isOpened: boolean) => {
    if (isOpened) {
      this.openDialog();
    } else {
      this.closeDialog();
    }
  };

  private sendHandler = (mailParams: types.MailEntityParams) => {
    // TODO event
  };

  private closeHandler = () => {
    // TODO event
  };

  private openDialog() {
    this.closeDialog();

    this.dialogRef = this.dialogService.open(MailDialogComponent, {
      data: { mailParams: this.mailEntity },
      width: '66%',
      disableClose: true,
    });

    const { componentInstance } = this.dialogRef;
    this.subs.add = componentInstance.send.subscribe(this.sendHandler);
    this.subs.add = componentInstance.close.subscribe(this.closeHandler);
  }

  private closeDialog() {
    this.dialogRef?.close();
  }

}
