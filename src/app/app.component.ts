import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular napp';
  names=["Arjun","Vivek","Deepali"];
  
   display(txtBx1:string)
  {
    this.title=txtBx1+" hey you clicked me..";
  
  }
}
