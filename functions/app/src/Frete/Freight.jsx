import { styled } from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { ButtonFreight } from "../component/ButtonFreight";
import { Link, Outlet } from "react-router-dom";
import FreightHTMLS from "./FreightHTMLS";
import { useClienteContext } from "../Pages/ClientePage";
import { populateSetArray } from "../feature/freteSlice/freteSlice";
import { PopupBeforeActionSetManyConcluded } from "../popups/popup-component/PopupFreightPage";
import LoadingComponent from "../component/LoadingComponent";
import { popupActionSetManyToConcluded } from "../utils/popupActionFunc";
const Freight = () => {
  const searchParamsFix = new URLSearchParams(window.location.pathname);
  const dispatch = useDispatch();
  let { fretes, numOfPage, totalFretes, page, msg, isLoading } =
    useClienteContext();
  msg = "client freigth event";
  const { isEditing, isConcludedLoading } = useSelector((store) => store.frete);
  if (isConcludedLoading || isLoading) {
    return <LoadingComponent />;
  }

  if (!Boolean(fretes.length)) {
    return (
      <h1 className="empty__freight-container">
        Nenhum frete postado... <br />
        <Link className="empty__freight-container-link" to="/create-frete">
          Publicar
        </Link>
      </h1>
    );
  }
  return (
    <Wrapper>
      {/* problema é esse cara aqui */}
      {isEditing ? (
        <Outlet />
      ) : (
        <>
          <PopupBeforeActionSetManyConcluded />
          <div className="cliente_center-content">
            {fretes?.map((fretes, index) => {
              return (
                <div
                  className={`freigth_page ${
                    fretes.isDeleteStatus && "delete_status-on"
                  }`}
                  key={index}
                >
                  <FreightHTMLS fretes={fretes} index={index} />
                </div>
              );
            })}
          </div>
          <div className="page__bottom-content">
            <ButtonFreight
              numOfPage={numOfPage}
              page={page}
              totalFretes={totalFretes}
              event={msg}
            />
            {Boolean(searchParamsFix.toString().match("freight")) && (
              <>
                <label htmlFor="btn">Mover pag</label>
                <button
                  type="button"
                  name="btn"
                  value=""
                  className="inp-btn"
                  onClick={() => {
                    popupActionSetManyToConcluded(true);
                    dispatch(
                      populateSetArray(
                        fretes.map((fr) => {
                          return { id: fr._id };
                        })
                      )
                    );
                  }}
                >
                  qnt {fretes.length}
                </button>
              </>
            )}
          </div>
        </>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .freigth_page {
    border-radius: 3px;
  }
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
    label {
      margin-left: 10rem;
    }
  }

  //pop-up
  .popup_content-freight {
    position: fixed;
    display: grid;
    height: 100vh;
    width: 100%;
    top: 0;
    left: 0;
    background-color: var(--cus-shade-for-aside-popups);
    opacity: 0;
    visibility: hidden;
    z-index: 9999;
    transition: all 0.3s;
    place-items: center;
  }
  .popup_content-freight-act {
    position: absolute;
    visibility: hidden;
    display: grid;
    grid-template-rows: 1fr 1fr;
    opacity: 0;
    border-radius: 3px;
    transform: scale(0.3);
    transition: all 0.5s 0.2s;
    width: 40rem;
    height: 30rem;
    background-color: var(--white);
    text-align: center;
  }
  .show-act {
    visibility: visible;
    opacity: 1;
  }
  .show_contente-freight {
    visibility: visible;
    opacity: 1;
    transform: scale(1);
  }
  h3 {
    align-self: center;
    font-size: 1.5rem;
  }
  #cl {
    position: absolute;
    right: 1px;
    top: 1px;
  }
  .btn__animated-content {
    height: 9rem;
  }
`;
export default Freight;
