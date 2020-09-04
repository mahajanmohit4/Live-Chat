import { Component, OnInit } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public uiInvalidCredential = false;
   
  public fbFormGroup = this.fb.group({
  
    email: ['', Validators.required],
  
    password : ['', Validators.required], 
  });

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private http: HttpClient
  ) {}

  public userdata = this.fbFormGroup.value;
  public validEmail = false;
public validPassword = false;
 
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

password(){
  const userdata = this.fbFormGroup.value;
  console.log("password is blurred");

  let regex = /^[a-zA-Z]([0-9a-zA-Z]){3,20}$/;
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


  ngOnInit(): void {
  }

  async loginProcessHere() {
   
    
    if (this.validEmail &&  this.validPassword) {
    
      const data = this.fbFormGroup.value;

      console.log(data);
      // ajax call
      const url = 'http://localhost:3030/auth-user';
      const result: any = await this.http.post(url, data).toPromise();
      console.log(result);
      if (result.opr) {
        sessionStorage.setItem('sid', 'true');
        sessionStorage.setItem("emailid", data.email);
        console.log(sessionStorage.getItem("sid"));
        console.log(sessionStorage.getItem("emailid"));
        
        this.router.navigate(['home']);
      } else {
     
        alert("Please Enter the valid information ")
      }
     
  
        console.log('all information was correct ... ');
       
        // this.router.navigate(['login']);
    }
    else {
       
      alert("Please Enter the valid information ")
    }






  }

}
