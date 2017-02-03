export default function reducer(state = {
    parentFolderUrl: 'https://drive.google.com/open?id=0B1nKK3UKG5hjbk5Ba2dLNE9zUW8',
    templates: [],
    fetching: false,
    fetched: false,
    error: null,
  }, action) {
    switch (action.type) {
      case 'FETCH_TEMPLATES': {
        return { ...state, fetching: true };
      }
      case 'FETCH_TEMPLATES_REJECTED': {
        return { ...state, fetching: false, error: action.payload };
      }
      case 'FETCH_TEMPLATES_FULFILLED': {
        return {
          ...state,
          fetching: false,
          fetched: true,
          templates: action.payload,
        };
      }
      case 'ADD_TEMPLATES': {
        return {
          ...state,
          templates: [...state.templates, action.payload],
        };
      }
      case 'SET_TEMPLATES_PARENTFOLDERURL': {
        return {
          ...state,
          parentFolderId: action.payload,
        };
      }
      case 'FETCH_ASSETS': {
        return { ...state, fetching: true };
      }
      case 'FETCH_ASSETS_REJECTED': {
        return { ...state, fetching: false, error: action.payload };
      }
      case 'FETCH_ASSETS_FULFILLED': {
        return {
          ...state,
          fetching: false,
          fetched: true,
          assets: action.payload,
        };
      }
      default: {
        return state;
      }
    }
}
