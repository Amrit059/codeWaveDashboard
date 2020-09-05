import { LOCALE_ID, NgModule, Inject, PLATFORM_ID, APP_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
// import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
// import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { PLATFORM_ID, APP_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatNativeDateModule } from '@angular/material/core';
import { CoreModule } from './core/core.module';
import { AppRouterModule } from './app-router.module';
import { CoreService } from './services/core.service';
import { LocalStorageService } from './services/local-storage.service';
import { SharedModule } from './utill/shared/shared.module';


@NgModule({
  imports: [
    BrowserModule.withServerTransition({ appId: 'CODE WAVE DASHBOARD' }),
    FormsModule,
    AppRouterModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatNativeDateModule,
    SharedModule,
    CoreModule
  ],
  declarations: [
    AppComponent,
  ],
  providers: [
    CoreService,
    LocalStorageService,
    { provide: 'LOCALSTORAGE', useFactory: getLocalStorage }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    @Inject(APP_ID) private appId: string) {
    const platform = isPlatformBrowser(platformId) ?
      'in the browser' : 'on the server';
    console.log(`Running ${platform} with appId=${appId}`);
  }
}

export function getLocalStorage() {
  return (typeof window !== 'undefined') ? window.localStorage : null;
}
