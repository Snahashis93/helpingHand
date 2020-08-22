import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  class:any;
  value = "DDLJ";
  constructor() { }

  ngOnInit(): void {
    this.class="uu";
    this.value="yy"

  }
   
}
