import axios from 'axios';

const hasSubdomain = typeof(subdomain) !== 'undefined' && subdomain !== 'www';
if(hasSubdomain) {
  var subdomainParam = `&subsite=${subdomain}`;
} else {
  var subdomainParam = '';
}

export function getSite() {
  return function (dispatch) {
    const sitePath = `sites.php?do=get&site=${site}${subdomainParam}`;
    axios.get(sitePath)
      .then((response) => {
        dispatch({
            type: 'SET_SITE',
            payload: {
              description: response.data.description,
              keywords: response.data.keywords,
              title: response.data.title,
            },
          });
        })
      .catch((err) => {

      });
  };
}


export function setSite(title, description, keywords, callback) {
  return function (dispatch) {
    const paramStr = `
      &description=${description}
      &title=${title}
      &keywords=${keywords}
    `;
    const sitePath = `sites.php?do=set&site=${site}${subdomainParam}${paramStr}`;
    axios.get(sitePath)
      .then((response) => {
        dispatch({
            type: 'SET_SITE',
            payload: {
              description: response.data.description,
              keywords: response.data.keywords,
              title: response.data.title,
            },
          });
        callback();
        })
      .catch((err) => {

      });
  };
}

export function getLogoJson() {
  return function (dispatch) {
    axios.get(`${window.host}sites/getLogoJson?site=${site}${subdomainParam}`)
      .then((response) => {
        dispatch({
          type: 'SET_LOGOURL',
          payload: `https://drive.google.com/open?id=${response.data.fileId}`
        });
      })
      .catch((err) => {

      });
  };
}

export function renderLogo(fileId, callback) {
  return function (dispatch) {
    axios.get(`${window.host}sites/renderLogo?site=${site}${subdomainParam}&fileId=${fileId}`)
      .then((response) => {
        dispatch({
          type: 'SET_LOGOURL',
          payload: `https://drive.google.com/open?id=${response.data.fileId}`
        });
        callback();
      })
      .catch((err) => {

      });
  };
}

export function setDescription(description) {
  return {
    type: 'SET_DESCRIPTION',
    payload: description,
  };
}

export function setTitle(title) {
  return {
    type: 'SET_TITLE',
    payload: title,
  };
}

export function setLogoUrl(logoUrl) {
  return {
    type: 'SET_LOGOURL',
    payload: logoUrl,
  };
}
