import { Component } from '@angular/core';
import { Router, Event, NavigationEnd} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'portfolio_frontend';
  currentRoute: string;

  constructor(private router: Router) {
    this.currentRoute = "";
    this.router.events.subscribe((event: Event) => {
        if (event instanceof NavigationEnd) {
            this.currentRoute = event.url;
            if(event.url === "/login" || event.url === "/register") {
              document.body.style.backgroundColor = "#213159"
            }else{
              document.body.style.backgroundColor = "#FFF"
            }
            console.log(event);
        }
    });
  }
}
