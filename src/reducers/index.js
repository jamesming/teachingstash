import { combineReducers } from "redux"

import files from "./filesReducer"
import templates from "./templatesReducer"
import user from "./userReducer"

export default combineReducers({
  files,
  templates,
  user,
})
