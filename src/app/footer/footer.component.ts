import { Component } from '@angular/core';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

@Component({
  selector: 'footer-bottom',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  faGithub = faGithub
  faLinkedin = faLinkedin
  currentDate;
  year;

  currentYear() {
    this.currentDate = new Date()
    this.year = this.currentDate.getFullYear()
    return this.year
  }

}
