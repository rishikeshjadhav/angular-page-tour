import { Component } from '@angular/core';
import { JoyrideService } from 'angular2-joyride';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(private readonly joyrideService: JoyrideService) {

  }

  onClick() {
    this.joyrideService.startTour();
  }


}
