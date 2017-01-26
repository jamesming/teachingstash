export default function reducer(state = {
    google_id: '',
    loggedIn: false,
    name: '',
    session: 'none', //  ['none', 'established', 'initiated']
  }, action) {
    switch (action.type) {
      case 'SET_USER': {
        return {
          ...state,
          google_id: action.payload.google_id,
          loggedIn: action.payload.loggedIn,
          name: action.payload.name
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
