import { combineReducers } from 'redux';

import user from './userReducer';
import files from './filesReducer';
import templates from './templatesReducer';

export default combineReducers({
  user,
  files,
  templates,
});
