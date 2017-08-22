import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

const ConversationContainer = () => {
  
  return (
    <div className="conversation-container">
      <ul className="conversation"></ul>
      <form action="">
        <input id="message" /><button>Send</button>
      </form>
    </div>
  )
}

ConversationContainer.propTypes = {
}

const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(ConversationContainer)
