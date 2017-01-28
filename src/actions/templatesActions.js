import axios from 'axios';

export function fetchTemplates() {
  return function (dispatch) { // 'http://staging.pictographr.com/feed/getAssetsjson'
    axios.get(`${window.host}feed/getMenujson?feed=${feed}`)
      .then((response) => {
        dispatch({ type: 'FETCH_TEMPLATES_FULFILLED', payload: response.data });

        const files = (response.data[0].files ?
              response.data[0].files : response.data[0].sub_folders[0].files);

        dispatch({
          type: 'ADD_FILES',
          payload: {
            files,
            folderTitle: (response.data[0].files ?
                files.title : response.data[0].sub_folders[0].title)
          },
        });
      })
      .catch((err) => {
        dispatch({ type: 'FETCH_TEMPLATES_REJECTED', payload: err });
      });
  };
}

export function generateTemplates(parentFolderId, callback) {
  return function (dispatch) { //https://pictographr.com/feed/createMenu?parentFolderId=0B1nKK3UKG5hjbk5Ba2dLNE9zUW8
    axios.get(`${window.host}feed/createMenu?feed=${feed}&parentFolderId=${parentFolderId}`)
      .then((response) => {
        dispatch({ type: 'FETCH_TEMPLATES_FULFILLED', payload: response.data });

        dispatch({ type: 'SET_PARENTFOLDERID', payload: parentFolderId });

        const files = (response.data[0].files ?
              response.data[0].files : response.data[0].sub_folders[0].files);

        dispatch({
          type: 'ADD_FILES',
          payload: {
            files,
            folderTitle: (response.data[0].files ?
                files.title : response.data[0].sub_folders[0].title)
          },
        });
        callback();
      })
      .catch((err) => {
        dispatch({ type: 'FETCH_TEMPLATES_REJECTED', payload: err });
      });
  };
}

export function fetchAssets() {
  return function (dispatch) {
    axios.get(`${window.host}feed/getAssetsjson?feed=${feed}&`)
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
    axios.get(`${window.host}feed/createAssets?feed=${feed}&format=png&fileId=${activeFileId}`)
      .then((response) => {
        dispatch({ type: 'FETCH_ASSETS_FULFILLED', payload: response.data });
        callback();
      })
      .catch((err) => {
        dispatch({ type: 'FETCH_ASSETS_REJECTED', payload: err });
      });
  };
}

export function renderPDFandPullAssetsJson(activeFileId, callback) {
  return function (dispatch) {
    axios.get(`${window.host}feed/createAssets?feed=${feed}&format=pdf&fileId=${activeFileId}`)
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
