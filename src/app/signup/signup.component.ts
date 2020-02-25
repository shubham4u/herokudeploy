import { Component, OnInit } from '@angular/core';
import { EndUser } from './EndUser';
import { Router, RouterLink } from '@angular/router';
import { AppserviceService } from '../appservice.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private router:Router, private service: AppserviceService) { }

  name=false;
  email=false;
  date=false;
  vpassword=false;
  vcpassword=false;
  cpassword=false;

  enduser: EndUser = new EndUser();
  namePattern ="^[a-zA-Z\s]*$";
  mailPattern="^[a-z]+[a-z0-9._]+@[a-z]+\.[a-z.]{2,5}$";
  stepdatePattern = "/^([0-9]{2})-([0-9]{2})-([0-9]{4})$/";
  passwordPattern ="^[a-zA-Z\s]*$";
  datePattern="/^([0-9]{2})-([0-9]{2})-([0-9]{4})$/";

  ngOnInit() {
  }

  signup() {
    console.log(this.enduser);
    this.service.addData(this.enduser);
    this.router.navigate(['\signin']);
  }

}
