import { useDispatch, useSelector } from "react-redux";
import { styled } from "styled-components";
import { deleteHistoric } from "../feature/historic/historicSlice";
import { Link } from "react-router-dom";
import { timeConvertor } from "../utils/dateOrCurrencyFix";
import { handleClick } from "../customHooks/handlersClick";

const HistoricComponent = ({ fretes, index }) => {
  const dispatch = useDispatch();
  let { isLoading } = useSelector((store) => store.historic);
  if (isLoading) {
    return <div className="loader"></div>;
  }
  let updateFixTime = timeConvertor(fretes?.historicBy?.updatedAt);
  let createFixTime = timeConvertor(fretes?.historicBy?.createdAt);
  return (
    <Wrapper className="show-hist hist-back">
      <>
        {fretes?.historicBy ? (
          <>
            <div className="d2-chield1">
              <button
                type="button"
                className="close"
                onClick={() => {
                  document
                    .querySelector(`.front_hist-${index}`)
                    .classList.add(`front__chield-hist-${index}`);
                  document
                    .querySelector(`.back_hist-${index}`)
                    .classList.remove(`front__chield-hist-${index}`);
                }}
              >
                &times;
              </button>
            </div>
            <ul>
              <div className="d1">
                <p>
                  Paradas:{" "}
                  <span>{fretes?.historicBy?.stops ? "Sim" : "Não"}</span>
                </p>
                <p>Entregador: {fretes?.historicBy?.driverMan}</p>
                <p>Quantas paradas: {fretes?.historicBy?.howMany}</p>
                <p>Tempo até o destino: {fretes?.historicBy?.timeSpectative}</p>
                <p>Data de criação: {createFixTime}</p>
                <p>Ultima atualização: {updateFixTime}</p>
              </div>
              <div className="d2">
                <div className="d2-chield2"></div>
                <div className="d2-chield3">
                  <Link
                    className="edit-btn"
                    to={`/client_page/historico-fretes/${fretes?.historicBy?._id}`}
                    onClick={() =>
                      handleClick(
                        { data: fretes?.historicBy, isEditing: true },
                        dispatch
                      )
                    }
                  >
                    Editar
                  </Link>
                  <button
                    className="delete-btn"
                    onClick={() => {
                      dispatch(deleteHistoric(fretes));
                    }}
                  >
                    Deletar
                  </button>
                </div>
              </div>
              <div className="d3">
                <p className="text">
                  <span>Experiência do serviço:</span>{" "}
                  {fretes?.historicBy?.description}
                </p>
              </div>
            </ul>
          </>
        ) : (
          <div className="empty">
            <button
              type="button"
              className="close"
              onClick={() => {
                document
                  .querySelector(`.front_hist-${index}`)
                  .classList.add(`front__chield-hist-${index}`);
                document
                  .querySelector(`.back_hist-${index}`)
                  .classList.remove(`front__chield-hist-${index}`);
              }}
            >
              &times;
            </button>
            <h1 className="text_setup">
              Nenhuma anotação!{" "}
              <Link
                className="add__hist"
                to={`/client_page/historico-fretes/${fretes?._id}`}
                onClick={() => handleClick(fretes?._id, dispatch)}
              >
                Adicionar
              </Link>
            </h1>
          </div>
        )}
      </>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  height: 100%;
  display: grid;
  position: relative;
  grid-template-columns: 1fr;
  font-size: 1.6rem;
  padding: 6rem;
  color: var(--grey-700);
  h1 {
    text-align: center;
    padding: 10rem 2rem;
  }
  .add__hist {
    color: var(--red-org);
  }
  .close {
    position: absolute;
    right: 5px;
    top: 5px;
  }
  .d2-chield3 {
    position: absolute;
    right: 0px;
    top: 10rem;
    padding: 2rem;
    :first-child {
      margin-right: 2rem;
      color: var(--blue-ocn);
    }
    :last-child {
      color: var(--red-dark);
    }
    .edit-btn,
    .delete-btn {
      font-size: 2rem;
      background-color: transparent;
      border: transparent;
    }
  }
`;
export default HistoricComponent;
