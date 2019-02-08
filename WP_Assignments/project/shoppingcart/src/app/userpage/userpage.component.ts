import { Component, OnInit } from '@angular/core';
// import {FormControl, Validators} from '@angular/forms';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {NgForm} from '@angular/forms';


@Component({
  selector: 'app-userpage',
  templateUrl: './userpage.component.html',
  styleUrls: ['./userpage.component.css']
})
export class UserpageComponent implements OnInit {
  registerForm : FormGroup;
  email1:any;
  password1:string;
  number1:number;
  email2:any;
  password2:string;
  
  // model:RegDetails[]= [];
  submitted:boolean;
  // constructor(private servicedata:Dataservice) {
  //  this.submitted = false;
  //  }
  register=false;
  login=true;
  // rpwd;
  // pwd;
  // palert;
  // empty:string='';
  // address=false;
  // email = new FormControl('', [Validators.required, Validators.email]);

  // getErrorMessage() {
  //   return this.email.hasError('required') ? 'You must enter a value' :
  //       this.email.hasError('email') ? 'Not a valid email' :
  //           '';
  // }
  constructor() {
    
   }

  ngOnInit() {
    
    // if (this.rpwd!= this.pwd) {
    //   this.palert=true;
    // }
  }
  onSubmit(){
    console.log(this.email1+" "+this.password1+" "+this.number1);
  }
  registers(){
    this.register=true;
    this.login=false;
    // this.address=true;
  }
  logins(){
    this.login=true;
    this.register=false;
  }
  

}
