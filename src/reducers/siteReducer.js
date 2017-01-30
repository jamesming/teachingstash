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
      default: {
        return state;
      }
    }
}
