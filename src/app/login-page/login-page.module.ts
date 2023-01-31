import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPageComponent } from './login-page.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared-module';

@NgModule({
  declarations: [LoginPageComponent],
  providers: [],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    RouterModule.forChild([
      {
        path: 'app/login',
        component: LoginPageComponent,
      },
    ]),
  ],
  exports: [LoginPageComponent],
})
export class LoginPageModule {}
