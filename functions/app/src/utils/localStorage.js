export const setUserOnStorage = (user) => {
  localStorage.setItem("user", JSON.stringify(user));
  return;
};
export const getFromLocalStorage = () => {
  const result = localStorage.getItem("user");
  const user = result ? JSON.parse(result) : null;
  return user;
};
export const deletUserFromStorage = () => {
  localStorage.removeItem("user");
  return;
};

export const setFreteStorage = (frete) => {
  localStorage.setItem("frete", JSON.stringify(frete));
};
export const getFreteFromLocalStorage = () => {
  const result = localStorage.getItem("frete");
  const frete = result ? JSON.parse(result) : null;
  return frete;
};
export const deleteFreteFromStorage = () => {
  localStorage.removeItem("frete");
};

export const setFreteShowcaseStorage = (freteClientShowCase) => {
  localStorage.setItem(
    "freteClientShowCase",
    JSON.stringify(freteClientShowCase)
  );
};
export const getFreteShowcaseFromLocalStorage = () => {
  const result = localStorage.getItem("freteClientShowCase");
  const freteClientShowCase = result ? JSON.parse(result) : null;
  return freteClientShowCase;
};
export const deleteFreteShowcaseFromStorage = () => {
  localStorage.removeItem("freteClientShowCase");
};

export const setHistStorage = (historic) => {
  localStorage.setItem("historic", JSON.stringify(historic));
};
export const getHistFromLocalStorage = () => {
  const result = localStorage.getItem("historic");
  const historic = result ? JSON.parse(result) : null;
  return historic;
};
export const deletHistFromStorage = () => {
  localStorage.removeItem("historic");
};

// export const setAdminStorage = (historic) => {
//   localStorage.setItem("historic", JSON.stringify(historic));
// };
// export const getAdminFromLocalStorage = () => {
//   const result = localStorage.getItem("historic");
//   const historic = result ? JSON.parse(result) : null;
//   return historic;
// };
// export const deleteAdminFromStorage = () => {
//   localStorage.removeItem("historic");
// };
setTimeout(() => {
  deleteFreteFromStorage();
  deletHistFromStorage();
  deleteFreteShowcaseFromStorage();
}, 1000 * 60 * 10);
