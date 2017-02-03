export default function reducer(state = {
    parentFolderUrl: 'https://drive.google.com/open?id=0B1nKK3UKG5hjYXRZbXhsbDliVWM',
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
      case 'SET_CAROUSEL_PARENTFOLDERURL': {
        return {
          ...state,
          parentFolderUrl: action.payload,
        };
      }
      default: {
        return state;
      }
    }
}
