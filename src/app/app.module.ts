import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SaludoComponent } from './components/saludo/saludo.component';
import { FormsModule } from '@angular/forms';
import { NgClass } from '@angular/common';

@NgModule({
  declarations: [AppComponent, SaludoComponent],
  imports: [BrowserModule, FormsModule, NgClass],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
