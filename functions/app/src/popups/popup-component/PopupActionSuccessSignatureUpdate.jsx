import styled from "styled-components";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { popupActionUpdateSigSuccess } from "../../utils/popupActionFunc";
import { openSidebar } from "../../utils/asideOpenEvent";

export const PopupActionSuccessSignatureUpdate = () => {
  const handleScroll = () => {
    const widthQuery = document.querySelector("body").getBoundingClientRect();
    const msgScroll = document.querySelector(".signature-link");
    setTimeout(() => {
      msgScroll?.classList.add("msg-target");
      if (widthQuery.width < 1100) openSidebar(true, true);
    }, 700);
    setTimeout(() => {
      msgScroll?.classList.remove("msg-target");
    }, 10000);
    popupActionUpdateSigSuccess(false);
  };
  useEffect(() => {
    setTimeout(() => {
      let urlNavigate = new URL(window.location.href);
      urlNavigate.searchParams.delete("assinatura");
      window.history.pushState({ path: urlNavigate.href }, "", urlNavigate);
    }, 1000);
  }, []);
  return (
    <WrapperPopMessResendEmail>
      <div className="popup_content-update-success">
        <div className="popup_content-action-update-success">
          <button
            type="button"
            onClick={() => {
              popupActionUpdateSigSuccess(false);
            }}
            className="close"
            id="cl"
          >
            &times;
          </button>
          <h3 className="action-description">
            Tudo certo! Caso o senhor(a) queira conferir os status da assinatura{" "}
            <Link onClick={handleScroll} className="not-position">
              ir
            </Link>
          </h3>
        </div>
      </div>
    </WrapperPopMessResendEmail>
  );
};
const WrapperPopMessResendEmail = styled.div`
  .popup_content-update-success {
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
  .popup_content-action-update-success {
    position: absolute;
    visibility: hidden;
    display: grid;
    grid-template-rows: 1fr 1fr;
    opacity: 0;
    border-radius: 3px;
    transform: scale(0.3);
    transition: all 0.5s 0.2s;
    width: 35rem;
    height: 15rem;
    background-color: var(--white);
    text-align: center;
    padding: 5rem;
  }
  .show-act {
    visibility: visible;
    opacity: 1;
  }
  .show_contente-success {
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
