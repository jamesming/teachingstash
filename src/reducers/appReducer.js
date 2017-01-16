export default function reducer(state = {
    modalshow: 'signup',
    route: 'Files',
  }, action) {
    switch (action.type) {
      case 'SET_MODALSHOW': {
        return {
          ...state,
          modalshow: action.payload.which,
        };
      }
      default: {
        return state;
      }
    }
}
