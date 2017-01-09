export default function reducer(state = {
    files: [],
    folder_title: '',
    activeFileId: '',
  }, action) {
    switch (action.type) {
      case 'ADD_FILES': {
        return {
          ...state,
          files: action.payload.files,
          folderTitle: action.payload.folderTitle,
        };
      }
      case 'SET_FILE': {
        return {
          ...state,
          activeFileId: action.payload.activeFileId,
        };
      }
      default: {
        return state;
      }
    }
}
