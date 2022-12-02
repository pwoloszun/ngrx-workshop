import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { actions, selectors } from '../../state/global-counter';

@Component({
  selector: 'app-global-counter',
  templateUrl: './global-counter.component.html',
})
export class GlobalCounterComponent implements OnInit {

  counterValue$ = this.store.select(
    selectors.selectGlobalCounterValue
  );

  // TODO 1: updatedAt$

  constructor(private readonly store: Store) { }

  incrementHandler() {
    const action = actions.GlobalCounterIncrement({
      incBy: 20
    });
    this.store.dispatch(action);
  }

  decrementHandler() {
    // TODO 2
    const timestamp = Date.now();
  }

  ngOnInit(): void { }

}
