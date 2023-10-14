import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import Btn from "../../animatedContent/Btn";
import { resentEmail } from "../../feature/userSlice/userSlice";
import { Link } from "react-router-dom";
import { popupActionResendEmail } from "../../utils/popupActionFunc";

export const PopupResendEmailAction = ({ email, password }) => {
  const { isLoading } = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const handleScroll = () => {
    const msgScroll = document.getElementById("messages");
    msgScroll?.scrollIntoView({ behavior: "smooth", block: "center" });
    setTimeout(() => {
      msgScroll?.classList.add("msg-target");
    }, 700);
    setTimeout(() => {
      msgScroll?.classList.remove("msg-target");
    }, 10000);
    popupActionResendEmail(false);
  };
  return (
    <WrapperPopMessResendEmail>
      <div className="popup_content-resend-email">
        <div className="popup_content-cation-resend-email">
          <button
            type="button"
            onClick={() => {
              popupActionResendEmail(false);
            }}
            className="close"
            id="cl"
          >
            &times;
          </button>
          <h3 className="action-description">
            Olá, o email só pode ser reenviado 2 vezes, caso nenhuma dessas
            tentativas o senhor(a) não receba o email peço por gentileza que
            tente registrar um outro email! Ou entre em contato com nosso
            suporte{" "}
            <a href="mailto:onfrete7@gmail.com" className="not-position">
              email
            </a>
            ,{" "}
            <Link onClick={handleScroll} className="not-position">
              mensagem
            </Link>
          </h3>
          <Btn
            type="button"
            loadingText="Processando"
            text="Confirmar"
            height="5rem"
            width="10rem"
            btnBorder="transparent"
            backgroundColor="var(--clr-primary-orange-2)"
            btn_background="var(--clr-primary-orange-2)"
            loading={isLoading}
            handleClick={() => dispatch(resentEmail({ password, email }))}
          />
        </div>
      </div>
    </WrapperPopMessResendEmail>
  );
};
const WrapperPopMessResendEmail = styled.div`
  .popup_content-resend-email {
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
  .popup_content-cation-resend-email {
    position: absolute;
    visibility: hidden;
    display: grid;
    grid-template-rows: 1fr 1fr;
    opacity: 0;
    border-radius: 3px;
    transform: scale(0.3);
    transition: all 0.5s 0.2s;
    width: 80%;
    height: 80%;
    background-color: var(--white);
    text-align: center;
    padding: 5rem;
  }
  .show-act {
    visibility: visible;
    opacity: 1;
  }
  .show_contente-resent {
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

  .not-position {
    position: unset;
  }
`;
