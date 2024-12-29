import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

  Linkedin(){
    const linkedinUrl = 'https://www.linkedin.com/in/harshad-wagh-26473521a/';
    window.open(linkedinUrl, '_blank');

  }

  Github(){
    const GithubUrl = 'https://github.com/harshadwagh-ux';
    window.open(GithubUrl, '_blank');
  }
}
