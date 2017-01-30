export default function reducer(state = {
    description: '',
    keywords: [],
    title: '',
  }, action) {
    switch (action.type) {
      case 'SET_META': {
        return {
          ...state,
          description: action.payload.description,
          site: action.payload.site,
          title: action.payload.title,
        };
      }
      case 'SET_DESCRIPTION': {
        return {
          ...state,
          description: action.payload,
        };
      }
      case 'SET_TITLE': {
        return {
          ...state,
          title: action.payload,
        };
      }
      default: {
        return state;
      }
    }
}
