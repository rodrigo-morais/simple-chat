import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import LoginContainer from './login/loginContainer'
import ConversationContainer from './conversation/conversationContainer'

const App = ({ joined }) => {
  return (
    <div className='app-container'>
     { joined ? <ConversationContainer /> : <LoginContainer /> }
    </div>
  )
}

App.propTypes = {
  joined: PropTypes.bool.isRequired
}

const mapStateToProps = state => ({
  joined: state.login.joined
})

const mapDispatchToProps = dispatch => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
