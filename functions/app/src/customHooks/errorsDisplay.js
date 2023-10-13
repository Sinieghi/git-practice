import { useDispatch } from "react-redux";
import { clearMsg } from "../feature/allFreteSlice/allFreteSlice";

export const inputWarnings = (msg) => {
  let index = 0;
  const dispatch = useDispatch();
  if (msg === "") {
    document.querySelector(`.inp${index}`)?.classList?.add("target-success");
    return;
  }
  if (msg.startsWith("inp1")) index = 1;
  if (msg.startsWith("inp2")) index = 2;
  if (msg.startsWith("inp3")) index = 3;
  if (msg.startsWith("inp4")) index = 4;
  if (msg.startsWith("inp5")) index = 5;
  if (msg.startsWith("inp6")) index = 6;
  if (msg.startsWith("inp7")) index = 7;
  if (msg.startsWith("inp8")) index = 8;
  if (msg.startsWith("inp9")) index = 9;
  if (msg.startsWith("inp10")) index = 10;
  if (msg.startsWith("inp11")) index = 11;
  //target css esta FormsWrapper
  document.querySelector(`.inp${index}`)?.classList?.add("target-fail");
  //   document.querySelector(`.warn_ballon-inp${index}`)?.classList?.add("target");

  setTimeout(() => {
    document.querySelector(`.inp${index}`)?.classList?.remove("target-fail");
    dispatch(clearMsg());
    // document
    //   .querySelector(`.warn_ballon-inp${index}`)
    //   ?.classList?.remove("target");
  }, 1000);
};

export function setTargetToFilterField() {
  const queryParagraphOnFilter = document.querySelectorAll(
    ".paragraph-frete-desc"
  );
  const querInputsOnFilters = document.querySelector(
    ".query_for-filter-inputs"
  );
  querInputsOnFilters?.querySelectorAll(".input").forEach((element, index) => {
    setTimeout(() => {
      if (element.value !== "") {
        queryParagraphOnFilter?.forEach((paragraph) => {
          if (paragraph.classList.value.match(element.name)) {
            paragraph.classList.add("target-search");
            setTimeout(() => {
              paragraph.classList.remove("target-search");
            }, 1000 * 15);
          }
        });
      }
    });
  });
}
