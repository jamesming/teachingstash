export default function reducer(state = {
    slides: [],
    fetching: false,
    fetched: false,
    error: null,
  }, action) {
    switch (action.type) {
      case 'FETCH_CAROUSEL': {
        return { ...state, fetching: true };
      }
      case 'FETCH_CAROUSEL_REJECTED': {
        return { ...state, fetching: false, error: action.payload };
      }
      case 'FETCH_CAROUSEL_FULFILLED': {
        return {
          ...state,
          fetching: false,
          fetched: true,
          slides: action.payload,
        };
      }
      default: {
        return state;
      }
    }
}
