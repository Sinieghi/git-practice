export const isFreteDone = (frete) => {
  let fretes = frete.filter((x) => {
    return x.isConcluded === false;
  });
  fretes.forEach((ele) => {
    let index = frete.indexOf(ele);
    frete.splice(index, 100);
  });
  console.log(fretes);
  return fretes;
};
