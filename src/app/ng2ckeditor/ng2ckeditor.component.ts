import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng2ckeditor',
  templateUrl: './ng2ckeditor.component.html',
  styleUrls: ['./ng2ckeditor.component.css']
})
export class Ng2ckeditorComponent implements OnInit {

  ckeConfig: any;
  ckeditorContent: string = '<p>Some html</p>';
    
  constructor() { }

  ngOnInit(): void {
    this.ckeConfig = {
      allowedContent: false,
      extraPlugins: 'divarea,easyimage',
      forcePasteAsPlainText: true,
      // filebrowserUploadUrl: 'http://localhost:3000/products/upload-images/611ded7eaccdfd2b3c7e524f',
      cloudServices_tokenUrl:'http://localhost:3000/products/upload-images/611ded7eaccdfd2b3c7e524f'
    };
  }

    // https://stackoverflow.com/questions/57414754/how-to-integrate-ckeditor-4-easy-image-into-angular-6
    // https://ckeditor.com/docs/ckeditor4/latest/api/CKEDITOR_config.html
    // https://stackoverflow.com/questions/43600877/angular2-overwrite-img-command-in-ng2-ckeditor
}
