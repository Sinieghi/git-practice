import { clearMsgAndloadingState } from "../feature/freteSlice/freteSlice";
export const addSendAnimations = (loading) => {
  if (loading) {
    document
      .querySelector(".request__animations-animate")
      ?.classList?.add("request__animations-animate-spin");
    document.querySelector(".animated__btn")?.classList?.add("set-colum");
  } else {
    document
      .querySelector(".request__animations-animate")
      ?.classList?.remove("request__animations-animate-spin");
    document.querySelector(".animated__btn")?.classList?.remove("set-colum");
  }
};
export const removeSendAnimations = () => {};

export const addSucceededAnimation = () => {
  document.querySelector(".btn_text")?.classList?.add("submit__succeeded");
  document
    .querySelector(".request__animations-animate")
    ?.classList?.add("submit__succeeded");
  document
    .querySelector(".unset__animation")
    ?.classList?.add("set_animation-on-success");
  ("request__animations-animate-spin");
};
export const removeSucceededAnimation = ({ dispatch }) => {
  setTimeout(() => {
    document
      .querySelector(".unset__animation")
      ?.classList?.remove("set_animation-on-success");
    document.querySelector(".btn_text")?.classList?.remove("submit__succeeded");
    document
      .querySelector(".request__animations-animate")
      ?.classList?.remove("submit__succeeded");
    document
      .querySelector(".request__animations-animate")
      ?.classList?.remove("request__animations-animate-spin");
    document.querySelector(".animated__btn")?.classList?.remove("set-colum");
    dispatch(clearMsgAndloadingState());
  }, 1000 * 5);
};

export const handleMouseEnter = ({ pNumber }) => {
  document
    .querySelector(`.animation-${pNumber}`)
    ?.classList?.add("animated-hover");
};
export const handleMouseLeave = ({ pNumber }) => {
  document
    .querySelector(`.animation-${pNumber}`)
    ?.classList?.remove("animated-hover");
};

document.querySelector("#cl")?.addEventListener("mouseenter", () => {
  document.querySelector("#cl")?.classList?.add("hover-bcg");
  setTimeout(() => {
    document.querySelector("#cl")?.classList?.remove("hover-bcg");
  }, 200);
});
document.querySelector("#cl")?.addEventListener("mouseleave", () => {
  document.querySelector("#cl")?.classList?.remove("hover-bcg");
});
