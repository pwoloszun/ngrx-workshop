import { Component } from '@angular/core';

import { mainMenuSections } from '@application/routing/route-sections';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {

  mainMenuSections = mainMenuSections;

}
