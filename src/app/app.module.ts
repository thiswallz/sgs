import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { storeLogger } from 'ngrx-store-logger';
import { HttpClientModule } from '@angular/common/http';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { NotAuthorizedComponent } from './components/core/not-authorized/view/not-authorized/not-authorized.component';
import { AppComponent } from './app.component';
import { reducers } from './store/app.reducer';
import { routes } from './app.routing';
import { environment } from 'src/environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

export function logger(reducer): any {
  return storeLogger()(reducer);
}

// logger
export const metaReducers = environment.production ? [] : [logger];

@NgModule({
  declarations: [AppComponent, NotAuthorizedComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
    HttpClientModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
