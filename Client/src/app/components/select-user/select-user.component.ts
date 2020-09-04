import { Component, OnInit } from '@angular/core';
import { ChatService } from 'src/app/services/chat.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-select-user',
  templateUrl: './select-user.component.html',
  styleUrls: ['./select-user.component.css']
})
export class SelectUserComponent implements OnInit {

  mainuser = sessionStorage.getItem("emailid");
  username = '';
  errMsg = '';

  constructor(
    private chatService: ChatService,
    private router: Router
  ) { }

  ngOnInit() {
    this.chatService.validUserListener()
      .subscribe(user => this.router.navigate(['/chat']))

    this.chatService.invalidUserListener()
      .subscribe(() => this.errMsg = 'Invalid User')
  }

  setUserName() {
    this.chatService.setUser(this.username)
  }

}
