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
      // allowedContent: false,
      
      /** allow custom classes */
      allowedContent: true,

      // builtinPlugins: [ImageResize],

      /** enable upload image button with file upload dialog */
      extraPlugins: 'divarea,easyimage',
      forcePasteAsPlainText: true,

      /** Allow to upload PNG and JPG. */
      imageAllowedTypes: ['jpeg', 'jpg', 'png'],

      /** image buttons */
      // imageEditButtons: ['imageReplace', 'imageAlign', 'imageRemove', '|', 'imageLink', 'linkOpen', 'linkEdit', 'linkRemove', '-', 'imageDisplay', 'imageStyle', 'imageAlt', 'imageSize'],

      /** provide the custom param for the file upload */
      imageUploadParam: 'profile_pic',

      /** file upload url */
      filebrowserUploadUrl: 'http://localhost:3000/products/upload-images/611e38ebb60f8e368cbc3cdd',


      // cloudServices_tokenUrl:'http://localhost:3000/products/upload-images/611e38ebb60f8e368cbc3cdd'
    };
  }

    // https://stackoverflow.com/questions/57414754/how-to-integrate-ckeditor-4-easy-image-into-angular-6
    // https://ckeditor.com/docs/ckeditor4/latest/api/CKEDITOR_config.html
    // https://stackoverflow.com/questions/43600877/angular2-overwrite-img-command-in-ng2-ckeditor
}
