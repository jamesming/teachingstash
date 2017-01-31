import axios from 'axios';

const hasSubdomain = typeof(subdomain) !== 'undefined' && subdomain !== 'www';
if(hasSubdomain) {
  var subdomainParam = `&subdomain=${subdomain}`;
} else {
  var subdomainParam = '';
}

export function fetchTemplates() {
  return function (dispatch) { // 'http://staging.pictographr.com/sites/getAssetsjson'
    axios.get(`${window.host}sites/getMenujson?domain=${domain}${subdomainParam}`)
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
  return function (dispatch) { //https://pictographr.com/sites/createMenu?parentFolderId=0B1nKK3UKG5hjbk5Ba2dLNE9zUW8
    axios.get(`${window.host}sites/generateMenu?domain=${domain}${subdomainParam}&parentFolderId=${parentFolderId}`)
      .then((response) => {
        dispatch({ type: 'FETCH_TEMPLATES_FULFILLED', payload: response.data });

        dispatch({ type: 'SET_TEMPLATES_PARENTFOLDERID', payload: parentFolderId });

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

export function setModalShow(which) {
  return {
    type: 'SET_MODALSHOW',
    payload: {
      which
    },
  };
}

export function setTemplateFolderId(parentFolderId) {
  return {
    type: 'SET_TEMPLATES_PARENTFOLDERID',
    payload: parentFolderId,
  };
}

export function fetchAssets() {
  return function (dispatch) {
    axios.get(`${window.host}sites/getAssetsjson?domain=${domain}${subdomainParam}&`)
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
    axios.get(`${window.host}sites/createAssets?domain=${domain}&format=png&fileId=${activeFileId}`)
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
    axios.get(`${window.host}sites/createAssets?domain=${domain}${subdomainParam}&format=pdf&fileId=${activeFileId}`)
      .then((response) => {
        dispatch({ type: 'FETCH_ASSETS_FULFILLED', payload: response.data });
        callback();
      })
      .catch((err) => {
        dispatch({ type: 'FETCH_ASSETS_REJECTED', payload: err });
      });
  };
}
