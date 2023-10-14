import React, { useState } from "react";
import styled from "styled-components";
import { timeConvertor } from "../utils/dateOrCurrencyFix";
import { useDispatch, useSelector } from "react-redux";
import Btn from "../animatedContent/Btn";
import {
  populateDeleteArray,
  setSingleThicket,
} from "../feature/support/support";
// eslint-disable-next-line react/display-name
const SupportTicketsContainer = React.forwardRef(({ support, index }, ref) => {
  const [check, setCheck] = useState(false);
  const { btnLoading } = useSelector((store) => store.support);
  const dispatch = useDispatch();
  if (!support) {
    <div className="no_tickets">
      <h1>Nenhum ticket de support</h1>
    </div>;
  }
  const handleClick = () => {
    let urlNavigate = new URL(window.location.href);
    urlNavigate.searchParams.set("item", `${support._id}`);
    window.history.pushState({ path: urlNavigate.href }, "", urlNavigate.href);
    dispatch(setSingleThicket(support));
  };
  const localTime = timeConvertor(support.createdAt);
  const body = (
    <ul>
      <input
        type="checkbox"
        name="check"
        className="check-box"
        id={support._id}
        checked={check}
        onChange={(e) => setCheck(e.target.checked)}
        onClick={(e) =>
          dispatch(
            populateDeleteArray({ id: e.target.id, check: e.target.checked })
          )
        }
      />
      <p>{support.supportOpt}</p>
      <p>{support.phone}</p>
      <p>{support.email}</p>
      <div>
        <p>{support.message}</p>
      </div>
      <p> {support.isOpen && "aberto"}</p>
      <p>{localTime}</p>
      <Btn
        type="button"
        loadingText="Processando"
        text="Visualizar"
        height="3rem"
        width="5rem"
        loading={btnLoading}
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
  height: 20rem;
`;

export default SupportTicketsContainer;
