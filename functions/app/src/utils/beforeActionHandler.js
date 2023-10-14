export function setUrlOnClickHandler({ eventType }) {
  if (eventType === "set") {
    document.querySelector(".popup_content-admin-link")?.classList?.add("show");
    document
      .querySelector(".popup_content-display-actions-admin-link")
      ?.classList?.add("show_contente");
  }
  if (eventType === "close") {
    document
      .querySelector(".popup_content-admin-link")
      ?.classList?.remove("show");
    document
      .querySelector(".popup_content-display-actions-admin-link")
      ?.classList?.remove("show_contente");
  }
}
