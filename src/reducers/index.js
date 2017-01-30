import { combineReducers } from 'redux';

import app from './appReducer';
import carousel from './carouselReducer';
import files from './filesReducer';
import site from './siteReducer';
import templates from './templatesReducer';
import user from './userReducer';

export default combineReducers({
  app,
  carousel,
  files,
  site,
  templates,
  user,
});
