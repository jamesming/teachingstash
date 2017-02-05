import axios from 'axios';

const hasSubdomain = typeof(subdomain) !== 'undefined' && subdomain !== 'www';
if(hasSubdomain) {
  var subdomainParam = `&subsite=${subdomain}`;
} else {
  var subdomainParam = '';
}

export function getSite() {
  return function (dispatch) {
    const sitePath = `php/sites?do=get&site=${site}${subdomainParam}`;
    console.log('sitePath: ', sitePath);
    axios.get(sitePath)
      .then((response) => {
        console.log('XXXXXXXXXXXXXXXXXXXX', response);
        // dispatch({
        //     type: 'SET_SITE',
        //     payload: {
        //       description,
        //       keywords,
        //       title,
        //     },
        //   });
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
