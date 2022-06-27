import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TodoApp';

  constructor(private router: Router) {}

  getRoute() {
    console.log("Test" + this.router.url);
    return this.router.url.toString();
  }

  showNavBar() {
    if (this.getRoute() == '/home')
      return false;
      else if (this.getRoute() == '/404')
      return false;

      return true;
  }
}
