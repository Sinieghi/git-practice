import { UnauthenticatedError } from "../errors/index.js";
const isUserDeleted = (user) => {
  if (user?.isDeletede === true)
    throw new UnauthenticatedError(
      "Infelizmente o senhor deletou a conta, deseja recuperá-la?"
    );
  return;
};

const isFreteDeletede = async (frete) => {
  let fretes = frete?.filter((x) => {
    return x?.isUserDeletede === false;
  });
  fretes.forEach((ele) => {
    let index = frete?.indexOf(ele);
    frete.splice(index, 100);
  });
  return fretes;
};
export { isUserDeleted, isFreteDeletede };
