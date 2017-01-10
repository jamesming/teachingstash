export function setModal(which) {
  return {
    type: 'SET_SHOW',
    payload: {
      which
    },
  };
}
