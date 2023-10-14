import { useCallback, useRef } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import useEffectSupport from "../customHooks/useEffectSupport";
import SupportTicketsContainer from "../component/SupportTicketsContainer";
import { EditSupportTicket, SingleSupportTicket } from "../component";
import Btn from "../animatedContent/Btn";
import { Link } from "react-router-dom";
import { PopupActionBeforeDeleteTicket } from "../popups/popup-component/PopupTickAdmPage";
import { changePage } from "../feature/support/support";
import { popupActionDeleteManyTicket } from "../utils/popupActionFunc";

const AdminPage = () => {
  const dispatch = useDispatch();
  let { support, isLoading, hasNextPage, page } = useEffectSupport();
  const intObserver = useRef();
  const lastPostRef = useCallback(
    (supportContent) => {
      if (isLoading) return;
      if (intObserver.current) intObserver.current.disconnect();
      intObserver.current = new IntersectionObserver((supportContent) => {
        if (supportContent[0]?.isIntersecting && hasNextPage) {
          dispatch(changePage(page + 1));
        }
      });
      if (supportContent) intObserver.current.observe(supportContent);
    },
    [isLoading, hasNextPage]
  );
  const content = support.map((supData, index) => {
    if (support.length === index + 1) {
      return (
        <SupportTicketsContainer
          ref={lastPostRef}
          key={index + 1}
          support={supData}
          index={index}
        />
      );
    }
    return (
      <SupportTicketsContainer support={supData} key={index} index={index} />
    );
  });
  const handleClick = () => {
    popupActionDeleteManyTicket(true);
  };
  const handleClickLink = () => {
    window.location.pathname = "/admin-checkout/messages-page";
  };
  return (
    <>
      <Wrapper>
        <PopupActionBeforeDeleteTicket />
        <div className="support">{content}</div>
        <div className="single__ticket">
          <SingleSupportTicket />
        </div>
        <div className="edit__container">
          <EditSupportTicket />
        </div>
        <div className="delete__many-container">
          {/* colar um popup para confirmar o patch e deletes */}
          <Btn
            type="button"
            loadingText="Processando"
            text="Deletar"
            height="5rem"
            width="10rem"
            handleClick={handleClick}
            loading={isLoading}
          />
        </div>
        <Link className="paths" onClick={handleClickLink}>
          messages
        </Link>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.section`
  min-height: calc(100vh - 75px);
  display: grid;
  grid-template-columns: 1fr 1fr;
  row-gap: 0;
  .support {
    grid-area: sup;
    overflow-y: scroll;
    max-height: 90vh;
  }
  article {
    box-shadow: var(--shadow-3);
    position: relative;
    min-height: 30rem;
    padding: 5rem;
    font-size: 1.4rem;
    input {
      position: absolute;
      right: 0;
      top: 0;
    }
    .animated__btn {
      position: absolute;
      bottom: -10rem;
      right: 0;
    }
    #cl,
    .close {
      position: absolute;
      right: 0;
      top: 0;
    }
  }
  .single__ticket {
    grid-area: single;
    padding: 5rem;
  }
  .edit__container {
    grid-area: edit;
    padding: 5rem;
  }
  .delete__many-container {
    grid-area: many;
  }
  grid-template-areas:
    "sup single"
    "sup edit"
    "many many";
  .paths {
    font-size: 2rem;
    position: absolute;
  }
`;
export default AdminPage;
