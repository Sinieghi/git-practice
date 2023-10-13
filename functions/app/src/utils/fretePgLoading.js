import { useEffect, useRef } from "react";

const container = document.createElement("div");
const loader = document.createElement("div");
container.classList.add("on_infinit-sctroll");
loader.classList.add("loader");
container.appendChild(loader);

export function loading(isLoading) {
  const queryAll = document?.querySelectorAll(".avaible-cont");
  if (isLoading) {
    queryAll[0]?.lastChild?.after(container);
    container.classList.remove("hide-loading");
  } else if (!isLoading) {
    setTimeout(() => {
      container.classList.add("hide-loading");
    });
  }
}

export const useEffectForLoading = (func, dp) => {
  const avoidInitialRender = useRef(false);
  useEffect(() => {
    if (avoidInitialRender.current) {
      func();
    } else {
      avoidInitialRender.current = true;
    }
  }, dp);
};
