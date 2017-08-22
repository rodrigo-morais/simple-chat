import { ADD_MESSAGE } from './actions'
import { store } from '../app'

export const addMessage = (message) => ({
  type: ADD_MESSAGE,
  message
})

const initialState = {
  messages: []
}

const conversation = (state = initialState, action) => {
  switch(action.type) {
    case ADD_MESSAGE:
      return  {...state
              , messages: [ ...state.messages, action.message ]
              }
    default:
      return state
  }
}

export default conversation
