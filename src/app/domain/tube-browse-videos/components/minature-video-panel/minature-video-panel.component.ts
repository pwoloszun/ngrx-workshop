import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { BehaviorSubject, combineLatest, map } from 'rxjs';

import { userVideoActivitiesAggregate } from '../../state';

@Component({
  selector: 'app-minature-video-panel',
  templateUrl: './minature-video-panel.component.html',
})
export class MinatureVideoPanelComponent implements OnInit {

  private isAnyVideoActive$ = this.store.select(
    userVideoActivitiesAggregate.selectIsAnyVideoActive
  );

  private isOpen$ = new BehaviorSubject(true);

  isPanelVisible$ = combineLatest([
    this.isOpen$,
    this.isAnyVideoActive$
  ]).pipe(
    map(([isOpen, isAnyVideoActive]) => isOpen && isAnyVideoActive)
  );

  constructor(private store: Store) { }

  ngOnInit(): void { }

  closeHandler() {
    this.isOpen$.next(false);
  }

}
