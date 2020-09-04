import { Component, OnInit } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-confom-pass',
  templateUrl: './confom-pass.component.html',
  styleUrls: ['./confom-pass.component.css']
})
export class ConfomPassComponent implements OnInit {
 
  public fbFormGroup = this.fb.group({
  
    password1: ['', Validators.required],
  
    password2 : ['', Validators.required], 
  });

  constructor( private fb: FormBuilder,
    private router: Router,
    private http: HttpClient) { }

  ngOnInit() {
  }

 
  async loginProcessHere() {

    console.log("asdfl;kjasdf");
    const data = this.fbFormGroup.value;

    console.log(data);
    console.log(data.password1);
    const email1 = sessionStorage.getItem("emailid17");

    const data1 = {email : email1 ,password : data.password1};
    console.log(email1);
    console.log(data1);
    if(data.password1 === data.password2){
      console.log("sucess");
    
    const url = 'http://localhost:3030/com-pass';
    const result: any = await this.http.post(url, data1).toPromise();
    console.log(result);

    alert("Your Password has been change sucessfully !!");
    
    this.router.navigate(['login']);
    }else{
      this.fbFormGroup.reset();
      alert("Your Password and comform password was incorrect");

    }
    
  
  }

}
