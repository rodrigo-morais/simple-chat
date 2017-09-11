'use strict'

import { expect } from 'chai'
import deepFreeze from 'deep-freeze'
import sinon from 'sinon';

import { getMessages, storeUserName, getUserName, appendMessage } from '../../app/libs/localStorage';

describe('localStorage', () => {
  const storageMock = () => {
    var storage = {};
    return {
      setItem: sinon.spy(),
      getItem: sinon.spy(),
    };
  };
  global.window = {};
  global.window.localStorage = storageMock();

  afterEach(() => {
    const storage = global.window.localStorage;

    storage.setItem.reset();
    storage.getItem.reset();
  });

  context('when storeUserName', () => {
    it('should store the user name in localStorage', () => {
      storeUserName('user');
      expect(window.localStorage.setItem.called).to.be.true;
    });
  });

  context('when getUserName', () => {
    it('should get the user name from localStorage', () => {
      getUserName();
      expect(window.localStorage.getItem.called).to.be.true;
    });
  });

  context('when getMessages', () => {
    it('should call getItem from localStorage', () => {
      getMessages();
      expect(window.localStorage.getItem.called).to.be.true;
    });

    it('should return an array', () => {
      const messages = getMessages();
      expect(messages).to.be.an('array');
    });
  });

  context('when appendMessage', () => {
    it('should get the current messages from localStorage', () => {
      appendMessage('user', 'message');
      expect(window.localStorage.getItem.called).to.be.true;
    });

    it('should append the message in localStorage', () => {
      appendMessage('user', 'message');
      expect(window.localStorage.setItem.called).to.be.true;
    });
  });
});
