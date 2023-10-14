import { useCallback, useRef } from "react";
import { useDispatch } from "react-redux";
import { changePage } from "../feature/message/messageSlice";
import useEffectMessage from "../customHooks/useEffectMessage";
import MessagesContainer from "../component/MessagesContainer";
import styled from "styled-components";
import Btn from "../animatedContent/Btn";
import SingleMessageComponent from "../component/SingleMessageComponent";
import { Link } from "react-router-dom";
import { PopupActionBeforeDeleteMessages } from "../popups/popup-component/PopupMessAdmPage";
import { popupActionDeleteMessages } from "../utils/popupActionFunc";

const AdminMessagesPage = () => {
  const { isLoading, hasNextPage, message, page } = useEffectMessage();
  const dispatch = useDispatch();
  const intObserver = useRef();
  const lastPostRef = useCallback(
    (messageContent) => {
      if (isLoading) return;
      if (intObserver.current) intObserver.current.disconnect();
      intObserver.current = new IntersectionObserver((messageContent) => {
        if (messageContent[0]?.isIntersecting && hasNextPage) {
          dispatch(changePage(page + 1));
        }
      });
      if (messageContent) intObserver.current.observe(messageContent);
    },
    [isLoading, hasNextPage]
  );
  const content = message.map((msgData, index) => {
    if (message.length === index + 1) {
      return (
        <MessagesContainer
          message={msgData}
          index={index}
          key={index + 1}
          ref={lastPostRef}
        />
      );
    }
    return <MessagesContainer message={msgData} key={index} index={index} />;
  });
  const handleClick = () => {
    popupActionDeleteMessages(true);
  };
  const handleClickLink = () => {
    window.location.pathname = "/admin-checkout/admin-page";
  };
  return (
    <>
      <Wrapper>
        <PopupActionBeforeDeleteMessages />
        <div className="messages">{content}</div>
        <div className="single_message">
          <SingleMessageComponent />
        </div>
        <div className="delete_many-container">
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
          tickets
        </Link>
      </Wrapper>
    </>
  );
};
const Wrapper = styled.section`
  display: grid;
  position: relative;
  .single_message {
    grid-area: single;
  }
  .messages {
    grid-area: messages;
  }
  article {
    box-shadow: var(--shadow-3);

    font-size: 1.4rem;
    min-height: 30rem;
    position: relative;
    padding: 4rem;
    .animated__btn {
      position: absolute;
      right: 5px;
      bottom: -10rem;
    }
    input {
      position: absolute;
      right: 1rem;
      top: 1rem;
    }
    #cl {
      position: absolute;
      top: 1rem;
      right: 1rem;
    }
  }
  .delete_many-container {
    grid-area: delete;
  }
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 0.2fr;
  grid-template-areas: "messages single" "messages delete";
  .messages {
    height: 90vh;
    overflow-y: scroll;
  }
  .paths {
    font-size: 2rem;
    position: absolute;
    right: 1rem;
  }
`;
export default AdminMessagesPage;
