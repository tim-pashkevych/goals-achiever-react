export const filterCards = (arr = [], priority = null) => {
  if (priority === null) return arr;
  return arr.filter((el) => el.priority === priority);
};
