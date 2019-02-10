import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { Product } from '../card';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { UserpageComponent } from '../userpage/userpage.component';
import { UserService } from '../user.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css'],
  providers:[UserpageComponent]
})
export class CheckoutComponent implements OnInit {
  cartsArray: Product[] = [];
  totalprice=0;
  totalQuantity: number = 0;
  country: string;
  address: string;
  city: string;
  state: string;
  post: string;
  confirmPage=false;
  checkOutPage=true;
  value;
  email;
  data;
  users=[];

  constructor(private cartService: CartService,private userService:UserService, private http: HttpClient,private user:UserpageComponent) { 
    
  }
  
  
  ngOnInit() {
    this.getCart();
    this.calculateItems();
    // this.value=this.userService.getUsers();
    this.email=this.cartService.getEmail();
    // console.log(this.value);
    var det =this.userService.getUsers()
    
    det.subscribe(userList => {this.data = userList;
      this.users = this.data;
      // console.log(this.data);
      for(let a of this.data){
        // console.log(this.email+"  -->"+a.email);
        if(this.email===a.email){
          // console.log(a);
          (<HTMLInputElement>document.getElementById("add")).value=a.address[a.address.length-1].address;
          (<HTMLInputElement>document.getElementById("city")).value=a.address[a.address.length-1].city;
          (<HTMLInputElement>document.getElementById("state")).value=a.address[a.address.length-1].state;
          (<HTMLInputElement>document.getElementById("pos")).value=a.address[a.address.length-1].postcode;
          (<HTMLInputElement>document.getElementById("con")).value=a.address[a.address.length-1].country;
        }else{
          (<HTMLInputElement>document.getElementById("add")).value=null;
          (<HTMLInputElement>document.getElementById("city")).value=null;
          (<HTMLInputElement>document.getElementById("state")).value=null;
          (<HTMLInputElement>document.getElementById("pos")).value=null;
          (<HTMLInputElement>document.getElementById("con")).value=null;
        }
      }
    }, ()=>{
      // this.data.forEach(value =>this.users.push(value));
      
    });
    // console.log("heeeee");


    
    this.getAddress();
    
  }

  getCart() {
    this.cartsArray = this.cartService.getCart(); 
  }

  calculateItems() {
    for (var i = 0; i < this.cartsArray.length; i++) {
      this.totalQuantity += this.cartsArray[i].uRQ;
    }
    for (var i = 0; i < this.cartsArray.length; i++) {
      this.totalprice += (this.cartsArray[i].price*this.cartsArray[i].uRQ);
    }
  }
  
  // checkuser() {
  //   var obj = {addr:[this.address, this.city, this.state, this.post, this.country]};
  //   this.http.post('http://127.0.0.1:3000/address', obj).subscribe(next => console.log(next));
  // }
  confirm(){
    this.confirmPage=true;
    this.checkOutPage=false;
    
    for(var i=0;i<this.cartsArray.length;i++){
      this.cartService.updateData(this.cartsArray[i]);
      // this.http.put('http://127.0.0.1:3000/update',this.cartsArray[i]);
    }
  }
  saveAddress(){
    // var add={address:this.address,city:this.city,state:this.state,postcode:this.post,country:this.country,email:this.email};
    this.cartService.addAddress(this.address,this.city,this.state,this.post,this.country);
    // (<HTMLDivElement>document.getElementById("formId")).reset();
  }
  getAddress(){
    // console.log("hello"+this.data);
    console.log(this.users);
    // this.data.forEach(value =>this.users.push(value));
    // console.log(this.users);
    // for(var i=0;i<this.data.length;i++){
    //   if(this.email===this.data.cartDetails[i].email){
    //     (<HTMLInputElement>document.getElementById("add")).value=this.data.cartDetails[i].address.address
    //   }
    // }
  }
  
}
