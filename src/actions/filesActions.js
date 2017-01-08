export function addFiles(files, folder_title) {
  return {
    type: 'ADD_FILES',
    payload: {
      files,
      folder_title
    },
  };
}
