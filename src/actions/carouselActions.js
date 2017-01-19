import axios from 'axios';

export function fetchCarousel() {
  return function (dispatch) {
    axios.get(`${window.host}feed/getCarouseljson`)
      .then((response) => {
        dispatch({ type: 'FETCH_CAROUSEL_FULFILLED', payload: response.data });
      })
      .catch((err) => {
        dispatch({ type: 'FETCH_CAROUSEL_REJECTED', payload: err });
      });
  };
}
