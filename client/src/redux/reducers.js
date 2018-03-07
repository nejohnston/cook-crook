import { combineReducers } from 'redux';
import dietsReducer from './modules/diets';
import profileReducer from './modules/profile';
import authReducer from './modules/auth';
import borrowedReducer from './modules/borrowed';
import shareReducer from './modules/share';

export default combineReducers({
  borrowed: borrowedReducer,
  diets: dietsReducer,
  profile: profileReducer,
  auth: authReducer,
  share: shareReducer,
});
