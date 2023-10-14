import {
  setAddHistoric,
  setEditHistoric,
} from "../feature/historic/historicSlice";

export const handleClick = ({ data, isEditing }, dispatch) => {
  setTimeout(() => {
    document.querySelector(".popup_add-hist")?.classList.add("show");
    document
      .querySelector(".popup_content-add-hist")
      ?.classList.add("show_contente");
  });
  if (isEditing) {
    return dispatch(
      setEditHistoric({
        hist: data,
      })
    );
  }
  dispatch(setAddHistoric({ _id: data }));
};
