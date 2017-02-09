export default function reducer(state = {
    logoUrl: 'https://drive.google.com/open?id=',
    description: '',
    keywords: '',
    organization_id: -1,
    title: '',
  }, action) {
    switch (action.type) {
      case 'SET_SITE': {
        return {
          ...state,
          description: action.payload.description,
          keywords: action.payload.keywords,
          title: action.payload.title,
          organization_id: action.payload.organization_id,
        };
      }
      case 'SET_KEYWORDS': {
        return {
          ...state,
          keywords: action.payload,
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
      case 'SET_LOGOURL': {
        return {
          ...state,
          logoUrl: action.payload,
        };
      }
      default: {
        return state;
      }
    }
}
