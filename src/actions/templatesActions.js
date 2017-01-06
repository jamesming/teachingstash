import axios from "axios";

export function fetchTemplates() {
  return function(dispatch) {
    axios.get("https://pictographr.com/admin/getTemplatesJsonFile")
      .then((response) => {
        dispatch({type: "FETCH_TEMPLATES_FULFILLED", payload: response.data})
      })
      .catch((err) => {
        dispatch({type: "FETCH_TEMPLATES_REJECTED", payload: err})
      })
  }
}

export function addTemplate(id, text) {
  return {
    type: 'ADD_TEMPLATE',
    payload: {
      id,
      text,
    },
  }
}

export function updateTemplate(id, text) {
  return {
    type: 'UPDATE_TEMPLATE',
    payload: {
      id,
      text,
    },
  }
}

export function deleteTemplate(id) {
  return { type: 'DELETE_TEMPLATE', payload: id}
}
