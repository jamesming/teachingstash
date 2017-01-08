export default function reducer(state = {
    google_id: '',
    loggedIn: false,
  }, action) {
    switch (action.type) {
      case 'SET_USER': {
        return {
          ...state,
          google_id: action.payload.google_id,
          loggedIn: action.payload.loggedIn
        };
      }
      default: {
        return state;
      }
    }
}
