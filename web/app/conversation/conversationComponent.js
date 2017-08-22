import React from 'react'
import PropTypes from 'prop-types'

const Conversation = ({ userName, messages, addMessage }) => {

  const insertMessage = (event) => {
    event.preventDefault()

    const input = event.target.parentNode.children[0]

    addMessage({
      userName,
      message: input.value
    })

    input.value = ''
  }

  const buildSendButton = () => <button onClick={insertMessage}>Send</button>

  const getItem = ({ userName, message }, index) => (
    <li key={index}>{userName}: {message}</li>
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
    message: PropTypes.string
  })).isRequired,
  addMessage: PropTypes.func.isRequired
}

export default Conversation
