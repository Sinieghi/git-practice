export function popupActionDeleteManyTicket(open) {
  if (open) {
    document
      .querySelector(".popup_content-ticket-adm")
      .classList.add("show-act");
    document
      .querySelector(".popup_content-cation-ticket-adm")
      .classList.add("show_contente-freight");
  } else {
    setTimeout(() => {
      document
        .querySelector(".popup_content-ticket-adm")
        .classList.remove("show-act");
      document
        .querySelector(".popup_content-cation-ticket-adm")
        .classList.remove("show_contente-freight");
    }, 300);
  }
}

export function popupActionWarnUser(open) {
  if (open) {
    document
      .querySelector(".popup_content-update-warning")
      ?.classList?.add("show-act");
    document
      .querySelector(".popup_content-action-update-warning")
      ?.classList?.add("show_contente-success");
  } else {
    setTimeout(() => {
      document
        .querySelector(".popup_content-update-warning")
        ?.classList?.remove("show-act");
      document
        .querySelector(".popup_content-action-update-warning")
        ?.classList?.remove("show_contente-success");
    }, 300);
  }
}
export function popupActionResendEmail(open) {
  if (open) {
    document
      .querySelector(".popup_content-resend-email")
      ?.classList?.add("show-act");
    document
      .querySelector(".popup_content-cation-resend-email")
      ?.classList?.add("show_contente-resent");
  } else {
    setTimeout(() => {
      document
        .querySelector(".popup_content-resend-email")
        ?.classList?.remove("show-act");
      document
        .querySelector(".popup_content-cation-resend-email")
        ?.classList?.remove("show_contente-resent");
    }, 300);
  }
}

export function popupActionUpdateSigSuccess(open) {
  if (open) {
    document
      .querySelector(".popup_content-update-success")
      ?.classList?.add("show-act");
    document
      .querySelector(".popup_content-action-update-success")
      ?.classList?.add("show_contente-success");
  } else {
    setTimeout(() => {
      document
        .querySelector(".popup_content-update-success")
        ?.classList?.remove("show-act");
      document
        .querySelector(".popup_content-action-update-success")
        ?.classList?.remove("show_contente-success");
    }, 300);
  }
}

export function popupActionSetManyToConcluded(open) {
  if (open) {
    document.querySelector(".popup_content-freight").classList.add("show-act");
    document
      .querySelector(".popup_content-freight-act")
      .classList.add("show_contente-freight");
  } else {
    setTimeout(() => {
      document
        .querySelector(".popup_content-freight")
        .classList.remove("show-act");
      document
        .querySelector(".popup_content-freight-act")
        .classList.remove("show_contente-freight");
    }, 300);
  }
}

export function popupActionDeleteMessages(open) {
  if (open) {
    document
      .querySelector(".popup_content-message-adm")
      .classList.add("show-act");
    document
      .querySelector(".popup_content-cation-message-adm")
      .classList.add("show_contente-freight");
  } else {
    setTimeout(() => {
      document
        .querySelector(".popup_content-message-adm")
        .classList.remove("show-act");
      document
        .querySelector(".popup_content-cation-message-adm")
        .classList.remove("show_contente-freight");
    }, 300);
  }
}
