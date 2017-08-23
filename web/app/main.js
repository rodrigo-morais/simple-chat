import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { store } from './app'
import App from './appComponent'

import { newJoiners, receiveMessage } from './libs/socket.io'
import { addMessage } from './conversation/reducers'

newJoiners((message) => store.dispatch(addMessage(message)))
receiveMessage((message) => store.dispatch(addMessage(message)))

const render = () => ReactDOM.render(<Provider store={store}><App /></Provider>, document.querySelector('#app'))

render()
