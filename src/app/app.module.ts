import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Ng2ckeditorComponent } from './ng2ckeditor/ng2ckeditor.component';
import { NgxeditorComponent } from './ngxeditor/ngxeditor.component';
import { Ckeditor5angularComponent } from './ckeditor5angular/ckeditor5angular.component';
import { TinymceComponent } from './tinymce/tinymce.component';

import { FormsModule } from '@angular/forms';

// CKEDITOR-MODULE STARTS
import { CKEditorModule } from 'ng2-ckeditor';
// CKEDITOR-MODULE ENDS

// NgxEditorModule-MODULE STARTS
import { NgxEditorModule } from 'ngx-editor';
// NgxEditorModule-MODULE ENDS

// tinymce-MODULE STARTS
import { EditorModule } from '@tinymce/tinymce-angular';
// tinymce-MODULE ENDS


@NgModule({
  declarations: [
    AppComponent,
    Ng2ckeditorComponent,
    NgxeditorComponent,
    Ckeditor5angularComponent,
    TinymceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CKEditorModule,
    NgxEditorModule,
    EditorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
