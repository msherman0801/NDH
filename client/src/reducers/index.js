import { combineReducers } from 'redux';
import personsReducer from './personsReducer';
import checkInReducer from './checkInReducer';
import disasterReducer from './disasterReducer';

const rootReducer = combineReducers({
  checkIn: checkInReducer,
  disaster: disasterReducer,
  persons: personsReducer
});

export default rootReducer
