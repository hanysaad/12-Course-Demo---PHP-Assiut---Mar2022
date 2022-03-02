import { Component } from '@angular/core';

@Component({
  selector: 'app-comp',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  // template:'<h1>Hello World</h1>',
  // styles:['h1{color:blue}']
})
export class AppComponent {
  title = 'Angular 13';

  sayHello()
  {
    return "Hello World, " + this.title;
  }
}
