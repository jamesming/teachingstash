export function setUser(google_id, loggedIn, name, organization_id, isOrgAdmin, isSuper, isStudent, isTeacher, subdomain_id) {
  return {
    type: 'SET_USER',
    payload: {
      google_id,
      loggedIn,
      name,
      organization_id,
      isOrgAdmin,
      isSuper,
      isStudent,
      isTeacher,
      subdomain_id,
    },
  };
}

export function setSession(session) {
  return {
    type: 'SET_SESSION',
    payload: {
      session
    },
  };
}

export function setJames(isJames) {
  return {
    type: 'SET_JAMES',
    payload: {
      isJames
    },
  };
}
