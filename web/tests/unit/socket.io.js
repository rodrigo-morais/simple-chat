'use strict'

import { expect } from 'chai'
import deepFreeze from 'deep-freeze'
import sinon from 'sinon';

import { sendMessage, handleReceive } from '../../app/libs/socket.io';

describe('socket.io', () => {
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

  context('when sendMessage', () => {
    it('should save the message in localStorage', () => {
      sendMessage('user', 'message');
      expect(window.localStorage.getItem.called).to.be.true;
    });

    it('should save the message in localStorage', () => {
      sendMessage('user', 'message');
      expect(window.localStorage.setItem.called).to.be.true;
    });
  });

  context('when handleReceive', () => {
    const cb = sinon.stub();

    it('should save the message in localStorage', () => {
      handleReceive(cb, 'user', 'message');
      expect(window.localStorage.getItem.called).to.be.true;
    });

    it('should save the message in localStorage', () => {
      handleReceive(cb, 'user', 'message');
      expect(window.localStorage.setItem.called).to.be.true;
    });
  });
});
