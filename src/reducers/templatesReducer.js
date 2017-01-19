export default function reducer(state = {
    templates: [],
    fetching: false,
    fetched: false,
    error: null,
  }, action) {
    switch (action.type) {
      case 'FETCH_TEMPLATES': {
        return { ...state, fetching: true };
      }
      case 'FETCH_TEMPLATES_REJECTED': {
        return { ...state, fetching: false, error: action.payload };
      }
      case 'FETCH_TEMPLATES_FULFILLED': {
        return {
          ...state,
          fetching: false,
          fetched: true,
          templates: action.payload,
        };
      }
      case 'ADD_TEMPLATES': {
        return {
          ...state,
          templates: [...state.templates, action.payload],
        };
      }
      case 'UPDATE_TEMPLATES': {
        const { id } = action.payload;
        const newTemplates = [...state.templates];
        const templateToUpdate = newTemplates.findIndex(template => template.id === id);
        newTemplates[templateToUpdate] = action.payload;

        return {
          ...state,
          templates: newTemplates,
        };
      }
      case 'DELETE_TEMPLATES': {
        return {
          ...state,
          templates: state.templates.filter(template => template.id !== action.payload),
        };
      }
      case 'FETCH_ASSETS': {
        return { ...state, fetching: true };
      }
      case 'FETCH_ASSETS_REJECTED': {
        return { ...state, fetching: false, error: action.payload };
      }
      case 'FETCH_ASSETS_FULFILLED': {
        return {
          ...state,
          fetching: false,
          fetched: true,
          assets: action.payload,
        };
      }
      default: {
        return state;
      }
    }
}
