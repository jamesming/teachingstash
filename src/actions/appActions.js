export function setModalShow(which) {
  return {
    type: 'SET_MODALSHOW',
    payload: {
      which
    },
  };
}
export function setRoute(which) {
  return {
    type: 'SET_ROUTE',
    payload: {
      which
    },
  };
}
