import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'
import socket from 'socket.io-client'

const SERVER_URL = 'http://localhost:3000'

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  private socket = null;
  private user = '';

  constructor() {
    this.initSocket();
  }

  initSocket() {
    this.socket = socket(SERVER_URL)
  }

  setUser(user) {
    this.socket.emit('onSetUser', user)
  }

  validUserListener() {
    return new Observable(observer => {
      this.socket.on('onValidUser', (user) => {
        this.user = user
        observer.next(user)
      })
    })
  }

  invalidUserListener() {
    return new Observable(observer => {
      this.socket.on('onInvalidUser', () => observer.next('invalid'))
    })
  }

  getUsers() {
    return new Observable(observer => {
      this.socket.on('onUserAdded', users => observer.next(users))
    })
  }

  sendMessage(msg) {
    this.socket.emit('onClientMsg', {
      user: this.user,
      msg
    })
  }

  getMessage() {
    return new Observable((observer) => {
      this.socket.on('onServerMsg', (msg) => {
        observer.next(msg)
      })
    })
  }
}
