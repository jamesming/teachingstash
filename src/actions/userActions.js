export function setUser(google_id, loggedIn, name, organization_id, isOrgAdmin, isSuper) {
  return {
    type: 'SET_USER',
    payload: {
      google_id,
      loggedIn,
      name,
      organization_id,
      isOrgAdmin,
      isSuper
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
