import { Component } from '@angular/core';
import { setTheme } from 'ngx-bootstrap/utils';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'portal';
  isCollapsed: boolean = true;
  
  constructor(){
    setTheme('bs4');
  }


  toggleCollapse(): void {
    this.isCollapsed = !this.isCollapsed;
  }

}
