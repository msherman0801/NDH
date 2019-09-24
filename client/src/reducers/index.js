import { combineReducers } from 'redux';
import personsReducer from './personsReducer';
import checkInReducer from './checkInReducer';
import disasterReducer from './disasterReducer';
import partnersReducer from './partnersReducer';

const rootReducer = combineReducers({
  checkIn: checkInReducer,
  disaster: disasterReducer,
  persons: personsReducer,
  partners: partnersReducer
});

export default rootReducer
