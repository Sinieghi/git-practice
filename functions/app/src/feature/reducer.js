import { DISPLAY_HANDLE } from "./actions";

export const reducer = (state, action) => {
  if (action.type === DISPLAY_HANDLE) {
    let { showAside } = state;
    !showAside ? (showAside = true) : (showAside = false);

    return { ...state, showAside };
  }

  throw new Error(`No Match "${action.type}" - action type`);
};
