import { combineReducers } from "redux"

import files from "./filesReducer"
import templates from "./templatesReducer"

export default combineReducers({
  files,
  templates,
})
