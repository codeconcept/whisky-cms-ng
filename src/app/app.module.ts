import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BlogpostListComponent } from './blogpost-list/blogpost-list.component';
import { MaterialModule } from './material.module';
import { BlogpostComponent } from './blogpost/blogpost.component';
import { ErrorPageComponent } from './error-page/error-page.component';

@NgModule({
  declarations: [
    AppComponent,
    BlogpostListComponent,
    BlogpostComponent,
    ErrorPageComponent
  ],
  imports: [
  BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
