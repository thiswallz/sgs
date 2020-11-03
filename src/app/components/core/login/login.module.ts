import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LoginRoutingModule } from './login.routing.module';
import { LoginComponent } from './view/login.component';

@NgModule({
  imports: [CommonModule, LoginRoutingModule],
  declarations: [LoginComponent],
  bootstrap: [LoginComponent]
})
export class LoginModule {}
