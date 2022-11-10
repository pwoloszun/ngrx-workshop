import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { MatDialog } from '@angular/material/dialog';

import { CustomMaterialModule } from '@ui/custom-material';

import { myMailFeatureKey, myMailReducer } from './state/my-mail/my-mail.reducer';
import { MyMailEffects } from './state/my-mail/my-mail.effects';
import { MyMailListComponent } from './components/my-mail-list/my-mail-list.component';
import { CreateMyMailModalComponent } from './components/create-my-mail-modal/create-my-mail-modal.component';
import { MyMailInfoToastComponent } from './components/my-mail-info-toast/my-mail-info-toast.component';
import { MailDialogComponent } from './components/mail-dialog/mail-dialog.component';

const PRIV_DECLARABLES = [
  MailDialogComponent,
];

const PUB_DECLARABLES = [
  MyMailListComponent,
  CreateMyMailModalComponent,
  MyMailInfoToastComponent,
];

@NgModule({
  declarations: [
    ...PRIV_DECLARABLES,
    ...PUB_DECLARABLES,
  ],
  exports: [
    ...PUB_DECLARABLES,
  ],
  imports: [
    CommonModule,
    // ui
    CustomMaterialModule,
    // state + effects
    StoreModule.forFeature(myMailFeatureKey, myMailReducer),
    EffectsModule.forFeature([MyMailEffects]),
  ],
  providers: [
    MatDialog
  ],
  entryComponents: [
    MailDialogComponent
  ]
})
export class MyMailModule { }
