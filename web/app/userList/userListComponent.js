import React from 'react'
import PropTypes from 'prop-types'

const UserList = ({ userList }) => {
  const users = userList.map(user =>
    <li key={user}>{user}</li>
  );
  return (
    <ul>
      {
        users
      }
    </ul>
  )
}

UserList.propTypes = {
  userList: PropTypes.array.isRequired,
}

export default UserList
