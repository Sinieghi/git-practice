import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsers, setHasNextPge } from "../feature/admin/adminSlice";

//possível implementação para o futuro
const useEffectUserPage = () => {
  const query = new URLSearchParams(window.location.search);
  const { users, isLoading, hasNextPage, page } = useSelector(
    (store) => store.admin
  );

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setHasNextPge(false));
    const ac = new AbortController();
    ac.signal.addEventListener("abort", () => console.log("Aborted!"), {
      once: true,
    });

    if (!users && query.get("item")) {
      dispatch(getAllUsers());
    }
    dispatch(getAllUsers({ signal: ac.signal }));
    return () => ac.abort();
  }, [page]);
  return { users, isLoading, hasNextPage, page };
};
export default useEffectUserPage;
