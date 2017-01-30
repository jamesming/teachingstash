export function setMeta(description, keywords, title) {
  return {
    type: 'SET_META',
    payload: {
      description,
      keywords,
      title,
    },
  };
}

export function setDescription(description) {
  return {
    type: 'SET_DESCRIPTION',
    payload: description,
  };
}

export function setTitle(title) {
  return {
    type: 'SET_TITLE',
    payload: title,
  };
}
