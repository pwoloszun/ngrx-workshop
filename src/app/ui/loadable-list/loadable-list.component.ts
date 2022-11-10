import { Component, ContentChild, Input, OnInit, TemplateRef, TrackByFunction } from '@angular/core';
import { Observable, of } from 'rxjs';

interface TmplContext<T> {
  item: T;
  $implicit: T;
}

@Component({
  selector: 'app-loadable-list',
  templateUrl: './loadable-list.component.html'
})
export class LoadableListComponent<T> implements OnInit {

  @ContentChild(TemplateRef)
  renderListItemTmpl!: TemplateRef<TmplContext<T>>;

  @Input()
  items$: Observable<T[]> = of([]);

  @Input()
  loading$ = of(true);

  @Input()
  error$: Observable<Error | null> = of(null);

  @Input()
  trackByFn = (index: number, item: any) => item;

  ngOnInit(): void { }

}
