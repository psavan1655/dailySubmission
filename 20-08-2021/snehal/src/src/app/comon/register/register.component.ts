import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  title = 'bio';

  value1 = "";
  value2 = "";

  constructor() { }

  ngOnInit(): void {
  }
  handleInput(event: any) {
    this.value1 = (event.target).value;
  }

  countryList: Array<any> = [
    { name: 'India', statesi: ['Gujrat', 'Maharastra'] },
    { name: 'U.S', statesi: ['Texas', 'Lasvegas'] },
  ];
  statesi = [];

  changeCountry(event: any) {
    this.statesi = this.countryList.find(con => con.name == event.target.value).statesi;
  }

  snehal = "sss";
  firname = "";
  lastname = "";
  aaddress = "";
  pprofile = "";
  ggender = "";
  hHobby = "";
  ccountry = "";
  sstate = "";
  ppincode = "";
  eemail = "";
  CContact = "";

  // nname = "";
  // mname = "";
  onSubmit(val1: any) {
    //   console.log(val1.nname);
    //   console.log(val1.mname);
    //   if (val1.nname === "" && val1.mname === "") {
    //     this.nname = "Name is required.........";
    //     this.mname = "MName is required.........";

    //   }
    //   else if (val1.nname === "") {
    //     this.nname = "Name is required...";
    //   } else if (val1.mname === "") {
    //     this.mname = "MnAme is required...";
    // //   }
    // console.log(val1.fname);
    // console.log(val1.lname);
    // console.log(val1.address);
    // console.log(val1.img);
    // console.log(val1.gen);
    // console.log(val1.hobby);
    // console.log(val1.country);
    // console.log(val1.State);
    // console.log(val1.pin);
    // console.log(val1.email);
    // console.log(val1.contactno)


    this.firname = val1.fname;
    this.lastname = val1.lname;
    this.aaddress = val1.address;
    this.pprofile = val1.img;
    this.ggender = val1.gen;
    this.hHobby = val1.hobby;
    this.ccountry = val1.country;
    this.sstate = val1.State;
    this.ppincode = val1.pin;
    this.eemail = val1.email;
    this.CContact = val1.contactno;
  }
  // single file upload

  url = "";
  onSelectfile(e: any) {
    if (e.target.files) {
      var reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onload = (event: any) => this.url = event.target.result;

    }
  }

  // multi img store

  urls: any = [];
  onSelectDocumentFile(e: any) {
    if (e.target.files) {
      for (let i = 0; i < File.length; i++) {
        var reader = new FileReader();
        reader.readAsDataURL(e.target.files[i]);
        reader.onload = (events: any) => {
          this.urls.push(events.target.result);
        }
      }
    }
  }
}
