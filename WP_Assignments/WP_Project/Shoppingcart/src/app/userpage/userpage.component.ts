import { Component, OnInit } from '@angular/core';
// import {FormControl, Validators} from '@angular/forms';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {NgForm} from '@angular/forms';
import { UserService } from '../user.service';
import {Router} from '@angular/router';
import { CartService } from '../cart.service';
// import {CheckoutComponent} from '../checkout/checkout.component';
// import {CheckoutComponent} from '../checkout/checkout.component';


@Component({
  selector: 'app-userpage',
  templateUrl: './userpage.component.html',
  styleUrls: ['./userpage.component.css'],
  // providers:['']
})
export class UserpageComponent implements OnInit {
  registerForm : FormGroup;
  signupemail:any;
  signuppassword:string;
  num:string;
  emaillg:any;
  passwordlg:string;
  
  submitted:boolean;
  
  register=false;
  login=true;
  loginredirect: boolean;
 
  constructor(private us:UserService,private cart:CartService,
    private router:Router) {}

  ngOnInit() {
  }
  onSubmit(){
    // console.log(this.signupemail+" "+this.signuppassword+" "+this.num);
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
  clickedLogin() {
    console.log("clicked login" + this.passwordlg + this.emaillg);
    var obj = {username: this.emaillg, password:this.passwordlg};
    this.us.validate(obj).subscribe(data =>{ 
      if (data) 
    {
      console.log("hh");
      this.us.isLoggedIn = true;
      this.cart.getUserEmail(this.emaillg);
      this.router.navigate(['/homepage']);
    } 
  else {
    this.loginredirect = true;
  }} );
  } 
  
  registeruser() {
    var obj = {username: this.signupemail, password: this.signuppassword, phn: this.num};
    this.us.adduser(obj);
  }

}
