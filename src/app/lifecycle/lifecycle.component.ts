  import { Component, OnInit,OnChanges } from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  templateUrl: './lifecycle.component.html',
  styleUrls: ['./lifecycle.component.css']
})
export class LifecycleComponent implements OnInit,OnChanges {
  x:number=0;
  fillColor = 'rgb(255, 0, 0)';
  class =  "Angular";
  val:string="hh"
  dfr="cc";
  isInput: boolean=false;
  heroes:any;
  constructor() { }

 
  ngOnChanges(){

  }
  submit()
  {
    debugger;
    console.log(this.dfr);
  }
  change()
  {
    this.isInput=!this.isInput;
  }
  ngOnInit(): void {
    this.heroes=[{name:"ww"},{name:"ff"},{name:"ffd"}]
    for (let index = 0; index < 6; index++) {
      setTimeout(() => {
        this.x++;
      }, 600);
      
      
    }
  }
  changeColor() {
    debugger;
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    this.fillColor = `rgb(${r}, ${g}, ${b})`;
  }
}
