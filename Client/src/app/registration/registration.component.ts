import { async } from '@angular/core/testing';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { findReadVarNames } from '@angular/compiler/src/output/output_ast';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {

  
  public fbFormGroup = this.fb.group({
    username: ['', Validators.required],
   
    email: ['', Validators.required],
    phone : ['', Validators.required],
    password : ['', Validators.required],
  });
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private http: HttpClient
  ) {}
   
  public userdata = this.fbFormGroup.value;
  public validEmail = false;
  public validPhone = false;
public validUser = false;
public validPassword = false;
  name(){
    console.log("name is blurred");
    const userdata = this.fbFormGroup.value;
    let regex = /^[a-zA-Z]([0-9a-zA-Z]){5,20}$/;
    let str = userdata.username;
  
   console.log(str);
    if (regex.test(str)) {
        console.log('Your name is valid');
       
        this.validUser = true;
        console.log(this.validUser);
    }
    else {
        console.log('Your name is not valid');
      
        this.validUser = false;

    }
  }

  email(){
    console.log("email is blurred");
    const userdata = this.fbFormGroup.value;
    let regex = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
    let str = userdata.email;
    if (regex.test(str)) {
        console.log('Your email is valid');
    
        this.validEmail = true;
    }
    else {
        console.log('Your email is not valid');
      
        this.validEmail = false;
    }
  }

  phone(){
    const userdata = this.fbFormGroup.value;
    console.log("phone is blurred");

    let regex = /^([0-9]){10}$/;
    let str = userdata.phone;

    if (regex.test(str)) {
        console.log('Your phone is valid');
      
        this.validPhone = true;
    }
    else {
        console.log('Your phone is not valid');
       
        this.validPhone = false;

    }
  }
  password(){
    const userdata = this.fbFormGroup.value;
    console.log("password is blurred");

    let regex = /^[a-zA-Z]([0-9a-zA-Z]){5,20}$/;
    let str = userdata.password;
    console.log(regex, str);
    if (regex.test(str)) {
        console.log('Your password is valid');
      
        this.validPassword = true;
    }
    else {
        console.log('Your password is not valid');
      
        this.validPassword = false;

    }
  }

  async ajexCall(){

    console.log(this.validEmail, this.validUser, this.validPhone);

    if (this.validEmail && this.validUser && this.validPhone && this.validPassword) {
    
      const data = this.fbFormGroup.value;
      console.log(data);
      const url = 'http://localhost:3030/adduser';
  
      await this.http.post(url, data).toPromise();
      // this.router.navigate(['login']);
      this.fbFormGroup.reset();
  
        console.log('all information was correct ... ');
       
        alert("Ragistration completed !!")
        this.router.navigate(['login']);
    }
    else {
       
        alert("Ragistration fail !!")
    }



  }


}
