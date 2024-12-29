import { Component } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { ContactUSComponent } from '../contact-us/contact-us.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(public dialog: MatDialog) {}


  about(){
    const ResumeURL='https://drive.google.com/file/d/12T62NjWMSYil-h69O3L2qdAVaiMhJHLf/view?usp=sharing'
  window.open(ResumeURL+'_blank')  
  }

  contact(){
    this.dialog.open(ContactUSComponent, {
      data: {
        data:'data'
      },
    });

  }

}
