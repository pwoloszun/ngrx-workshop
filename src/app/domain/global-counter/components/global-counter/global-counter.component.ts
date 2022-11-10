import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { of } from 'rxjs';

import { actions, selectors } from '../../state/global-counter';

@Component({
  selector: 'app-global-counter',
  templateUrl: './global-counter.component.html',
})
export class GlobalCounterComponent implements OnInit {

  counterValue$ = this.store.select(
    (state: any) => state.globalCounter.value
  );

  constructor(private readonly store: Store) { }

  incrementHandler() {
    const action = actions.GlobalCounterIncrement({
      incBy: 5,
    });
    this.store.dispatch(action);
  }

  ngOnInit(): void { }

}
