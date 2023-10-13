import { createContext, useContext, useEffect, useRef } from "react";
import { styled } from "styled-components";
import { ClientAside } from "../component";
import { Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  getFreteForHistoric,
  getFretes,
} from "../feature/allFreteSlice/allFreteSlice";
import { getUser } from "../feature/userFromDataSlice/userDataSlice";
const ClientContext = createContext();
const ClientePage = () => {
  const dispatch = useDispatch();
  const {
    fretes,
    freteHistoric,
    numOfPage,
    numOfPageHist,
    totalFretesHist,
    totalFretes,
    page,
    pageHistoric,
    isLoading,
    fretePagesEvent,
  } = useSelector((store) => store.allFretes);
  const { userData, name, email } = useSelector((store) => store.userData);

  //arrumar
  useEffect(() => {
    if (!userData) {
      dispatch(getUser());
    }

    setTimeout(() => {
      dispatch(getFretes());
      dispatch(getFreteForHistoric());
    });
  }, [page, pageHistoric]);

  return (
    <ClientContext.Provider
      value={{
        userData,
        isLoading,
        fretes,
        freteHistoric,
        numOfPage,
        numOfPageHist,
        totalFretes,
        totalFretesHist,
        page,
        name,
        email,
        pageHistoric,
        fretePagesEvent,
      }}
    >
      <Wrapper>
        <ClientAside />
        <Outlet />
      </Wrapper>
    </ClientContext.Provider>
  );
};

const Wrapper = styled.main`
  display: grid;
  position: relative;
  min-height: 100vh;
  gap: 6px;
  grid-template-columns: 30rem 1fr;
  @media (max-width: 1100px) {
    grid-template-columns: 1fr;
    //cliente aside
    .normal-device-client {
      z-index: -10;
      visibility: hidden;
      opacity: 0;
      background-color: var(--white);
      width: 30rem;
      transform: translateY(-50rem);
      transition: all 0.3s ease;
    }
    .target-side-cliente-content {
      z-index: 7;
      visibility: visible;
      opacity: 1;
      transform: translateY(0);
    }
  }
  gap: 1px;
  .cliente_center-content {
    max-width: 100%;
    overflow-y: scroll;
    height: calc(90vh - 27px);
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    @media (max-width: 800px) {
      grid-template-columns: 1fr;
    }
  }
  .pagination {
    place-self: center;
  }
  .delete_status-on {
    background-color: var(--red-org);
  }
`;
export const useClienteContext = () => useContext(ClientContext);
export default ClientePage;
