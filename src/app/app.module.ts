import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { IntroComponent } from './components/main-page/intro/intro.component';
import { RoundedButtonComponent } from './components/common/rounded-button/rounded-button.component';
import { AboutCompanyComponent } from './components/main-page/about-company/about-company.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    HeaderComponent,
    IntroComponent,
    RoundedButtonComponent,
    AboutCompanyComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
