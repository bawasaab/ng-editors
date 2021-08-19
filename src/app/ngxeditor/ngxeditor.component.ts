import { Component, OnInit } from '@angular/core';
import { Editor } from 'ngx-editor';

@Component({
  selector: 'app-ngxeditor',
  templateUrl: './ngxeditor.component.html',
  styleUrls: ['./ngxeditor.component.css']
})
export class NgxeditorComponent implements OnInit {

    editor: any;
    html: '' | undefined;

  constructor() { }

  ngOnInit(): void {
    this.editor = new Editor();
  }

  // make sure to destory the editor
  ngOnDestroy(): void {
    // this.editor.destroy();
  }

}
