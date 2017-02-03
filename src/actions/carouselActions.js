import axios from 'axios';

const hasSubdomain = typeof(subdomain) !== 'undefined' && subdomain !== 'www';
if(hasSubdomain) {
  var subdomainParam = `&subsite=${subdomain}`;
} else {
  var subdomainParam = '';
}

export function fetchCarousel() {
  return function (dispatch) {
    axios.get(`${window.host}sites/getCarouseljson?site=${site}${subdomainParam}`)
      .then((response) => {
        dispatch({ type: 'FETCH_CAROUSEL_FULFILLED', payload: response.data });
      })
      .catch((err) => {
        dispatch({ type: 'FETCH_CAROUSEL_REJECTED', payload: err });
      });
  };
}

export function setCarouselFolderId(parentFolderId) {
  return {
    type: 'SET_CAROUSEL_PARENTFOLDERID',
    payload:  parentFolderId,
  };
}

export function generateCarousel(parentFolderId, callback) {
  return function (dispatch) {
    axios.get(`${window.host}sites/generateCarousel?site=${site}${subdomainParam}&parentFolderId=${parentFolderId}`)
      .then((response) => {
        dispatch({ type: 'SET_CAROUSEL_PARENTFOLDERID', payload: parentFolderId });
        console.log(response.data );
        dispatch({ type: 'FETCH_CAROUSEL_FULFILLED', payload: response.data });
        callback();
      })
      .catch((err) => {
        dispatch({ type: 'FETCH_CAROUSEL_REJECTED', payload: err });
      });
  };
}
