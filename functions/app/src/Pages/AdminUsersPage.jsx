import { useCallback, useRef } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { changePage } from "../feature/users/users";
import UsersContainer from "../component/UsersContainer";
import SingleUser from "../component/SingleUser";
import useEffectUserPage from "../customHooks/useEffectUsersPage";

//possível implementação para o futuro

const AdminUsersPage = () => {
  const dispatch = useDispatch();
  let { users, isLoading, hasNextPage, page } = useEffectUserPage();
  const intObserver = useRef();
  const lastPostRef = useCallback(
    (usersContent) => {
      if (isLoading) return;
      if (intObserver.current) intObserver.current.disconnect();
      intObserver.current = new IntersectionObserver((usersContent) => {
        if (usersContent[0]?.isIntersecting && hasNextPage) {
          dispatch(changePage(page + 1));
        }
      });
      if (usersContent) intObserver.current.observe(usersContent);
    },
    [isLoading, hasNextPage]
  );
  const content = users.map((usersData, index) => {
    if (users.length === index + 1) {
      return (
        <UsersContainer
          ref={lastPostRef}
          key={index + 1}
          users={usersData}
          index={index}
        />
      );
    }
    return <UsersContainer users={usersData} key={index} index={index} />;
  });
  const handleClickLink = () => {
    window.location.pathname = "/admin-checkout/messages-page";
  };
  return (
    <>
      <Wrapper>
        <div className="users">{content}</div>
        <div className="single-user">
          <SingleUser />
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
  .users {
    grid-area: users;
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
  .single-user {
    grid-area: single;
    padding: 5rem;
  }

  grid-template-areas: "users single";
  .paths {
    font-size: 2rem;
    position: absolute;
  }
`;
export default AdminUsersPage;
