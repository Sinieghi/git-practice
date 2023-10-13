import { setUrlOnClickHandler } from "../../utils/beforeActionHandler";
import styled from "styled-components";

const AdminPrivateLinks = ({ url, urlMessage }) => {
  if (!url && !urlMessage) return;
  return (
    <Wrapper>
      <div className="popup_content-admin-link">
        <div className="popup_content-display-actions-admin-link">
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
          <a href={url}>supp</a>
          <a href={urlMessage}>messages</a>
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  text-align: center;
  a {
    font-size: 2rem;
  }
  .popup_content-admin-link {
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
  }
  .popup_content-display-actions-admin-link {
    position: absolute;
    visibility: hidden;
    opacity: 0;
    border-radius: 3px;
    transform: scale(0.3);
    transition: all 0.5s 0.2s;
    position: absolute;
    visibility: hidden;
  }
  .popup_content-display-actions-admin-link {
    justify-self: center;
    margin-top: 20%;
    width: 30%;
    height: 20rem;
    background-color: var(--white);
    box-shadow: var(--shadow-4);
  }
  .show {
    visibility: visible;
    opacity: 1;
  }
  .show_contente {
    visibility: visible;
    opacity: 1;
    transform: scale(1);
  }
`;
export default AdminPrivateLinks;
