export function addFiles(files, folderTitle) {
  return {
    type: 'ADD_FILES',
    payload: {
      files,
      folderTitle
    },
  };
}
