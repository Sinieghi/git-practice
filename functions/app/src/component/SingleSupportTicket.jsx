import { useDispatch, useSelector } from "react-redux";
import { timeConvertor } from "../utils/dateOrCurrencyFix";
import Btn from "../animatedContent/Btn";
import {
  clearSingleThicket,
  deleteSingleTicket,
} from "../feature/support/support";

const SingleSupportTicket = () => {
  const { singleTicket, btnLoading } = useSelector((store) => store.support);
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(deleteSingleTicket());
  };

  const localTime = timeConvertor(singleTicket[0]?.createdAt);
  return (
    <article>
      {Boolean(singleTicket.length) && (
        <>
          <button
            type="button"
            onClick={() => dispatch(clearSingleThicket())}
            className="close"
            id="cl"
          >
            &times;
          </button>
          <ul>
            <p>{singleTicket[0].supportOpt}</p>
            <p>{singleTicket[0].phone}</p>
            <p>{singleTicket[0].email}</p>
            <div>
              <p>{singleTicket[0].message}</p>
            </div>
            <p> {singleTicket[0].isOpen && "aberto"}</p>
            <p>{localTime}</p>
          </ul>
          <Btn
            type="button"
            loadingText="Processando"
            text="Deletar"
            height="5rem"
            width="10rem"
            backgroundColor="var(--red-org)"
            btn_background="var(--red-org)"
            loading={btnLoading}
            handleClick={handleClick}
          />
        </>
      )}
    </article>
  );
};

export default SingleSupportTicket;
