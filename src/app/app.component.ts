import {Component} from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  username = '';
  showPassword = false;
  log = [];

  onToggleDetails() {
    this.showPassword = !this.showPassword;
    // this.log.push(this.log.length + 1);
    this.log.push (new Date());
  }
}
