import { useDispatch, useSelector } from "react-redux";
import { deleteManyMessages } from "../../feature/message/messageSlice";
import styled from "styled-components";
import Btn from "../../animatedContent/Btn";
import { popupActionDeleteMessages } from "../../utils/popupActionFunc";

export const PopupActionBeforeDeleteMessages = () => {
  const { isLoading } = useSelector((store) => store.message);
  const dispatch = useDispatch();

  return (
    <WrapperPopMessAdm>
      <div className="popup_content-message-adm">
        <div className="popup_content-cation-message-adm">
          <button
            type="button"
            onClick={() => {
              popupActionDeleteMessages(false);
            }}
            className="close"
            id="cl"
          >
            &times;
          </button>
          <h3 className="action-description">deletar selecionados?</h3>
          <Btn
            type="button"
            loadingText="Processando"
            text="Confirmar"
            height="5rem"
            width="10rem"
            backgroundColor="var(--clr-primary-orange-2)"
            btn_background="var(--clr-primary-orange-2)"
            loading={isLoading}
            handleClick={() => dispatch(deleteManyMessages())}
          />
        </div>
      </div>
    </WrapperPopMessAdm>
  );
};
const WrapperPopMessAdm = styled.div`
  .popup_content-message-adm {
    position: fixed;
    display: grid;
    height: 100vh;
    width: 100%;
    top: 0;
    left: 0;
    background-color: var(--cus-shade-for-aside-popups);
    opacity: 0;
    visibility: hidden;
    z-index: 9999;
    transition: all 0.3s;
    place-items: center;
  }
  .popup_content-cation-message-adm {
    position: absolute;
    visibility: hidden;
    display: grid;
    grid-template-rows: 1fr 1fr;
    opacity: 0;
    border-radius: 3px;
    transform: scale(0.3);
    transition: all 0.5s 0.2s;
    width: 40rem;
    height: 30rem;
    background-color: var(--white);
    text-align: center;
  }
  .show-act {
    visibility: visible;
    opacity: 1;
  }
  .show_contente-freight {
    visibility: visible;
    opacity: 1;
    transform: scale(1);
  }
  h3 {
    align-self: center;
    font-size: 1.5rem;
  }
  #cl {
    position: absolute;
    right: 1px;
    top: 1px;
  }
  .btn__animated-content {
    height: 9rem;
  }
`;
