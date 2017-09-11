import { ADD_MESSAGE, REPLACE_MESSAGES } from './actions'
import { store } from '../app'
import { getMessages } from '../libs/localStorage'

export const addMessage = (message) => ({
  type: ADD_MESSAGE,
  message
})

export const replaceMessages = (messages) => ({
  type: REPLACE_MESSAGES,
  messages
})


const initialState = {
  messages: getMessages()
}

const conversation = (state = initialState, action) => {
  switch(action.type) {
    case ADD_MESSAGE:
      return  {...state
              , messages: [ ...state.messages, action.message ]
              }

    case REPLACE_MESSAGES:
      return { messages: action.messages.map(message => ({...message, ...{type: 'message'} }))}

    default:
      return state
  }
}

export default conversation
