export const timeConvertor = (colectDate) => {
  const array1 = [new Date(colectDate)];
  const localeString = array1.toLocaleString();
  return localeString;
};
