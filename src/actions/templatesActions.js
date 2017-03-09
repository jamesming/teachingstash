import axios from 'axios';

const hasSubdomain = typeof(subdomain) !== 'undefined' && subdomain !== 'www';
if(hasSubdomain) {
  var subdomainParam = `&subdomain=${subdomain}`;
} else {
  var subdomainParam = '';
}

export function fetchTemplates() {
  return function (dispatch) { // 'http://staging.pictographr.com/sites/getAssetsjson'
    let pathToTemplatesJson = `${window.host}sites/getMenujson?site=${site}${subdomainParam}`;
    if (window.useDemo === 1) pathToTemplatesJson = `${window.host}sites/getMenujson?site=teachingstash`;

    console.log(pathToTemplatesJson);
    axios.get(pathToTemplatesJson)
      .then((response) => {

        dispatch({ type: 'FETCH_TEMPLATES_FULFILLED', payload: response.data.folders });

        dispatch({
          type: 'SET_TEMPLATES_PARENTFOLDERURL',
          payload: `https://drive.google.com/open?id=${response.data.parentFolderId}`
        });

        const files = (response.data.folders[0].files ?
              response.data.folders[0].files : response.data.folders[0].sub_folders[0].files);

        dispatch({
          type: 'ADD_FILES',
          payload: {
            files,
            folderTitle: (response.data.folders[0].files ?
                files.title : response.data.folders[0].sub_folders[0].title)
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
    axios.get(`${window.host}sites/generateMenu?site=${site}${subdomainParam}&parentFolderId=${parentFolderId}`)
      .then((response) => {
        console.log('XXXXXX --- response.data.folders', response.data);
        dispatch({ type: 'FETCH_TEMPLATES_FULFILLED', payload: response.data.folders });

        dispatch({
          type: 'SET_TEMPLATES_PARENTFOLDERURL',
          payload: `https://drive.google.com/open?id=${response.data.parentFolderId}`
        });

        const files = (response.data.folders[0].files ?
              response.data.folders[0].files : response.data.folders[0].sub_folders[0].files);

        dispatch({
          type: 'ADD_FILES',
          payload: {
            files,
            folderTitle: (response.data.folders[0].files ?
                files.title : response.data.folders[0].sub_folders[0].title)
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

export function setTemplateFolderUrl(parentFolderUrl) {
  return {
    type: 'SET_TEMPLATES_PARENTFOLDERURL',
    payload: parentFolderUrl,
  };
}

export function fetchAssets(callback) {
  return function (dispatch) {
    let pathToAssets = `${window.host}sites/getAssetsjson?site=${site}${subdomainParam}&`;
    if (window.useDemo === 1) pathToAssets = `${window.host}sites/getAssetsjson?site=teachingstash`;
    axios.get(pathToAssets)
      .then((response) => {
        dispatch({ type: 'FETCH_ASSETS_FULFILLED', payload: response.data });
        if (typeof (callback) !== 'undefined') callback();
      })
      .catch((err) => {
        dispatch({ type: 'FETCH_ASSETS_REJECTED', payload: err });
      });
  };
}

export function renderPNGandPullAssetsJson(activeFileId, callback) {
  return function (dispatch) {
    let pathToCreateAssets = `${window.host}sites/createAssets?site=${site}${subdomainParam}&format=png&fileId=${activeFileId}`;
    if (window.useDemo === 1) pathToCreateAssets = `${window.host}sites/createAssets?site=teachingstash&format=png&fileId=${activeFileId}`;
    axios.get(pathToCreateAssets)
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
    let pathToCreateAssets = `${window.host}sites/createAssets?site=${site}${subdomainParam}&format=pdf&fileId=${activeFileId}`;
    if (window.useDemo === 1) pathToCreateAssets = `${window.host}sites/createAssets?site=teachingstash&format=pdf&fileId=${activeFileId}`;
    axios.get(pathToCreateAssets)
      .then((response) => {
        dispatch({ type: 'FETCH_ASSETS_FULFILLED', payload: response.data });
        callback();
      })
      .catch((err) => {
        dispatch({ type: 'FETCH_ASSETS_REJECTED', payload: err });
      });
  };
}
