export function navigator(queryItem, item, url) {
  let urlNavigate = new URL(window.location.href);
  if (url) {
    window.history.pushState({ path: urlNavigate.href }, "", url);
    return;
  }
  urlNavigate.searchParams.set(queryItem, `${item}`);
  window.history.pushState({ path: urlNavigate.href }, "", urlNavigate.href);
}
