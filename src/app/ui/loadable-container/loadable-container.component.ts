import { Component, ContentChild, Input, OnChanges, OnInit, SimpleChanges, TemplateRef } from '@angular/core';
import { combineLatest, NEVER, Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

enum LoadableStatus {
  Error = 'Error',
  Loading = 'Loading',
  Render = 'Render'
}

interface TmplContext<T> {
  data: T;
  $implicit: T;
}

@Component({
  selector: 'app-loadable-container',
  templateUrl: './loadable-container.component.html'
})
export class LoadableContainerComponent<T> implements OnInit, OnChanges {

  @ContentChild(TemplateRef)
  renderDataTemplate!: TemplateRef<TmplContext<T>>;

  @Input()
  data$: Observable<T> = NEVER;

  @Input()
  loading$ = of(true);

  @Input()
  error$: Observable<Error | null> = of(null);

  errMessage$!: Observable<string>;
  status$!: Observable<LoadableStatus>;

  allStatuses = {
    error: LoadableStatus.Error,
    loading: LoadableStatus.Loading,
    render: LoadableStatus.Render,
  };

  ngOnInit(): void {
    this.initStatus();
    this.initErrMsg();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['error$']) {
      this.initErrMsg();
    }
    if (changes['error$'] || changes['loading$']) {
      this.initStatus();
    }
  }

  private initStatus() {
    this.status$ = combineLatest([this.error$, this.loading$]).pipe(
      map(([error, isLoading]) => {
        if (error !== null) {
          return LoadableStatus.Error;
        } else if (isLoading) {
          return LoadableStatus.Loading;
        } else {
          return LoadableStatus.Render;
        }
      })
    );
  }

  private initErrMsg() {
    this.errMessage$ = this.error$.pipe(
      map((err) => {
        if (err === null) {
          return '';
        } else {
          return err.message;
        }
      })
    );
  }

}
