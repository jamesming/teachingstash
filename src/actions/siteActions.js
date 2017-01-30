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
