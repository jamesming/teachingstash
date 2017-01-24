export function setUser(google_id, loggedIn) {
  return {
    type: 'SET_USER',
    payload: {
      google_id,
      loggedIn
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
