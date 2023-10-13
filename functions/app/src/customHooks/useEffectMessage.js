import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllMessages, setHasNextPge } from "../feature/message/messageSlice";

const useEffectMessage = () => {
  const { message, isLoading, hasNextPage, page, supportTicket } = useSelector(
    (store) => store.message
  );

  const dispatch = useDispatch();
  useEffect(() => {
    const query = new URLSearchParams(window.location.search);
    const ac = new AbortController();
    dispatch(setHasNextPge(false));
    ac.signal.addEventListener("abort", () => console.log("Aborted!"), {
      once: true,
    });

    if (!supportTicket && query.get("item")) {
      //   dispatch(getSingleMessage());
    }
    dispatch(getAllMessages({ signal: ac.signal }));
    return () => ac.abort();
  }, [page]);
  return { message, isLoading, hasNextPage, page };
};
export default useEffectMessage;
