const http = require('http')
const express = require('express')
const socketio = require('socket.io')

const app = express()
const server = http.createServer(app)
const io = socketio(server)

const userList = [];

io.on('connection', (socket) => {
  console.log('User Connected!')

  socket.on('onSetUser', user => {
    let valid = true
    for (let i in userList) {
      if (userList[i] === user) {
        valid = false
        break;
      }
    }

    if (valid) {
      // userList.push({ user, socket })
      userList.push(user)
      socket.emit('onValidUser', user)
      io.emit('onUserAdded', userList)
    } else {
      socket.emit('onInvalidUser')
    }
  })

  socket.on('onClientMsg', (msg) => {
    console.log('On Client Message')
    io.emit('onServerMsg', msg);
  })
})

server.listen(3000, () => console.log('server started on port 3000'))