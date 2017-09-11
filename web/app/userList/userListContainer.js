import React from 'react'
import { connect } from 'react-redux'

import UserList from './UserListComponent'

const mapStateToProps = state => (
{
  userList: state.userList
})

export default connect(mapStateToProps)(UserList)
