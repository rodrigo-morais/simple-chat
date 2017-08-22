import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { changeUserName, joinChat } from './reducers'

import LoginComponent from './LoginComponent'

const LoginContainer = ({ join, changeUser, userName }) => {
  
  return (
    <LoginComponent
      userName={userName}
      join={join}
      changeUser={changeUser}
    />
  )
}

LoginContainer.propTypes = {
  join: PropTypes.func.isRequired,
  changeUser: PropTypes.func.isRequired,
  userName: PropTypes.string.isRequired
}

const mapStateToProps = state => (
{
  userName: state.login.userName
})

const mapDispatchToProps = dispatch => {
  return {
    join : () => dispatch(joinChat()),
    changeUser : userName => dispatch(changeUserName(userName))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer)
