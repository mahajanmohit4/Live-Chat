import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClientModule, HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router ,    private http: HttpClient) { }

  ngOnInit(): void {
    if (!sessionStorage.getItem('sid')) {
      this.router.navigate(['login']);
    }
 
  }

  async processDelete(){
   const id =  sessionStorage.getItem("emailid");
   console.log(id);
  const x =  confirm("Are you sure to delete account ");
 
  if(x == true){
    const data = {email : id};
    const url = 'http://localhost:3030/deleteuser';
   
    await this.http.post(url, data).toPromise();
    sessionStorage.removeItem("emailid")
    this.router.navigate(['login']);
    
  }
   
   
  }

  processLogout() {
    sessionStorage.removeItem('sid');
    this.router.navigate(['login']);
  }

  contact(){
    this.router.navigate(['contactus'])
  }
}
