export function openSidebar(open, openOn) {
  const query = document.querySelector(".navbar-content");
  const queryMobileIcon = document.querySelector(".icon-container");
  const queryMobileIconSpan = document.querySelector(".mobile-device");
  const queryClienteNavbar = document?.querySelector(".normal-device-client");
  const shadeBackGround = document.querySelector(".menu-shade-background");

  if (open) {
    query.classList.toggle("show-aside");
    query.classList.toggle("normal-device");
    queryMobileIcon.classList.toggle("close-side");
    queryMobileIconSpan.classList.toggle("transform-x");
    shadeBackGround.classList.toggle("target-shade");
    setTimeout(() => {
      queryClienteNavbar?.classList?.remove("target-side-cliente-content");
    });
  } else {
    query.classList.remove("show-aside");
    query.classList.add("normal-device");
    queryMobileIcon.classList.remove("close-side");
    queryMobileIconSpan.classList.remove("transform-x");
  }
  if (openOn) {
    setTimeout(() => {
      queryClienteNavbar?.classList?.add("target-side-cliente-content");
    });
  }
}

export function showAsideFilters(open) {
  const filterComponent = document.querySelector(".aside-cnt");
  const closeBtn = document.querySelector(".close-container");
  if (open) {
    filterComponent.classList.toggle("active-fil");
    closeBtn.classList.toggle("active-fil");
  }
}
