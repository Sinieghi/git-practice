export function openClienteSidebar(open) {
  const query = document.querySelector(".normal-device-client");
  const queryNavbar = document.querySelector(".navbar-content");
  const queryIcon = document.querySelector(".icon-container");
  const queryMobileIconSpan = document.querySelector(".mobile-device");
  if (open) {
    query?.classList.toggle("target-side-cliente-content");
    setTimeout(() => {
      queryIcon?.classList.add("close-side");
      queryMobileIconSpan?.classList.add("transform-x");
    });
  } else {
    query?.classList.remove("target-side-cliente-content");
    queryNavbar?.classList.remove("show-aside");
    queryNavbar?.classList.remove("normal-device");
  }
}

export function markNavigation(pathname) {
  const queryProfile = document.querySelector(".edit-profile-client-side");
  const queryFreight = document.querySelector(".freight-cliente");
  const queryHistoric = document.querySelector(".historic-cliente");
  const querySignatureLink = document.querySelector(".signature-link");
  const queryRemoveAccount = document.querySelector(".remove-account");
  const queryCliente = document.querySelector(".cliente-profile");

  if (pathname === "/client_page/freight") {
    queryFreight?.classList.add("target-navigation");
    queryProfile?.classList.remove("target-navigation");
    queryHistoric?.classList.remove("target-navigation");
    querySignatureLink?.classList.remove("target-navigation");
    queryRemoveAccount?.classList.remove("target-navigation");
    queryCliente?.classList.remove("target-navigation");
  }
  if (pathname === "/client_page/profile") {
    queryProfile?.classList.add("target-navigation");
    queryFreight?.classList.remove("target-navigation");
    queryHistoric?.classList.remove("target-navigation");
    querySignatureLink?.classList.remove("target-navigation");
    queryRemoveAccount?.classList.remove("target-navigation");
    queryCliente?.classList.remove("target-navigation");
  }

  if (pathname === "/client_page/historico-fretes") {
    queryHistoric?.classList.add("target-navigation");
    queryFreight?.classList.remove("target-navigation");
    queryProfile?.classList.remove("target-navigation");
    querySignatureLink?.classList.remove("target-navigation");
    queryRemoveAccount?.classList.remove("target-navigation");
    queryCliente?.classList.remove("target-navigation");
  }

  if (pathname === "/client_page/pagamentos") {
    querySignatureLink?.classList.add("target-navigation");
    queryHistoric?.classList.remove("target-navigation");
    queryFreight?.classList.remove("target-navigation");
    queryProfile?.classList.remove("target-navigation");
    queryRemoveAccount?.classList.remove("target-navigation");
    queryCliente?.classList.remove("target-navigation");
  }

  if (pathname === "/client_page/remover-conta") {
    queryRemoveAccount?.classList.add("target-navigation");
    querySignatureLink?.classList.remove("target-navigation");
    queryHistoric?.classList.remove("target-navigation");
    queryFreight?.classList.remove("target-navigation");
    queryProfile?.classList.remove("target-navigation");
    queryCliente?.classList.remove("target-navigation");
  }
  if (pathname === "/client_page") {
    queryCliente?.classList.add("target-navigation");
    querySignatureLink?.classList.remove("target-navigation");
    queryHistoric?.classList.remove("target-navigation");
    queryFreight?.classList.remove("target-navigation");
    queryProfile?.classList.remove("target-navigation");
    queryRemoveAccount?.classList.remove("target-navigation");
  }
}
