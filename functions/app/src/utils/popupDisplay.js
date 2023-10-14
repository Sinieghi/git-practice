export const popupDisplay = ({ linkTowhereNavigate }) => {
  setTimeout(() => {
    const show = document.querySelector(".popup_content");
    const showContent = document.querySelector(".popup_content-display-form");
    if (!show || !showContent)
      return (window.location.href = linkTowhereNavigate);
    show.classList.add("show");
    showContent.classList.add("show_contente");
  });
};
export const popupDisplayMessageForm = ({ linkTowhereNavigate }) => {
  setTimeout(() => {
    const show = document.querySelector(".popup_content");
    const showContent = document.querySelector(
      ".popup_content-display-form-message"
    );
    if (!show || !showContent)
      return (window.location.href = linkTowhereNavigate);
    show.classList.add("show");
    showContent.classList.add("show_contente");
  });
};
export const popupDisplayLinks = ({ linkTowhereNavigate }) => {
  setTimeout(() => {
    const show = document.querySelector(".popup_content-links");
    const showContent = document.querySelector(".popup_content-display-links");
    if (!show || !showContent) {
      return (window.location.href = linkTowhereNavigate);
    }
    show.classList.add("show");
    showContent.classList.add("show_contente");
  });
};
export const hidePopup = () => {
  setTimeout(() => {
    const show = document.querySelector(".popup_content");
    const showContent = document.querySelector(".popup_content-display");
    if (!show || !showContent) return;
    show.classList.remove("show");
    showContent.classList.remove("show_contente");
  });
};

//ballons
export const showBallons = ({ index }) => {
  document
    .querySelector(index ? `.ballon-setup-${index}` : ".ballon-setup")
    .classList.replace(
      index ? `ballon-${index}` : "ballon",
      index ? `ballon-active-${index}` : "ballon-active"
    );
  document
    .querySelector(
      index ? `.ballon_text-container-${index}` : ".ballon_text-container"
    )
    .classList.replace(
      index ? `idle-text-${index}` : "idle-text",
      index ? `active-text-${index}` : "active-text"
    );
};

export const hideBallons = ({ index }) => {
  document
    .querySelector(index ? `.ballon-setup-${index}` : ".ballon-setup")
    .classList.replace(
      index ? `ballon-active-${index}` : "ballon-active",
      index ? `ballon-${index}` : "ballon"
    );
  document

    .querySelector(
      index ? `.ballon_text-container-${index}` : ".ballon_text-container"
    )
    .classList.replace(
      index ? `active-text-${index}` : "active-text",
      index ? `idle-text-${index}` : "idle-text"
    );
};

export const alreadyAtMaxUpdates = ({ index }) => {
  setTimeout(() => {
    document
      .querySelector(`.ballon_text-container-${index}`)
      ?.classList?.add("already_on-limit-text");
    document
      .querySelector(`.ballon_text-container-${index}`)
      ?.setAttribute("id", "already_on-limit-text");
    document
      .querySelector(`.pulsing__animation-${index}`)
      ?.classList?.add(`already_on-limit`);
  });
};
