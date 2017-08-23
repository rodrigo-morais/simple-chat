import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { addMessage } from './reducers'

import ConversationComponent from './conversationComponent'

const ConversationContainer = ({ userName, messages, newMessage }) => {
  return (
    <ConversationComponent
      userName={userName}
      messages={messages}
      addMessage={newMessage}
    />
  )
}

ConversationContainer.propTypes = {
  userName: PropTypes.string.isRequired,
  messages: PropTypes.arrayOf(PropTypes.shape({
    userName: PropTypes.string,
    message: PropTypes.string,
    type: PropTypes.string
  })).isRequired,
  newMessage: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  userName: state.login.userName,
  messages: state.conversation.messages
})

const mapDispatchToProps = dispatch => {
  return {
    newMessage: (message) => dispatch(addMessage(message))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ConversationContainer)
