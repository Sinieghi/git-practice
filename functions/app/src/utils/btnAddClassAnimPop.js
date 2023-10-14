export const addSendAnimationsPopup = (loading) => {
  document
    .querySelector(".request__animations-animate-popup")
    ?.classList?.add("request__animations-animate-popup-spin");
  document
    .querySelector(".animated__btn-popup")
    ?.classList?.add("set-colum-popup");
};
export const removeSendAnimationsPopup = () => {
  document
    .querySelector(".request__animations-animate-popup")
    ?.classList?.remove("request__animations-animate-popup-spin");
  document
    .querySelector(".animated__btn-popup")
    ?.classList?.remove("set-colum-popup");
};

export const addSucceededAnimationPopup = () => {
  document
    .querySelector(".btn_text-popup")
    ?.classList?.add("submit__succeeded-popup");
  document
    .querySelector(".request__animations-animate-popup")
    ?.classList?.add("submit__succeeded-popup");
  document
    .querySelector(".unset__animation-popup")
    ?.classList?.add("set_animation-on-success-popup");
  ("request__animations-animate-popup-spin");
};

export const removeSucceededAnimationPopup = ({ dispatch }) => {
  setTimeout(() => {
    document
      .querySelector(".unset__animation-popup")
      ?.classList?.remove("set_animation-on-success-popup");
    document
      .querySelector(".btn_text-popup")
      ?.classList?.remove("submit__succeeded-popup");
    document
      .querySelector(".request__animations-animate-popup")
      ?.classList?.remove("submit__succeeded-popup");
    document
      .querySelector(".request__animations-animate-popup")
      ?.classList?.remove("request__animations-animate-popup-spin");
    document
      .querySelector(".animated__btn-popup")
      ?.classList?.remove("set-colum-popup");
    dispatch(clearMsgAndloadingState());
  }, 1000 * 5);
};
