import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng2ckeditor',
  templateUrl: './ng2ckeditor.component.html',
  styleUrls: ['./ng2ckeditor.component.css']
})
export class Ng2ckeditorComponent implements OnInit {

    ckeditorContent: string = '<p>Some html</p>';
    
  constructor() { }

  ngOnInit(): void {
  }

}
