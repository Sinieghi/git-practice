import { useDispatch, useSelector } from "react-redux";
import { timeConvertor } from "../utils/dateOrCurrencyFix";
import {
  clearSingleMessage,
  deleteSingleMessage,
} from "../feature/message/messageSlice";
import Btn from "../animatedContent/Btn";

const SingleMessageComponent = () => {
  const { singleMessage, isLoading } = useSelector((store) => store.message);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(deleteSingleMessage());
  };
  const localTime = timeConvertor(singleMessage[0]?.createdAt);
  return (
    <article className="single-art">
      {Boolean(singleMessage.length) && (
        <>
          <button
            type="button"
            onClick={() => dispatch(clearSingleMessage())}
            className="close"
            id="cl"
          >
            &times;
          </button>
          <ul>
            <p>{singleMessage[0].supportOpt}</p>
            <p>{singleMessage[0].phone}</p>
            <p>{singleMessage[0].email}</p>
            <div>
              <p>{singleMessage[0].message}</p>
            </div>
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
            loading={isLoading}
            handleClick={handleClick}
          />
        </>
      )}
    </article>
  );
};

export default SingleMessageComponent;
