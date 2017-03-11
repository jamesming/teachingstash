export default function reducer(state = {
    google_id: '',
    isJames: false,
    isOrgAdmin: 0,
    isSuper: 0,
    loggedIn: false,
    name: '',
    organization_id: 0,
    session: 'none', //  ['none', 'established', 'initiated'],
    isStudent: 0,
    isTeacher: 0,
    subdomain_id: -1,
  }, action) {
    switch (action.type) {
      case 'SET_USER': {
        return {
          ...state,
          google_id: action.payload.google_id,
          loggedIn: action.payload.loggedIn,
          name: action.payload.name,
          organization_id: action.payload.organization_id,
          isOrgAdmin: action.payload.isOrgAdmin,
          isSuper: action.payload.isSuper,
          isStudent: action.payload.isStudent,
          isTeacher: action.payload.isTeacher,
          subdomain_id: action.payload.subdomain_id,
        };
      }
      case 'SET_JAMES': {
        return {
          ...state,
          isJames: action.payload.isJames,
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
