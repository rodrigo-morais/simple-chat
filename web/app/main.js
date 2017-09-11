import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { store } from './app'
import App from './appComponent'

import { newJoiners, receiveMessage, leaveChat, removeUser, allMessages } from './libs/socket.io'
import { addMessage, replaceMessages } from './conversation/reducers'
import { addUser, removeUser as removeUserFromUserList } from './userList/reducers'

newJoiners((message) => {
  store.dispatch(addMessage(message))
  store.dispatch(addUser(message.userName))
})

receiveMessage((message) => store.dispatch(addMessage(message)))

removeUser((user) => store.dispatch(removeUserFromUserList(user)))
 
allMessages((messages) => store.dispatch(replaceMessages(messages)))

window.onbeforeunload = () => {
  leaveChat(store.getState().login.userName)
}


const render = () => ReactDOM.render(<Provider store={store}><App /></Provider>, document.querySelector('#app'))

render()
