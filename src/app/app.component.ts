import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: []
})
export class AppComponent {
  displayDetails = false;
  clickTrackingArr: string[] = [];

  toggleDetails(){
    this.displayDetails = !this.displayDetails;
    this.clickTrackingArr.push(`The display details is now: ${this.displayDetails ? 'on' : 'off'}. ${Date.now()}`);
  }
}
