import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { map, of } from 'rxjs';

import { actions, selectors } from '../../state/global-counter';

@Component({
  selector: 'app-global-counter',
  templateUrl: './global-counter.component.html',
})
export class GlobalCounterComponent implements OnInit {

  counterValue$ = this.store.select(
    selectors.selectGlobalCounterValue
  );

  counerUpdatedAt$ = this.store.select(
    selectors.selectGlobalCounterFormattedUpdatedAt
  );

  // parametrized selectors
  plUpdatedAt$ = this.store.select(
    selectors.selectCalculateFormattedUpdatedAt
  ).pipe(
    map((calculateFormattedUpdatedAt) => calculateFormattedUpdatedAt('PL'))
  );

  engUpdatedAt$ = this.store.select(
    selectors.selectCalculateFormattedUpdatedAt
  ).pipe(
    map((calculateFormattedUpdatedAt) => calculateFormattedUpdatedAt('EN'))
  );

  constructor(private readonly store: Store) { }

  incrementHandler() {
    const action = actions.GlobalCounterIncrement({
      incBy: 2,
      timestamp: Date.now(),
    });
    this.store.dispatch(action);
  }

  ngOnInit(): void { }

}
