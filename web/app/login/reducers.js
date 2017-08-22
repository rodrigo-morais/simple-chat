import { JOIN, CHANGE_USER_NAME } from './actions'
import { store } from '../app'

export const joinChat = () => ({
  type: JOIN
})

export const changeUserName = userName => ({
  type: CHANGE_USER_NAME,
  userName
})


const initialState = {
  userName: '',
  joined: false
}

const login = (state = initialState, action) => {
  switch(action.type) {
    case CHANGE_USER_NAME:
      return  {...state
              , userName: action.userName
              }
    case JOIN:
      return  {...state
              , joined: true
              }
    default:
      return state
  }
}

export default login
