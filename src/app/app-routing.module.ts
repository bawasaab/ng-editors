import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Ckeditor5angularComponent } from './ckeditor5angular/ckeditor5angular.component';
import { Ng2ckeditorComponent } from './ng2ckeditor/ng2ckeditor.component';
import { NgxeditorComponent } from './ngxeditor/ngxeditor.component';
import { TinymceComponent } from './tinymce/tinymce.component';

const routes: Routes = [
    {
        path: 'ng2-ckeditor',
        component: Ng2ckeditorComponent
    },
    {
        path: 'ckeditor5-angular',
        component: Ckeditor5angularComponent
    },
    {
        path: 'ngx-editor',
        component: NgxeditorComponent
    },
    {
        path: 'tiny-mce',
        component: TinymceComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
