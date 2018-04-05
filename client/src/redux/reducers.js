import { combineReducers } from 'redux';
import dietReducer from './modules/diet';
import profileReducer from './modules/profile';
import authReducer from './modules/auth';
import borrowedReducer from './modules/borrowed';
import shareReducer from './modules/share';

export default combineReducers({
  borrowed: borrowedReducer,
  diet: dietReducer,
  profile: profileReducer,
  auth: authReducer,
  share: shareReducer,
});
