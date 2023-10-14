import { useDispatch, useSelector } from "react-redux";
import { styled } from "styled-components";
import {
  changePage,
  changePageHistoric,
} from "../feature/allFreteSlice/allFreteSlice";
import { changePageOnClienteShowcase } from "../feature/sigleFreteSlice/singleFreteSlice";
import {
  handleMouseEnter,
  handleMouseLeave,
} from "../utils/BtnsAddClassAnimation";
export const ButtonFreight = ({ numOfPage, event, page }) => {
  const dispatch = useDispatch();
  const { fretes, freteHistoric } = useSelector((store) => store.allFretes);
  const { freteClientShowCase } = useSelector((store) => store.singleFrete);
  let dispatchHandler;
  let freteHandlers = {};
  let pageStatus = {};
  let numOfPageStatus = {};
  switch (event) {
    case "fretes pag":
      (freteHandlers = { ...freteHandlers, fretes }),
        (pageStatus = { ...pageStatus, page }),
        (numOfPageStatus = { ...numOfPageStatus, numOfPage });
      dispatchHandler = changePage;
      break;
    case "cliente showcase pag":
      freteHandlers = { ...freteHandlers, freteClientShowCase };
      pageStatus = { ...pageStatus, page };
      numOfPageStatus = { ...numOfPageStatus, numOfPage };
      dispatchHandler = changePageOnClienteShowcase;
      break;
    case "client freigth event":
      freteHandlers = { ...freteHandlers, fretes };
      pageStatus = { ...pageStatus, page };
      numOfPageStatus = { ...numOfPageStatus, numOfPage };
      dispatchHandler = changePage;
      break;
    case "historic freigth event":
      freteHandlers = { ...freteHandlers, freteHistoric };
      pageStatus = { ...pageStatus, page };
      numOfPageStatus = { ...numOfPageStatus, numOfPage };
      dispatchHandler = changePageHistoric;
      break;
    default:
      console.log("no envent");
      break;
  }
  const nextPage = () => {
    let newPage = pageStatus.page + 1;
    if (newPage > numOfPageStatus.numOfPage) {
      newPage = 1;
    }
    dispatch(dispatchHandler(newPage));
  };
  const prevPage = () => {
    let newPage = pageStatus.page - 1;
    if (newPage < 1) {
      newPage = numOfPageStatus.numOfPage;
    }
    dispatch(dispatchHandler(newPage));
  };

  const handlePageChange = (pNumber) => {
    dispatch(dispatchHandler(pNumber));
  };

  const addButtons = ({ pNumber, active }) => {
    return (
      <button
        onClick={() => handlePageChange(pNumber)}
        onMouseEnter={() => handleMouseEnter({ pNumber })}
        onMouseLeave={() => handleMouseLeave({ pNumber })}
        type="button-number"
        className={
          active
            ? `animation-${pNumber} page-btn selected`
            : `animation-${pNumber} page-btn`
        }
        key={pNumber}
      >
        {pNumber}
      </button>
    );
  };

  const renderButtons = () => {
    const pageButtons = [];
    //first
    if (numOfPageStatus.numOfPage !== 1) {
      pageButtons.push(
        addButtons({ pNumber: 1, active: pageStatus.page === 1 })
      );
    }
    // dots
    if (pageStatus.page > 3) {
      pageButtons.push(
        <span className="pages-dots" key="dots-1">
          ...
        </span>
      );
    }
    if (pageStatus.page !== 1 && pageStatus.page !== 2) {
      //prev
      pageButtons.push(
        addButtons({
          pNumber: pageStatus.page - 1,
          active: false,
        })
      );
    }
    //current page
    if (
      pageStatus.page !== 1 &&
      pageStatus.page !== numOfPageStatus.numOfPage
    ) {
      pageButtons.push(
        addButtons({
          pNumber: pageStatus.page,
          active: true,
        })
      );
    }
    // next
    if (
      pageStatus.page !== numOfPageStatus.numOfPage &&
      pageStatus.page !== numOfPageStatus.numOfPage - 1
    ) {
      pageButtons.push(
        addButtons({
          pNumber: pageStatus.page + 1,
          active: false,
        })
      );
    }
    if (pageStatus.page < numOfPageStatus.numOfPage - 2) {
      pageButtons.push(
        <span className="pages-dots-more" key="dots+1">
          ...
        </span>
      );
    }
    pageButtons.push(
      addButtons({
        pNumber: numOfPageStatus.numOfPage,
        active: pageStatus.page === numOfPageStatus.numOfPage,
      })
    );
    return pageButtons;
  };
  if (numOfPageStatus.numOfPage > 9) {
    document.querySelector(".pages-dots-more")?.classList?.add("margin-setup");
  }
  if (numOfPageStatus.numOfPage > 99) {
    document
      .querySelector(".pages-dots-more")
      ?.classList?.replace("margin-setup", "margin-setup-bigger");
  }
  if (pageStatus.page > 100) {
    document
      .querySelector(".pages-dots-more")
      ?.classList?.add("fixing-left-margin");
  }
  return (
    <Wrapper className="pagination">
      <div
        className={freteHandlers?.length < 6 ? "btn-cont check" : "btn-cont"}
      >
        <button
          onClick={prevPage}
          type="button"
          className="button-back"
        ></button>
        <div className="btn-container">{renderButtons()}</div>
        <button
          onClick={nextPage}
          className="button-next"
          type="button"
        ></button>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 45rem;
  margin: 1rem 0;
  .button-next {
    width: 5rem;
    height: 5rem;
    background-color: transparent;
    display: grid;
    place-content: center;
    border: transparent;
  }

  .button-next::before,
  .button-next::after {
    content: "";
    width: 2rem;
    height: 2px;
    background-color: #000000;
    transform-origin: right;
    border-radius: 10px;
    backface-visibility: hidden;
    margin: -0.9px;
  }

  .button-next::after {
    transform: rotate(40deg);
  }

  .button-next::before {
    transform: rotate(-40deg);
  }

  .button-back {
    width: 5rem;
    height: 5rem;
    background-color: transparent;
    display: grid;
    place-content: center;
    border: transparent;
  }

  .button-back::before,
  .button-back::after {
    content: "";
    width: 2rem;
    height: 2px;
    background-color: #000000;
    transform-origin: left;
    border-radius: 10px;
    backface-visibility: hidden;
    margin: -0.9px;
  }

  .button-back::after {
    transform: rotate(40deg);
  }

  .button-back::before {
    transform: rotate(-40deg);
  }
  .btn-cont {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .btn-container {
      display: flex;
      justify-content: center;
      align-items: center;

      .page-btn {
        height: 4rem;
        width: 4rem;
        border-radius: 50%;
        border: transparent;
        background-color: transparent;
        color: var(--grey-700);
        font-size: 2rem;
        margin: 0 5px 0 5px;
        transition: all 0.4s ease;
      }

      .selected {
        background-color: var(--grey-200);
        cursor: unset;
        background-color: var(--grey-200) !important;
      }

      .pages-dots-more,
      .pages-dots {
        font-size: 4rem;
        padding-bottom: 1rem;
        margin-right: 2px;
      }

      .margin-setup {
        margin-right: 1px;
      }

      .margin-setup-bigger {
        margin-right: 6px;
      }

      .fixing-left-margin {
        margin-left: 6px;
      }
    }
  }

  .animated-hover {
    background-color: var(--grey-200) !important;
  }
`;
