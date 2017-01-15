import axios from 'axios';

export function fetchTemplates() {
  return function (dispatch) { // 'http://staging.pictographr.com/feed/getAssetsjson'
    axios.get(`${window.host}feed/getMenujson`)
      .then((response) => {
        dispatch({ type: 'FETCH_TEMPLATES_FULFILLED', payload: response.data });

        dispatch({
          type: 'ADD_FILES',
          payload: {
            files: response.data[0].files,
            folder_title: response.data[0].title
          },
        });
      })
      .catch((err) => {
        dispatch({ type: 'FETCH_TEMPLATES_REJECTED', payload: err });
      });
  };
}

export function fetchAssets() {
  return function (dispatch) {
    axios.get(`${window.host}feed/getAssetsjson`)
      .then((response) => {
        dispatch({ type: 'FETCH_ASSETS_FULFILLED', payload: response.data });
      })
      .catch((err) => {
        dispatch({ type: 'FETCH_ASSETS_REJECTED', payload: err });
      });
  };
}

export function renderPNGandPullAssetsJson(activeFileId, callback) {
  return function (dispatch) {
    axios.get(`${window.host}feed/createPng?fileId=${activeFileId}`)
      .then((response) => {
        dispatch({ type: 'FETCH_ASSETS_FULFILLED', payload: response.data });
        callback();
      })
      .catch((err) => {
        dispatch({ type: 'FETCH_ASSETS_REJECTED', payload: err });
      });
  };
}

export function addTemplate(id, text) {
  return {
    type: 'ADD_TEMPLATE',
    payload: {
      id,
      text,
    },
  };
}

export function updateTemplate(id, text) {
  return {
    type: 'UPDATE_TEMPLATE',
    payload: {
      id,
      text,
    },
  };
}

export function deleteTemplate(id) {
  return { type: 'DELETE_TEMPLATE', payload: id };
}
