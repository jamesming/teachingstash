export default function reducer(state = {
    google_id: '',
    loggedIn: false,
    name: '',
    organization_id: 0,
    session: 'none', //  ['none', 'established', 'initiated']
  }, action) {
    switch (action.type) {
      case 'SET_USER': {
        return {
          ...state,
          google_id: action.payload.google_id,
          loggedIn: action.payload.loggedIn,
          name: action.payload.name,
          organization_id: action.payload.organization_id
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
