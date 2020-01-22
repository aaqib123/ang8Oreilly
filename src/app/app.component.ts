import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app comp';
  loadedFeature:string='recipe';

  onNavEventRecieved(feature:string){
    this.loadedFeature = feature
  }
}
