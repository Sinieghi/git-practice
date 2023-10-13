export function trigger() {
  document.querySelector(`.worker-box`)?.classList.add(`target`);
  setTimeout(() => {
    document.querySelector(`.search-delivery`)?.classList.add(`target`);
  }, 1000);
  setTimeout(() => {
    document.querySelector(`.truck-box`)?.classList.add(`target`);
  }, 2000);
  setTimeout(() => {
    document.querySelector(`.worker-box`)?.classList.remove(`target`);
    document.querySelector(`.search-delivery`)?.classList.remove(`target`);
    document.querySelector(`.truck-box`)?.classList.remove(`target`);
  }, 1000 * 15);
}
