const PrivateRoute = ({ children }) => {
  new Promise((resolve, reject) => {
    fetch("/api/v1/users/single-user").then((res) => {
      if (res.status == 200) {
        resolve();
      } else {
        reject("Não esta autorizado");
      }
    });
  })
    .then()
    .catch((err) => {
      window.location.assign("/");
      console.log(err);
    });
  return children;
};

export default PrivateRoute;
