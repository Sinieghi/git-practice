import { useCallback, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { styled } from "styled-components";
import FretesComponents from "./FretesContainer";
import { useFretePageContext } from "../Pages/FretPage";
import { changePage } from "../feature/allFreteSlice/allFreteSlice";

function AvailableList() {
  let { isLoading, page, hasNextPage, eventType } = useSelector(
    (store) => store.allFretes
  );

  const { fretes, userData } = useFretePageContext();
  const dispatch = useDispatch();
  const intObserver = useRef();
  const lastPostRef = useCallback(
    (fretesContent) => {
      if (isLoading) return;
      if (intObserver.current) intObserver.current.disconnect();
      intObserver.current = new IntersectionObserver((fretesContent) => {
        if (
          fretesContent[0]?.isIntersecting &&
          hasNextPage &&
          eventType[1] !== "Abort"
        ) {
          dispatch(changePage(page + 1));
        }
      });
      if (fretesContent) intObserver.current.observe(fretesContent);
    },
    [isLoading, hasNextPage]
  );
  const content = fretes.map((frete, index) => {
    if (fretes.length === index + 1) {
      return (
        <FretesComponents
          key={index + 1}
          ref={lastPostRef}
          userData={userData}
          frete={frete}
        />
      );
    }
    return (
      // COLOCAR UMAS ANIMAÇÕES DE LOADING SKELETON
      <FretesComponents
        key={index}
        index={index}
        userData={userData}
        frete={frete}
      />
    );
  });
  return <Wrapper className="avaible-cont">{content}</Wrapper>;
}

const Wrapper = styled.div`
  .box {
    margin: 2.5px 0 0 2.5px;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.15);
    transition: box-shadow 0.3s ease-in-out;
    border-radius: 3px;
  }
  .box:hover {
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  }

  .aside-mobile-btn {
    cursor: pointer;
    margin-top: 4px;
    height: 60px;
  }
  .aside-toggle {
    color: var(--primary-300);
    background: transparent;
    border: transparent;
    font-size: 4.5rem;
    svg {
      cursor: pointer;
    }
  }
`;
export default AvailableList;
