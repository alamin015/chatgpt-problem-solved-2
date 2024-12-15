export const filterByMonth = (data, filterState) => {
  const result = data.filter(
    (i) => new Date(i.date).getMonth() + 1 === parseInt(filterState.month)
  );
  return result;
};
export const filterByYear = (data, filterState) => {
  const result = data.filter(
    (i) => new Date(i.date).getFullYear().toString() === filterState.year
  );
  return result;
};
