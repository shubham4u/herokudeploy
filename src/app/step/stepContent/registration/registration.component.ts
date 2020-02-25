import { Component, OnInit } from '@angular/core';
import { User } from '../../User';
import { Router, RouterLink } from '@angular/router';
import { StepserviceService } from '../../stepservice.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor(private router:Router, private service: StepserviceService, private http: HttpClient) { }

  contactno=false;
  adharno=false;
  mstatus=false;
  hqualification=false;
  steppassword=false;
  stepcpassword=false;

  namePattern ="^[a-zA-Z\s]*$";
  mailPattern="^[a-z]+[a-z0-9._]+@[a-z]+\.[a-z.]{2,5}$";
  contactnoPattern = "^((\\+91-?)|0)?[0-9]{10}$";
  adharPattern = "^\d{4}\s\d{4}\s\d{4}$";
  stepdatePattern = "/^([0-9]{2})-([0-9]{2})-([0-9]{4})$/";

  user:User = new User();
  
  ngOnInit() {
    
  }

  stepregister() {
    console.log(sessionStorage.getItem("stepdata"));
    this.user.userId = parseInt(sessionStorage.getItem("stepdata"));
    console.log("user data", this.user);
    
    this.service.stepRegisterAddData(this.user);
    this.router.navigate(['/step/registration/option']);
  }

}
