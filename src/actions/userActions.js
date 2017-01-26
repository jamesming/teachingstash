export function setUser(google_id, loggedIn, name) {
  return {
    type: 'SET_USER',
    payload: {
      google_id,
      loggedIn,
      name
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
