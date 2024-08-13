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
import { GeneratedLinksComponent } from './generated-links/generated-links.component';
import {DataViewModule} from "primeng/dataview";
import {DragDropModule} from "primeng/dragdrop";
import {ListboxModule} from "primeng/listbox";
import {CardModule} from "primeng/card";
import {MessagesModule} from "primeng/messages";
import {MessageModule} from "primeng/message";
import {MessageService} from "primeng/api";
import {ClipboardModule} from "ngx-clipboard";
import {VirtualScrollerModule} from "primeng/virtualscroller";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GeneratedLinksComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    InputTextModule,
    Button,
    FormsModule,
    DialogModule,
    DataViewModule,
    DragDropModule,
    ListboxModule,
    CardModule,
    MessagesModule,
    MessageModule,
    ClipboardModule,
    VirtualScrollerModule
  ],
  providers: [
    provideHttpClient(),
    MessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
