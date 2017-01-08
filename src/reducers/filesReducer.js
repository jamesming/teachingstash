export default function reducer(state = {
    files: [],
    folder_title: '',
  }, action) {
    switch (action.type) {
      case 'ADD_FILES': {
        return {
          ...state,
          files: action.payload.files,
          folderTitle: action.payload.folder_title,
        };
      }
      default: {
        return state;
      }
    }
}
