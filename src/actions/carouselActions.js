import axios from 'axios';

const hasSubdomain = typeof(subdomain) !== 'undefined' && subdomain !== 'www';
if(hasSubdomain) {
  var subdomainParam = `&subdomain=${subdomain}`;
} else {
  var subdomainParam = '';
}

export function fetchCarousel() {
  return function (dispatch) {
    let carouselPath = `${window.host}sites/getCarouseljson?site=${site}${subdomainParam}`;
    if(window.useDemo === 1) carouselPath = `${window.host}sites/getCarouseljson?site=teachingstash`;
    axios.get(carouselPath)
      .then((response) => {
        dispatch({
          type: 'SET_CAROUSEL_PARENTFOLDERURL',
          payload: `https://drive.google.com/open?id=${response.data.parentFolderId}`
        });
        dispatch({ type: 'FETCH_CAROUSEL_FULFILLED', payload: response.data.files });
      })
      .catch((err) => {
        dispatch({ type: 'FETCH_CAROUSEL_REJECTED', payload: err });
      });
  };
}

export function setCarouselFolderUrl(parentFolderUrl) {
  return {
    type: 'SET_CAROUSEL_PARENTFOLDERURL',
    payload: parentFolderUrl,
  };
}

export function firstSlideUrl(FileUrl) {
  return {
    type: 'SET_CAROUSEL_FIRSTSLIDEURL',
    payload: FileUrl,
  };
}

export function generateCarousel(parentFolderId, callback) {
  return function (dispatch) {
    axios.get(`${window.host}sites/generateCarousel?site=${site}${subdomainParam}&parentFolderId=${parentFolderId}`)
      .then((response) => {
        dispatch({ type: 'FETCH_CAROUSEL_FULFILLED', payload: response.data.files });
        callback();
      })
      .catch((err) => {
        dispatch({ type: 'FETCH_CAROUSEL_REJECTED', payload: err });
      });
  };
}
