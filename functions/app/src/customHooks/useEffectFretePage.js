import { useEffect, useRef } from "react";
import {
  clearAllFreteOnRender,
  getAllFretes,
  unsetExtPage,
} from "../feature/allFreteSlice/allFreteSlice";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../feature/userFromDataSlice/userDataSlice";
const useEffectFretePage = () => {
  const dispatch = useDispatch();
  let {
    sortStatus,
    name,
    city,

    bodyworkSpecial,
    bodyworkClosed,
    bodyworkOpen,
    colectDate,
    canvas,
    loadType,
    light,
    medium,
    heavy,
    isLoading,
    isSidebarOpen,
    allFretes,
    page,
    firstRenderLoadin,
  } = useSelector((store) => store.allFretes);
  let { userData, isSingleFreteOpen } = useSelector((store) => store.userData);
  const clearAllFreteOnlyOnRender = useRef(false);
  useEffect(() => {
    if (!clearAllFreteOnlyOnRender.current) {
      clearAllFreteOnlyOnRender.current = true;
      dispatch(clearAllFreteOnRender());
    }
    dispatch(unsetExtPage());
    if (!userData) {
      dispatch(getUser());
    }

    const ac = new AbortController();
    ac.signal.addEventListener("abort", () => console.log("Aborted!"), {
      once: true,
    });

    dispatch(getAllFretes({ signal: ac.signal }));
    return () => ac.abort();
  }, [
    city,
    name,
    sortStatus,
    bodyworkSpecial,
    bodyworkClosed,
    bodyworkOpen,
    colectDate,
    canvas,
    loadType,
    light,
    medium,
    heavy,
    isSidebarOpen,
    page,
  ]);
  return {
    userData,
    isSingleFreteOpen,
    isLoading,
    allFretes,
    page,
    firstRenderLoadin,
  };
};

export default useEffectFretePage;
