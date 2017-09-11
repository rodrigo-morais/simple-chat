import { SET_USERS, ADD_USER, REMOVE_USER } from './actions'
import { store } from '../app'

export const setUsers = (users) => ({
  type: SET_USERS,
  users
})

export const addUser = user => ({
  type: ADD_USER,
  user
})

export const removeUser = user => ({
  type: REMOVE_USER,
  user
})


const initialState = []

const userList = (state = initialState, action) => {
  switch(action.type) {
    case SET_USERS:
      return  action.users
    case ADD_USER:
      return  [...state
              , action.user
              ]
    case REMOVE_USER:
      return  [...state.slice(0, state.indexOf(action.user)),
              , ...state.slice(state.indexOf(action.user) + 1)
              ]
    default:
      return state
  }
}

export default userList
