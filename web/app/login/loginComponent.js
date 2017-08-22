import React from 'react'
import PropTypes from 'prop-types'

import { joinChat } from '../libs/socket.io'

const Login = ({ userName, join, changeUser }) => {

  const joinUser = (event) => {
    event.preventDefault()

    if (!userName) {
      changeUser('anonymous')
    }

    joinChat(userName)
    join()
  }

  const changeName = (event) => changeUser(event.target.value)
  const buildJoinButton = () => <button onClick={joinUser}>Join</button>

  return (
    <div className='login-container'>
      <form>
        <input type='text' value={userName} onChange={changeName} />
        {buildJoinButton()}
      </form>
    </div>
  )
}

Login.propTypes = {
  userName: PropTypes.string.isRequired,
  join: PropTypes.func.isRequired,
  changeUser: PropTypes.func.isRequired,
}

export default Login
