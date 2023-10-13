import { Wrapper as PopupWrapper } from "../../assets/Wrappers/PopupsWrapper";
import Btn from "../../animatedContent/Btn";
import { useDispatch, useSelector } from "react-redux";
import { deleteManyTicket } from "../../feature/support/supportSlice";
import { setUrlOnClickHandler } from "../../utils/beforeActionHandler";

const PopupBeforeAction = () => {
  const { btnLoading } = useSelector((store) => store.support);
  const dispatch = useDispatch();

  return (
    <PopupWrapper>
      <div className="popup_content">
        <div className="popup_content-display-actions">
          <button
            type="button"
            onClick={() => {
              setUrlOnClickHandler({
                eventType: "close",
              });
            }}
            className="close"
            id="cl"
          >
            &times;
          </button>
          <Btn
            type="button"
            loadingText="Processando"
            text="Deletar-totodos"
            height="5rem"
            width="10rem"
            backgroundColor="var(--red-org)"
            btn_background="var(--red-org)"
            loading={btnLoading}
            handleClick={() => dispatch(deleteManyTicket())}
          />
        </div>
      </div>
    </PopupWrapper>
  );
};

export default PopupBeforeAction;
