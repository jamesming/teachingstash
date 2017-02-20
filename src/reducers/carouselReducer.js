export default function reducer(state = {
    fetching: false,
    error: null,
    fetched: false,
    slides: [],
    parentFolderUrl: 'https://drive.google.com/open?id=',
    firstSlideUrl: 'https://drive.google.com/open?id=',
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
      case 'SET_CAROUSEL_FIRSTSLIDEURL': {
        return {
          ...state,
          firstSlideUrl: action.payload,
        };
      }
      default: {
        return state;
      }
    }
}
