export function addTarget(classQuery, classTarget) {
  switch (classQuery) {
    case "básico":
      document.querySelector(`.${classTarget[0]}`)?.classList.add("target-0");
      document.querySelector(`.${classTarget[0]}`).scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
      setTimeout(() => {
        classTarget.forEach((e) => {
          document.querySelector(`.${e}`)?.classList.remove("target-0");
        });
      }, 5000);
      break;
    case "avançado":
      document.querySelector(`.${classTarget[1]}`)?.classList.add("target-1");
      document.querySelector(`.${classTarget[1]}`).scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
      setTimeout(() => {
        classTarget.forEach((e) => {
          document.querySelector(`.${e}`)?.classList.remove("target-1");
        });
      }, 5000);
      break;
    case "premium":
      document.querySelector(`.${classTarget[2]}`)?.classList.add("target-2");
      document.querySelector(`.${classTarget[2]}`).scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
      setTimeout(() => {
        classTarget.forEach((e) => {
          document.querySelector(`.${e}`)?.classList.remove("target-2");
        });
      }, 5000);
      break;
  }
}
