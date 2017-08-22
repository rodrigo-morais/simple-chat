'use strict'

import 'babel-polyfill'

import React from 'react'
import { shallow } from 'enzyme'
import { expect } from 'chai'
import sinon from 'sinon'

import LoginComponent from '../../../app/login/loginComponent'

describe('LoginComponent', () => {

  const changeUserSpy = sinon.spy()
  const joinSpy = sinon.spy()

  it('should call changeUser function when name changes', () => {
    const loginComponent = shallow(<LoginComponent join={joinSpy} changeUser={changeUserSpy} />)
    const input = loginComponent.find('input')

    input.simulate('change', { target: { value: 'R' } })

    expect(changeUserSpy.called).to.be.true
  })

  it('should call join function when click on Join button', () => {
    const loginComponent = shallow(<LoginComponent join={joinSpy} changeUser={changeUserSpy} />)
    const button = loginComponent.find('button')

    button.simulate('click', { preventDefault: () => {} })

    expect(joinSpy.called).to.be.true
  })

})
