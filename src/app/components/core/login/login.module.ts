import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginRoutingModule } from './login.routing.module';
import { LoginComponent } from './views/login.component';

@NgModule({
  imports: [CommonModule, LoginRoutingModule, FormsModule, ReactiveFormsModule],
  declarations: [LoginComponent],
  bootstrap: [LoginComponent]
})
export class LoginModule {}
