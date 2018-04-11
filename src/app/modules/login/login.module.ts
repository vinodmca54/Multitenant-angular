import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoginComponent} from './login.component';
import {HeaderModule, HeaderService} from 'common-code-base';

@NgModule({
  imports: [
    CommonModule,
    HeaderModule
  ],
  declarations: [LoginComponent],
  providers: [HeaderService],
  exports: [LoginComponent]
})
export class LoginModule {
}
