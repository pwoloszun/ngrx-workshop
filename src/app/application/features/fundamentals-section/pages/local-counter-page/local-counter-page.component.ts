import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-local-counter-page',
  templateUrl: './local-counter-page.component.html',
})
export class LocalCounterPageComponent implements OnInit {

  value = 100;

  incrementHandler() {
    this.value += 1;
  }

  decrementHandler() {
    this.value -= 1;
  }

  ngOnInit(): void { }

}
