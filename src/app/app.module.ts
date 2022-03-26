import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ProbaComponent } from './components/proba/proba.component';
import { TestComponent } from './components/test/test.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { HeaderComponent } from './components/shared/header/header.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, HelloComponent, ProbaComponent, TestComponent, FooterComponent, HeaderComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
