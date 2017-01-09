export function addFiles(files, folderTitle) {
  return {
    type: 'ADD_FILES',
    payload: {
      files,
      folderTitle
    },
  };
}

export function setActiveFileId(activeFileId) {
  return {
    type: 'SET_FILE',
    payload: {
      activeFileId
    },
  };
}

