import styled from "styled-components";
import { popupActionWarnUser } from "../../utils/popupActionFunc";
export const PopupWarnUserAboutHisCurrentPlan = ({ userData }) => {
  return (
    <WrapperPopWraningAboutHisCurrentPlan>
      <div className="popup_content-update-warning">
        <div className="popup_content-action-update-warning">
          <button
            type="button"
            onClick={() => {
              popupActionWarnUser(false);
            }}
            className="close"
            id="cl"
          >
            &times;
          </button>
          <h3 className="action-description">
            Ola {userData?.name} você já esta registrado neste plano! Conheça
            nossos outros planos caso o senhor(a) precise de um upgrade.
          </h3>
        </div>
      </div>
    </WrapperPopWraningAboutHisCurrentPlan>
  );
};
const WrapperPopWraningAboutHisCurrentPlan = styled.div`
  .popup_content-update-warning {
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
  .popup_content-action-update-warning {
    position: absolute;
    visibility: hidden;
    display: grid;
    grid-template-rows: 1fr 1fr;
    opacity: 0;
    border-radius: 3px;
    transform: scale(0.3);
    transition: all 0.5s 0.2s;
    width: 50%;
    height: 50%;
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
