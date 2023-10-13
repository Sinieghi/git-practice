import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getSingleSupportTicket,
  getSupportTickets,
  setHasNextPge,
} from "../feature/support/support";

const useEffectSupport = () => {
  const query = new URLSearchParams(window.location.search);
  const { support, isLoading, hasNextPage, page, supportTicket } = useSelector(
    (store) => store.support
  );

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setHasNextPge(false));
    const ac = new AbortController();
    ac.signal.addEventListener("abort", () => console.log("Aborted!"), {
      once: true,
    });

    if (!supportTicket && query.get("item")) {
      dispatch(getSingleSupportTicket());
    }
    dispatch(getSupportTickets({ signal: ac.signal }));
    return () => ac.abort();
  }, [page]);
  return { support, isLoading, hasNextPage, page };
};
export default useEffectSupport;
