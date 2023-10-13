import { Link, Outlet } from "react-router-dom";
import { FreightHTMLS } from "../Frete";
import { ButtonFreight } from "../component/ButtonFreight";
import { useClienteContext } from "../Pages/ClientePage";
import { styled } from "styled-components";
import { AddHistoric, HistoricComponent } from "../component";
import { useSelector } from "react-redux";
import LoadingComponent from "../component/LoadingComponent";

const FreteHistoric = () => {
  let {
    freteHistoric,
    numOfPageHist,
    pageHistoric,
    totalFretesHist,
    msg,
    isLoading,
  } = useClienteContext();
  const { isConcludedLoading } = useSelector((store) => store.frete);
  msg = "historic freigth event";
  if (isConcludedLoading || isLoading) {
    return <LoadingComponent />;
  }
  if (!Boolean(freteHistoric.length)) {
    return (
      <div className="empty-container">
        <h1 className="empty__freight-container">
          Movendo o documento relacionado ao frete para essa sessão você pode
          adicionar notas referente ao frete... <br />
          <Link></Link>
        </h1>
      </div>
    );
  }

  return (
    <Wrapper className="set-structure-for-historic">
      <AddHistoric />
      <div className="cliente_center-content">
        {freteHistoric?.map((fretes, index) => {
          return (
            <WrapperCardSetup
              className={`card-contaier-hist`}
              id={`${index}`}
              key={index}
            >
              <div className={`container_setup card_fhater-hist-${index}`}>
                <div
                  className={`card-hist front_hist-${index}  front__chield-hist-${index}`}
                >
                  <HistoricComponent
                    fretes={fretes}
                    histStatus={{ histStatus: "" }}
                    index={index}
                  />
                </div>
                <div className={`card-hist  back_hist-${index}`}>
                  <FreightHTMLS fretes={fretes} index={index} />
                </div>
              </div>
            </WrapperCardSetup>
          );
        })}
        <Outlet />
      </div>
      <div className="page__bottom-content">
        <ButtonFreight
          numOfPage={numOfPageHist}
          page={pageHistoric}
          totalFretes={totalFretesHist}
          event={msg}
        />
      </div>
    </Wrapper>
    // <Freight />
  );
};
const Wrapper = styled.div`
  display: grid;
  .page__bottom-content {
    display: flex;
    place-content: center;
    align-items: center;
    .inp-btn {
      width: 8rem;
      height: 4rem;
      margin-left: 1rem;
      background-color: var(--clr-primary-orange-2);
      border: 1px solid var(--clr-primary-orange-3);
      border-radius: 3px;
    }
  }
`;
export const WrapperCardSetup = styled.div`
  min-height: 51rem;
  .card__flipper {
    background-color: transparent;
    border: transparent;
  }
  .setup_delete-btn-hist {
    position: absolute;
    left: 3rem;
    top: 1rem;
    color: var(--clr-primary-red-7);
  }
  margin: 2px;
  .card_fhater-hist-0,
  .card_fhater-hist-1,
  .card_fhater-hist-2,
  .card_fhater-hist-3,
  .card_fhater-hist-4,
  .card_fhater-hist-5 {
    border-radius: 3px;
    perspective: 150rem;
    -moz-perspective: 150rem;
    position: relative;
    min-height: 51rem;
  }

  .card-hist {
    transition: all 0.9s ease;
    backface-visibility: hidden;
    background: var(--yellow-org);
    border-radius: 3px;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.15);
    position: absolute;
    width: 100%;
    height: 100%;
    transform-style: preserve-3d;
  }
  .card-hist:hover {
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  }
  .back__chield-hist-0,
  .back__chield-hist-1,
  .back__chield-hist-2,
  .back__chield-hist-3,
  .back__chield-hist-4,
  .back__chield-hist-5 {
    transform: rotateY(180deg);
  }

  .back__chield-hist-0,
  .back__chield-hist-1,
  .back__chield-hist-2,
  .back__chield-hist-3,
  .back__chield-hist-4,
  .back__chield-hist-5 {
    transform: rotateY(0);
  }

  .front__chield-hist-0,
  .front__chield-hist-1,
  .front__chield-hist-2,
  .front__chield-hist-3,
  .front__chield-hist-4,
  .front__chield-hist-5 {
    transform: rotateY(-180deg);
  }
  @media (max-width: 950px) {
    min-height: 55rem;
    .card_fhater-hist-0,
    .card_fhater-hist-1,
    .card_fhater-hist-2,
    .card_fhater-hist-3,
    .card_fhater-hist-4,
    .card_fhater-hist-5 {
      min-height: 55rem;
    }
  }
  @media (max-width: 1200px) {
    .text_setup {
      padding: 15rem 8rem;
    }
    .text_setup {
      padding: 15rem 3rem;
    }
  }
  @media (max-width: 700px) {
    min-height: 85rem;
    .card_fhater-hist-0,
    .card_fhater-hist-1,
    .card_fhater-hist-2,
    .card_fhater-hist-3,
    .card_fhater-hist-4,
    .card_fhater-hist-5 {
      min-height: 85rem;
    }
  }
  @media (max-width: 490px) {
    .check-in-input {
      left: calc(100vw - 5rem) !important;
    }
  }
  //
`;
export default FreteHistoric;
