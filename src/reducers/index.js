import { combineReducers } from 'redux';

import app from './appReducer';
import files from './filesReducer';
import templates from './templatesReducer';
import user from './userReducer';

export default combineReducers({
  app,
  files,
  templates,
  user,
});
