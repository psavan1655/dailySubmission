import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ComonRoutingModule } from './comon-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ContactusComponent } from './contactus/contactus.component';


@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    ContactusComponent
  ],
  imports: [
    CommonModule,
    ComonRoutingModule,
    FormsModule
  ]
})
export class ComonModule { }
