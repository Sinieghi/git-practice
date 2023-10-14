export const getUniqueValues = (data, type) => {
  let unique = data.map((item) => item[type]);

  return ["all", new Set(unique)];
};

export const toglleBtns = (toggle) => {
  let result = !toggle ? (toggle = true) : (toggle = false);
  console.log(result);
  return result;
};
