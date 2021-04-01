export const __init__ = INITIAL_STATE => {
  const KEY = {};
  Object
    .keys(INITIAL_STATE)
    .forEach(key => KEY[key] = key);
  return { KEY, INITIAL_STATE };
};
