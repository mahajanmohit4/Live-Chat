import { Component, OnInit } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forget-pass',
  templateUrl: './forget-pass.component.html',
  styleUrls: ['./forget-pass.component.css']
})
export class ForgetPassComponent implements OnInit {


  public fbFormGroup = this.fb.group({
  
    email: ['', Validators.required],
  });

  constructor( private fb: FormBuilder,
    private router: Router,
    private http: HttpClient) { } 

  ngOnInit() {
  }
  async send(){
    const data = this.fbFormGroup.value;
    console.log(data);
    const url = 'http://localhost:3030/auth-password';
    const result: any = await this.http.post(url, data).toPromise();
    console.log(result);
    if (result.opr) {
      sessionStorage.setItem("emailid17", data.email);
      alert( "Press to change Password ");
      this.fbFormGroup.reset();
      this.router.navigate(['comformpass']);

    } else {
      
      alert("Please Enter the valid Email ")
    }
  }
}
