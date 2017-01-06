export default function reducer(state={
    files: [],
    folder_title: '',
  }, action) {

    switch (action.type) {

      case "ADD_FILES": {

        return {
          ...state,
          files: action.payload.files,
          folder_title: action.payload.folder_title,
        }
      }

    }

    return state
}
