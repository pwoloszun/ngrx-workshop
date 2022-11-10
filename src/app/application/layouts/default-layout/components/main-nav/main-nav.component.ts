import { Component, Input } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

interface IRouteParams {
  text: string;
  url: string;
}

export interface IMainNavSection {
  title: string;
  routes: IRouteParams[];
  icon: { value: string; };
}

@Component({
  selector: 'nts-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.css'],
})
export class MainNavComponent {

  @Input() menuSections: IMainNavSection[] = [];

  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(map((result) => result.matches));

  constructor(private breakpointObserver: BreakpointObserver) { }
}
