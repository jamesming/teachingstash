export function addUser(google_id, loggedIn) {
  return {
    type: 'SET_USER',
    payload: {
      google_id,
      loggedIn
    },
  };
}
