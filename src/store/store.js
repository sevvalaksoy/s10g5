import { reducer } from './reducers/index.js';
import { applyMiddleware, legacy_createStore as createStore } from 'redux';
import { thunk } from 'redux-thunk';
import { logger } from 'redux-logger';

export const myStore = createStore(reducer, applyMiddleware(thunk, logger));
