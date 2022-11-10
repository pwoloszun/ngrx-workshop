import { Component, ContentChild, Input, OnInit, TemplateRef, TrackByFunction } from '@angular/core';

interface TmplContext<T> {
  item: T;
  $implicit: T;
}

@Component({
  selector: 'app-flexible-list',
  templateUrl: './flexible-list.component.html',
})
export class FlexibleListComponent<T> implements OnInit {

  @Input()
  items: T[] | null = [];

  @Input()
  trackByFn: TrackByFunction<T> = (index, item) => item;

  @ContentChild(TemplateRef)
  template!: TemplateRef<TmplContext<T>>;

  ngOnInit(): void { }



}
