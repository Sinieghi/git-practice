import { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteStatus } from "../feature/allFreteSlice/allFreteSlice";
import { setEditFrete } from "../feature/freteSlice/freteSlice";
import CheckForConcluded from "../component/CheckForConcluded";
import { Link } from "react-router-dom";
import { timeConvertor } from "../utils/dateOrCurrencyFix";
import { styled } from "styled-components";
import { useClienteContext } from "../Pages/ClientePage";
import { handleClick } from "../customHooks/handlersClick";
import AnimatedeWraning from "../popups/AnimatedeWraning";
import { alreadyAtMaxUpdates } from "../utils/popupDisplay";

const FreightHTMLS = ({ fretes, index }) => {
  let { isLoading } = useClienteContext();
  const {
    heavy,
    medium,
    light,
    isDeleteStatus,
    bodyworkOpen,
    bodyworkClosed,
    bodyworkSpecial,
    destiny,
    toCity,
    loadType,
    colectDate,
    canvas,
    city,
    createdAt,
    name,
    email,
    text,
    sortStatus,
    price,
    phone,
    updatedAt,
    isConcluded,
    historicBy,
    _id,
  } = fretes;
  const dispatch = useDispatch();
  //getHistoric setup
  const [histStatus, setHistStatus] = useState(false);

  if (fretes.numberOfUpdatesCount >= 5) {
    alreadyAtMaxUpdates({
      index: index + 1,
      numberOfUpdatesCount: fretes?.numberOfUpdatesCount,
    });
  }
  const searchParamsFix = new URL(window.location.href);
  let convertedTime = timeConvertor(colectDate);
  let updateFixTime = timeConvertor(updatedAt);
  let createFixTime = timeConvertor(createdAt);
  return (
    <>
      <Wrapper
        className={histStatus ? "desc historic-container" : "desc"}
        key={index}
      >
        <div className="d1" id="global">
          <h5 className="title">Contratante</h5>
          <p>Nome: {name}</p>
          <a href={`mailto:${email}`}>
            <p className="text">{email}</p>
          </a>
        </div>
        <div className="d2">
          <CheckForConcluded
            name="isConcluded"
            value={isConcluded}
            isLoading={isLoading}
            freteId={_id}
            index={index + 1}
          />
          {!isConcluded ? (
            <div className="d2_chield-freightPage">
              <Link
                to={`${_id}?edit=true`}
                type="button"
                className="setup_edit-btn"
                onClick={() => {
                  dispatch(
                    setEditFrete({
                      freteId: _id,
                      city,
                      createdAt,
                      name,
                      email,
                      text,
                      sortStatus,
                      price,
                      phone,
                      heavy,
                      medium,
                      light,
                      bodyworkOpen,
                      bodyworkClosed,
                      bodyworkSpecial,
                      destiny,
                      toCity,
                      loadType,
                      colectDate,
                      canvas,
                    })
                  );
                }}
              >
                Editar
              </Link>
              <AnimatedeWraning
                index={index + 1}
                text={`numero de atualizações ${fretes.numberOfUpdatesCount} / 5`}
              />
              <Link
                className="setup_delete-btn"
                onClick={() => dispatch(deleteStatus({ _id, isDeleteStatus }))}
              >
                {isDeleteStatus ? "Reverter" : "Excluir"}
              </Link>
            </div>
          ) : (
            <>
              <div className="d2_chield-historicPage">
                <h5>Anotações</h5>
                {historicBy ? (
                  <>
                    <div className="check"></div>
                  </>
                ) : (
                  <>
                    <Link
                      to={`/client_page/historico-fretes/${_id}`}
                      className="setup_edit-btn"
                      onClick={() =>
                        handleClick({ data: _id, isEditing: false }, dispatch)
                      }
                    >
                      Adicionar
                    </Link>
                  </>
                )}
                <button
                  type="button"
                  className="setup_delete-btn card__flipper"
                  onClick={() => {
                    document
                      .querySelector(`.front_hist-${index}`)
                      .classList.remove(`front__chield-hist-${index}`);
                    document
                      .querySelector(`.back_hist-${index}`)
                      .classList.add(`front__chield-hist-${index}`);
                  }}
                  id={`${_id} ${index}`}
                >
                  Verificar
                </button>
                <Link
                  className="setup_delete-btn-hist"
                  onClick={() =>
                    dispatch(
                      deleteStatus({
                        _id,
                        isDeleteStatus,
                        eventType: "freteHist",
                      })
                    )
                  }
                >
                  {isDeleteStatus ? "Reverter" : "Excluir"}
                </Link>
              </div>
            </>
          )}
        </div>
        <div className="d3" id="global">
          <h5 className="title">Localização</h5>
          <div className="d3-chield">
            <p>Partida: {sortStatus}</p>
            <p>Partida: {city}</p>
          </div>
          <div className="d3-chield">
            <p></p>
            <p>Destino: {destiny}</p>
            <p>Destino: {toCity}</p>
          </div>
          <p style={{ placeSelf: "unset" }}>
            Valor:<span> {price}</span>
          </p>
          <p style={{ placeSelf: "unset" }}>Carga: {loadType}</p>
          <p style={{ placeSelf: "unset" }}>Telefone: {phone}</p>
        </div>
        <div className="d4" id="global">
          <p className="collect">Coleta: {convertedTime}</p>
          <p>Criação: {createFixTime}</p>
          <p>Atualizado: {updateFixTime}</p>
        </div>
        <div className="d5" id="global">
          <h5 className="title">Descrição do caminhão</h5>
          <div className="d5-chield">
            <p>{light !== "" ? `Caminhão leve: ${light}` : null}</p>
            <p>{medium !== "" ? `Caminhão médio: ${medium}` : null}</p>
            <p>{heavy !== "" ? `Caminhão pesado: ${heavy}` : null}</p>
          </div>
          <div className="d5-chield">
            <p>{canvas !== "" ? `Cobertura: ${canvas}` : null}</p>
            <p>{bodyworkOpen !== "" ? `Carroceria: ${bodyworkOpen}` : null}</p>
            <p>
              {bodyworkClosed !== "" ? `Carroceria: ${bodyworkClosed}` : null}
            </p>
            <p>
              {bodyworkSpecial !== "" ? `Carroceria: ${bodyworkSpecial}` : null}
            </p>
          </div>
        </div>
        <div className="d6 add__scroll" id="global">
          <p className="text">
            <span>Descrição:</span> {text}
          </p>
        </div>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.ul`
  display: grid;
  position: relative;
  grid-template-columns: 1fr 1fr;
  column-gap: 4px;
  font-size: 1.4rem;
  padding: 2rem;

  color: var(--grey-700);
  .title {
    margin-bottom: 1rem;
    font-weight: 800;
  }
  .d1,
  .d2,
  .d3,
  .d4,
  .d5,
  .d6 {
    margin-top: 2rem;
  }
  .d5,
  .d3,
  .d1 {
    border-right: 1px solid var(--grey-700);
  }
  .d6 {
    height: 10rem;
    overflow-y: scroll;
    scrollbar-width: thin;
    scrollbar-color: var(--primary-300) var(--clr-primary-red-1);
  }
  .check-in {
    display: flex;
    .check-in-input {
      width: 4rem;
    }
    top: 1rem;
    right: 1rem;
    position: absolute;
  }

  .d2 {
    display: flex;
    flex-direction: column;
    align-items: end;
    a,
    button {
      font-size: 1.5rem;
    }
    .d2_chield-historicPage {
      h5 {
        width: fit-content;
        margin-bottom: 2rem;
      }
      .title {
        margin-bottom: 2rem;
      }
      .setup_edit-btn {
        color: var(--clr-primary-1);
      }
      .setup_delete-btn {
        margin-left: 3rem;
        color: var(--blue-ocn);
      }
    }

    .d2_chield-freightPage {
      .setup_edit-btn {
        color: var(--primary-300);
        font-size: 2rem;
      }
      .setup_delete-btn {
        margin-left: 4rem;
        color: var(--clr-primary-orange-3);
        font-size: 2rem;
      }

      //animations
      .pulsing__animation,
      .pulsing__animation-1,
      .pulsing__animation-2,
      .pulsing__animation-3,
      .pulsing__animation-4,
      .pulsing__animation-5,
      .pulsing__animation-6 {
        position: absolute;
        left: 6rem;
        top: -4rem;
        height: 1rem;
        width: 1rem;
      }
      .pulsing__animation::before,
      .pulsing__animation::after,
      .pulsing__animation-1::before,
      .pulsing__animation-1::after,
      .pulsing__animation-2::before,
      .pulsing__animation-2::after,
      .pulsing__animation-3::before,
      .pulsing__animation-3::after,
      .pulsing__animation-4::before,
      .pulsing__animation-4::after,
      .pulsing__animation-5::before,
      .pulsing__animation-5::after,
      .pulsing__animation-6::before,
      .pulsing__animation-6::after {
        background: var(--primary-300);
        opacity: 0.3;
        animation: bounce 1s infinite;
      }
      @keyframes bounce {
        0%,
        100% {
          transform: translateY(-25%);
          animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
        }
        50% {
          transform: translateY(0);
          animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
        }
      }
      .already_on-limit::before,
      .already_on-limit::after {
        background: var(--clr-primary-orange-3);
      }
      .already_on-limit-text,
      #already_on-limit-text {
        background: var(--clr-primary-orange-3);
      }
      .ballon_text-container,
      .ballon_text-container-1,
      .ballon_text-container-2,
      .ballon_text-container-3,
      .ballon_text-container-4,
      .ballon_text-container-5,
      .ballon_text-container-6 {
        position: relative;
        position: absolute;
        height: 8rem;
        width: 24rem;
        display: table;
        top: -13rem;
        right: -18.5rem;
        padding-top: 2rem;
        background: var(--primary-300);
        border-top-left-radius: 9px;
        border-top-right-radius: 3px;
      }
      .ballon_text-container-1,
      .ballon_text-container-2 {
        border-bottom-right-radius: 9px;
        top: -2rem;
        padding-top: 4rem;
        clip-path: polygon(
          50% 0,
          55% 25%,
          100% 25%,
          100% 100%,
          0 100%,
          0 25%,
          45% 25%
        );
      }
      .ballon_text-container-2 {
        right: -16.8rem;
        clip-path: polygon(
          55% 0,
          55% 25%,
          100% 25%,
          100% 100%,
          0 100%,
          0 25%,
          45% 25%
        );
      }
      .ballon_text-container-4,
      .ballon_text-container-6 {
        right: -16.8rem;
        clip-path: polygon(
          0% 0%,
          100% 0%,
          100% 75%,
          55% 75%,
          55% 100%,
          45% 75%,
          0% 75%
        );
      }
      @media (max-width: 800px) {
        .ballon_text-container-1 {
          top: -2rem !important;
          padding-top: 4rem !important;
          clip-path: polygon(
            55% 0,
            55% 25%,
            100% 25%,
            100% 100%,
            0 100%,
            0 25%,
            45% 25%
          ) !important;
        }
        .ballon_text-container-2,
        #text-id {
          clip-path: polygon(
            0% 0%,
            100% 0%,
            100% 75%,
            55% 75%,
            55% 100%,
            45% 75%,
            0% 75%
          );
          padding-top: 2rem;
          top: -13rem;
          right: -16.8rem;
        }
        .ballon_text-container-5,
        #text-id {
          clip-path: polygon(
            0% 0%,
            100% 0%,
            100% 75%,
            55% 75%,
            55% 100%,
            45% 75%,
            0% 75%
          );
          padding-top: 2rem;
          top: -13rem;
          right: -16.8rem;
        }
      }
    }
  }
  @media (max-width: 700px) {
    display: block;
    .d5,
    .d3,
    .d1 {
      border-right: none;
    }
    .d2 {
      flex-direction: row;
      justify-content: center;
    }
  }
  @media (max-width: 490px) {
    .d2 {
      flex-direction: row;
      justify-content: unset;
    }
  }
`;
export default FreightHTMLS;
