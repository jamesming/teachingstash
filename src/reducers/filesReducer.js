export default function reducer(state = {
    files: [],
    folder_title: '',
  }, action) {
    switch (action.type) {
      case 'ADD_FILES': {
        return {
          ...state,
          files: action.payload.files,
          folderTitle: action.payload.folderTitle,
        };
      }
      default: {
        return state;
      }
    }
}
