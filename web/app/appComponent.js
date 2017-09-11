import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import LoginContainer from './login/loginContainer'
import ConversationContainer from './conversation/conversationContainer'
import { getUserName } from './libs/localStorage'
import { joinChat, allUsers } from './libs/socket.io'
import { changeUserName, joinChat as join } from './login/reducers'
import { setUsers } from './userList/reducers'

const App = ({ joined, join, changeUser, setUsers }) => {
  if (!joined) {
    const userName = getUserName()
    
    allUsers(setUsers);

    if (userName) {
      joinChat(userName)
      changeUser(userName)
      join()
    }
  }

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
  return {
    join : () => dispatch(join()),
    changeUser : userName => dispatch(changeUserName(userName)),
    setUsers : users => dispatch(setUsers(users)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
