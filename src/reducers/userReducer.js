export default function reducer(state = {
    google_id: '',
    loggedIn: false,
    session: 'none' //  ['none', 'established', 'initiated']
  }, action) {
    switch (action.type) {
      case 'SET_USER': {
        return {
          ...state,
          google_id: action.payload.google_id,
          loggedIn: action.payload.loggedIn
        };
      }
      case 'SET_SESSION': {
        return {
          ...state,
          session: action.payload.session
        };
      }
      default: {
        return state;
      }
    }
}
