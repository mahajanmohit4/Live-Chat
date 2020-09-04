import { Component, OnInit } from '@angular/core';
import { ChatService } from '../../services/chat.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  message: string = '';
  messageList = [];
  users = [];

  constructor(private chatService: ChatService ,private router: Router) { }

  ngOnInit() {
    this.chatService.getMessage()
      .subscribe(msg => {
        this.messageList.push(msg)
      })

    this.chatService.getUsers()
      .subscribe((users: String[]) => {
        this.users = users
      })




      if (!sessionStorage.getItem('sid')) {
        this.router.navigate(['login']);
      }
  }

  sendMessage() {
    this.chatService.sendMessage(this.message)
    this.message = ''
  }




  processLogout() {
    sessionStorage.removeItem('sid');
    this.router.navigate(['login']);
    // this.users.pop(); //asdf
  }
}
