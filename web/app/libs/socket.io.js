import openSocket from 'socket.io-client'

import { storeUserName, appendMessage, replaceMessages } from './localStorage'

const socket = openSocket('http://localhost:3000')

export const joinChat = (userName) => {
  storeUserName(userName)
  socket.emit('join', userName)
}

export const leaveChat = (user) => 
  socket.emit('leave', user)

export const newJoiners = (callback) => socket.on('newJoiner', (message, userName) => callback({userName, message, type: 'join'}))

export const allUsers = (callback) => socket.on('allUsers', (users) => callback(users))

export const allMessages = (callback) => socket.on('allMessages', (messages) => {
  callback(messages)
  replaceMessages(messages)
})

export const sendMessage = (userName, message) => {
  socket.emit('message', userName, message)
  appendMessage(userName, message)
}

export const removeUser = (callback) =>
  socket.on('leave', (user) => callback(user))

export const handleReceive = (callback, userName, message) => {
  callback({userName, message, type: 'message'})
  appendMessage(userName, message)
}

export const receiveMessage = (callback) => socket.on('newMessage', (userName, message) => {
  handleReceive(callback)
})
