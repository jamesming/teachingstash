export default function reducer(state = {
    modalshow: 'signup',
    route: 'Files',
    sidemenutop: 160,
  }, action) {
    switch (action.type) {
      case 'SET_MODALSHOW': {
        return {
          ...state,
          modalshow: action.payload.which,
        };
      }
      case 'SET_SIDEMENUTOP': {
        return {
          ...state,
          sidemenutop: action.payload.which,
        };
      }
      default: {
        return state;
      }
    }
}
