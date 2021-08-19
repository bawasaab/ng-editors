import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Ng2ckeditorComponent } from './ng2ckeditor/ng2ckeditor.component';
import { NgxeditorComponent } from './ngxeditor/ngxeditor.component';
import { Ckeditor5angularComponent } from './ckeditor5angular/ckeditor5angular.component';
import { FormsModule } from '@angular/forms';

// CKEDITOR-MODULE STARTS
import { CKEditorModule } from 'ng2-ckeditor';
// CKEDITOR-MODULE ENDS

// NgxEditorModule-MODULE STARTS
import { NgxEditorModule } from 'ngx-editor';
// NgxEditorModule-MODULE ENDS

@NgModule({
  declarations: [
    AppComponent,
    Ng2ckeditorComponent,
    NgxeditorComponent,
    Ckeditor5angularComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CKEditorModule,
    NgxEditorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
