export default function reducer(state = {
    show: 'preview',
  }, action) {
    switch (action.type) {
      case 'SET_SHOW': {
        return {
          ...state,
          show: action.payload.which,
        };
      }
      default: {
        return state;
      }
    }
}
