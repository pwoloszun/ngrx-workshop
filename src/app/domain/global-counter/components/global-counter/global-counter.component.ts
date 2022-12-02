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

  constructor(private readonly store: Store) { }

  incrementHandler() {
    const action = actions.GlobalCounterIncrement({
      incBy: 20
    });
    this.store.dispatch(action);
  }

  ngOnInit(): void { }

}
