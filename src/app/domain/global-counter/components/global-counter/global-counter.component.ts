import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';

import { actions, selectors } from '../../state/global-counter';

@Component({
  selector: 'app-global-counter',
  templateUrl: './global-counter.component.html',
})
export class GlobalCounterComponent implements OnInit {

  // TODO: read current state
  counterValue$ = of(123456);

  constructor(private readonly store: Store) { }

  incrementHandler() {
    // TODO: dispatch app event
  }

  ngOnInit(): void { }

}
