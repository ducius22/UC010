import { Component } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ssduc010';
  currentDate=new Date().toLocaleDateString();
  causaleValue;
  dati:{
    causaleValue:0
  }
  controlla = () =>{
    console.log(this.dati.causaleValue)
  }
}
