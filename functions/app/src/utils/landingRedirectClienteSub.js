export async function landingRedirectTarget(userData) {
  const query = new URLSearchParams(window.location.search);
  if (!query.get("sessionId") && userData) {
    let urlNavigate = new URL(window.location.href);
    urlNavigate.searchParams.set(
      "sessionId",
      `${userData.subscriptionID?._id}`
    );
    window.history.pushState({ path: urlNavigate.href }, "", urlNavigate.href);
  }
  setTimeout(() => {
    if (query.get("att_page") === "atualizar") {
      setTimeout(() => {
        document.querySelector(".ref-link")?.classList.add("target");
      });
      setTimeout(() => {
        document.querySelector(".ref-link")?.classList.remove("target");
        let urlNavigate = new URL(window.location.href);
        urlNavigate.searchParams.delete("att_page", `atualizar`);
        window.history.pushState(
          { path: urlNavigate.href },
          "",
          urlNavigate.href
        );
      }, 2000);
    }
  }, 1000);
}
export function targetUpdate() {
  const link = document.querySelector(".link-ref-update");
  link?.classList.add("target-redirect-from-product");
  setTimeout(() => {
    link?.classList.remove("target-redirect-from-product");
    let urlNavigate = new URL(window.location.href);
    urlNavigate.searchParams.delete("atualizar_minha_assinatura");
    window.history.pushState({ path: urlNavigate.href }, "", urlNavigate.href);
  }, 5000);
}
