import { combineReducers } from 'redux';
import persons from './persons';
import checkInReducer from './checkInReducer';

const rootReducer = combineReducers({
  checkIn: checkInReducer,

});

export default rootReducer
