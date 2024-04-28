export const filterColumns = (arr, filter) => {
  return arr.filter((el) => el._id !== filter);
};
