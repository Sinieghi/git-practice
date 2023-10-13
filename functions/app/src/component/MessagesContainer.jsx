import React, { useState } from "react";
import { timeConvertor } from "../utils/dateOrCurrencyFix";
import Btn from "../animatedContent/Btn";
import {
  populateDeleteArray,
  setSingleMessage,
} from "../feature/message/messageSlice";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

// eslint-disable-next-line react/display-name
const MessagesContainer = React.forwardRef(({ message }, ref) => {
  const [check, setCheck] = useState(false);
  const { isLoading } = useSelector((store) => store.message);
  const dispatch = useDispatch();
  const handleClick = () => {
    let urlNavigate = new URL(window.location.href);
    urlNavigate.searchParams.set("item", `${message._id}`);
    window.history.pushState({ path: urlNavigate.href }, "", urlNavigate.href);
    dispatch(setSingleMessage(message));
  };
  const localTime = timeConvertor(message.createdAt);
  const body = (
    <ul>
      <input
        type="checkbox"
        name="check"
        className="check-box"
        id={message._id}
        checked={check}
        onChange={(e) => setCheck(e.target.checked)}
        onClick={(e) =>
          dispatch(
            populateDeleteArray({ id: e.target.id, check: e.target.checked })
          )
        }
      />

      <p>{message.name}</p>
      <p>{message.phone}</p>
      <p>{message.email}</p>
      <div>
        <p>{message.sendMessage}</p>
      </div>
      <p>{localTime}</p>
      <Btn
        type="button"
        loadingText="Processando"
        text="Visualizar"
        height="3rem"
        width="5rem"
        loading={isLoading}
        handleClick={handleClick}
      />
    </ul>
  );
  const content = ref ? (
    <Wrapper ref={ref}>{body}</Wrapper>
  ) : (
    <Wrapper>{body}</Wrapper>
  );
  return content;
});
const Wrapper = styled.article`
  height: 15rem;
`;
export default MessagesContainer;
