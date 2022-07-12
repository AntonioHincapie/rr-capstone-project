import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import CrytoReducer from './GetCurrencyReducer';

const RootReducer = combineReducers({
  cryptos: CrytoReducer,
});

const store = createStore(RootReducer, applyMiddleware(thunk, logger));

export default store;
