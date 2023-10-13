import React from "react";
import styled from "styled-components";
import { timeConvertor } from "../utils/dateOrCurrencyFix";
import { useDispatch, useSelector } from "react-redux";
import Btn from "../animatedContent/Btn";

//possível implementação para o futuro

const UsersContainer = React.forwardRef(({ users }, ref) => {
  const { users } = useSelector((store) => store.admin);
  const dispatch = useDispatch();
  if (!users) {
    <div className="no_tickets">
      <h1>Nenhum ticket de users</h1>
    </div>;
  }
  const handleClick = () => {
    let urlNavigate = new URL(window.location.href);
    urlNavigate.searchParams.set("item", `${users._id}`);
    window.history.pushState({ path: urlNavigate.href }, "", urlNavigate.href);
    dispatch(setSingleUser(users));
  };
  const localTime = timeConvertor(users.createdAt);
  const body = (
    <ul>
      <input
        type="checkbox"
        name="check"
        className="check-box"
        id={users._id}
        checked={check}
        onChange={(e) => setCheck(e.target.checked)}
        onClick={(e) =>
          dispatch(
            populateDeleteArray({ id: e.target.id, check: e.target.checked })
          )
        }
      />
      <p>{users.supportOpt}</p>
      <p>{users.phone}</p>
      <p>{users.email}</p>
      <div>
        <p>{users.message}</p>
      </div>
      <p> {users.isOpen && "aberto"}</p>
      <p>{localTime}</p>
      <Btn
        type="button"
        loadingText="Processando"
        text="Visualizar"
        height="3rem"
        width="5rem"
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

export default UsersContainer;
