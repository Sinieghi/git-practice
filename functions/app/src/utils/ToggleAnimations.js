let cardFlipperHistoric = document.querySelector(".find-hist");
let flipping = document.querySelector("#flipper");
cardFlipperHistoric.addEventListener("click", function () {
  flipping.classList.toggle("is_flipped");
});
