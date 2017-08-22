import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { store } from './app'
import App from './appComponent'


const render = () => ReactDOM.render(<Provider store={store}><App /></Provider>, document.querySelector('#app'))

render()
