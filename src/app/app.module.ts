import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HeaderModule, HeaderService} from 'common-code-base';
import {AppComponent} from './app.component';
import {LoginModule} from './modules/login/login.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HeaderModule,
    LoginModule
  ],
  providers: [HeaderService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
