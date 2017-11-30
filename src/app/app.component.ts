import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  selectedNavItem = 'recipes';
  title = 'app';

  navigate(selectedNavItem){
  	this.selectedNavItem = selectedNavItem;
  }
}
