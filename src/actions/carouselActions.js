import axios from 'axios';

export function fetchCarousel() {
  return function (dispatch) {
    axios.get(`${window.host}sites/getCarouseljson?domain=${domain}&`)
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
    axios.get(`${window.host}sites/generateCarousel?domain=${domain}&parentFolderId=${parentFolderId}`)
      .then((response) => {
        dispatch({ type: 'SET_CAROUSEL_PARENTFOLDERID', payload: parentFolderId });
        dispatch({ type: 'FETCH_CAROUSEL_FULFILLED', payload: response.data });
        callback();
      })
      .catch((err) => {
        dispatch({ type: 'FETCH_CAROUSEL_REJECTED', payload: err });
      });
  };
}
