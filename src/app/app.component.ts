import { Component, OnInit } from '@angular/core';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic/build/ckeditor';
import * as uniqid from 'uniqid';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public instanceCount = 1;
  public ckeditorIds: string[] = [];

  ngOnInit(): void {
    this.ckeditorIds.push(uniqid());
  }
  createInstances(): void {
    for (let i = 0; i < this.instanceCount; i++) {
      ClassicEditor
        .create( document.querySelector( `#my-ckeditor-instance-${this.ckeditorIds[i]}` ) )
        .then( editor => {
          // TODO: Do something with the editor
        } )
        .catch( error => {
          console.error( error );
        } );
    }
  }
  createIds(): string[] {
    this.ckeditorIds = [];
    for (let i = 0; i < this.instanceCount; i++) {
      this.ckeditorIds.push(uniqid());
    }
    return this.ckeditorIds;
  }
}
