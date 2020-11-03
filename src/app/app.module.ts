import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule } from '@angular/router';
import { routes } from './app.routing';
import { HttpClientModule } from '@angular/common/http';
import { NotAuthorizedComponent } from './components/core/not-authorized/view/not-authorized/not-authorized.component';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent, NotAuthorizedComponent],
  imports: [BrowserModule, RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }), HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
