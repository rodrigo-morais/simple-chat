import React from 'react'
import PropTypes from 'prop-types'

import { newJoiners } from '../libs/socket.io'

const Conversation = ({ userName, messages, addMessage }) => {
  newJoiners(addMessage)

  const insertMessage = (event) => {
    event.preventDefault()

    const input = event.target.parentNode.children[0]

    addMessage({
      userName,
      message: input.value,
      type: 'message'
    })

    input.value = ''
  }

  const buildSendButton = () => <button onClick={insertMessage}>Send</button>

  const getItem = ({ userName, message, type }, index) => (
    type === 'message' ? <li key={index}>{userName}: {message}</li> : <li key={index}>{message}</li>
  )

  return (
    <div className="conversation-container">
      <ul className="conversation">
        {messages.map(getItem)}
      </ul>
      <form action="">
        <input id="message" />
        {buildSendButton()}
      </form>
    </div>
  )
}

Conversation.propTypes = {
  userName: PropTypes.string.isRequired,
  messages: PropTypes.arrayOf(PropTypes.shape({
    userName: PropTypes.string,
    message: PropTypes.string,
    type: PropTypes.string
  })).isRequired,
  addMessage: PropTypes.func.isRequired
}

export default Conversation
