import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-practice',
  templateUrl: './practice.component.html',
  styleUrls: ['./practice.component.css']
})
export class PracticeComponent implements OnInit {

  constructor() { }
  birthday = new Date();
  disabledbox = true;
  name = "snehal";
  show = false;
  curent = "";
  title = "snehal parmar";
  ngOnInit(): void {
  }
  getname() {
    return this.title;
    // return 'peter';
  }
  obj = {
    name: 'snehal',
    age: 24
  }
  arr = ['snehal', 'mayur', 'is', 'mad'];
  siteurl = window.location.href;
  snehal = "name of your";
  getvalue(val: any) {
    console.log(val);
  }
  myevent(evt: any) {
    console.log(evt);
  }
  getval(event: any) {
    // console.log(event.target.value);
    this.curent = event.target.value;
  }
  enabled() {
    this.disabledbox = false;
  }
}
