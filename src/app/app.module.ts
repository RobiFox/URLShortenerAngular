import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {InputTextModule} from "primeng/inputtext";
import { HomeComponent } from './home/home.component';
import {Button} from "primeng/button";
import {FormsModule} from "@angular/forms";
import {HttpClient, provideHttpClient} from "@angular/common/http";
import {DialogModule} from "primeng/dialog";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    InputTextModule,
    Button,
    FormsModule,
    DialogModule
  ],
  providers: [
    provideHttpClient()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
