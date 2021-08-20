import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {
  contact = "";
  constructor() { }

  ngOnInit(): void {
  }
  getvalues(val: any) {
    console.log(val);
    this.contact = "sucessfully added";
  }
}
