import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contect-us',
  templateUrl: './contect-us.component.html',
  styleUrls: ['./contect-us.component.css']
})
export class ContectUsComponent implements OnInit {

  public fbFormGroup = this.fb.group({
    name : ['', Validators.required],
   
    email: ['', Validators.required],
    massage : ['', Validators.required],
 
  });

  constructor( private fb: FormBuilder,  private router: Router,private http: HttpClient) { }

  ngOnInit() {
  }

  async send(){
    const data = this.fbFormGroup.value;
    console.log(data);

    const url = 'http://localhost:3030/addcontact';

    await this.http.post(url, data).toPromise();
    // this.router.navigate(['login']);
    this.fbFormGroup.reset();
  }
 
}
