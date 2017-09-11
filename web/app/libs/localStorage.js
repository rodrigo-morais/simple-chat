export const appendMessage = (userName, message) => {
  const storage = window.localStorage;

  const messages = JSON.parse(storage.getItem('messages') || '[]')
  
  storage.setItem('messages', JSON.stringify([...messages, {userName, message}]));
}

export const storeUserName = (userName) =>
  window.localStorage.setItem('userName', userName)

export const getUserName = () =>
  window.localStorage.getItem('userName')

export const getMessages = () =>
  JSON.parse(
    window.localStorage.getItem('messages') || '[]'
  ).map(message => ({...message, ...{ type: 'message' }}))


export const replaceMessages = (messages) =>
  window.localStorage.setItem('messages', JSON.stringify(messages))
