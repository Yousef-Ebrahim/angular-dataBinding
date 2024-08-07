import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { Task1Component } from './task1/task1.component';
import { HomeModule } from './home/home.module';

@NgModule({
  declarations: [AppComponent, Task1Component],
  imports: [BrowserModule, AppRoutingModule, FormsModule,HomeModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

