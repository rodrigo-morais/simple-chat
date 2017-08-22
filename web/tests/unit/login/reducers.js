'use strict'

import 'babel-polyfill'

import { expect } from 'chai'
import deepFreeze from 'deep-freeze'

import { JOIN, CHANGE_USER_NAME } from '../../../app/login/actions'
import reducer from '../../../app/login/reducers'

const initialState = {
  userName: '',
  joined: false
}

describe('Login reducers', () => {
  it('should return user name as Rodrigo when call CHANGE_USER_NAME action', () => {
    const expected =  { ...initialState
                      , userName: 'Rodrigo'
                      }

    expect(reducer(initialState, { type: CHANGE_USER_NAME, userName: 'Rodrigo' }))
      .to.deep.equal(expected)
  })

  it('should return user joined when call JOIN action', () => {
    const expected =  { ...initialState
                      , joined: true
                      }

    expect(reducer(initialState, { type: JOIN }))
      .to.deep.equal(expected)
  })
})
