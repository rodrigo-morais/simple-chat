import openSocket from 'socket.io-client'

const socket = openSocket('http://localhost:3000')

export const joinChat = (userName) => socket.emit('join', userName)

export const newJoiners = (callback) => socket.on('newJoiner', (message) => callback({userName: '', message, type: 'join'}))

export const sendMessage = (userName, message) => socket.emit('message', userName, message)

export const receiveMessage = (callback) => socket.on('newMessage', (userName, message) => callback({userName, message, type: 'message'}))
