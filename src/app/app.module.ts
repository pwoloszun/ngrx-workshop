import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EntityDataModule } from '@ngrx/data';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { environment } from 'src/environments/environment';

// import { GlobalClientErrorHandlerModule } from '@infrastructure/error-handlers';
import { GlobalErrorModule } from '@infrastructure/interceptors';
import { DefaultLayoutModule } from '@application/layouts';
import { AppRoutingModule } from '@application/routing';

import { AppComponent } from './app.component';
import { reducers, metaReducers } from './reducers';
import { AppEffects } from './app.effects';


@NgModule({
  declarations: [AppComponent],
  imports: [
    // vendor
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,

    // infrastructure
    GlobalErrorModule.forRoot(),
    // GlobalClientErrorHandlerModule.forRoot(),

    // application, routing
    AppRoutingModule,
    DefaultLayoutModule,

    // app state
    StoreModule.forRoot(reducers, {
      metaReducers,
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true,
      }
    }),
    // ngrx dev tools
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    // ngrx effects
    EffectsModule.forRoot([AppEffects]),
    // ngrx router
    StoreRouterConnectingModule.forRoot(),
    // ngrx entity data
    EntityDataModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
