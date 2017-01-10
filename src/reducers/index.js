import { combineReducers } from 'redux';

import user from './userReducer';
import files from './filesReducer';
import modal from './modalReducer';
import templates from './templatesReducer';

export default combineReducers({
  user,
  files,
  modal,
  templates,
});
