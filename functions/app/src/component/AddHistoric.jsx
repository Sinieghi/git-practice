import { useState } from "react";
import { styled } from "styled-components";
import Forms from "./Forms";
import { useDispatch, useSelector } from "react-redux";
import {
  clearMsg,
  createHistoric,
  historicCollector,
  showLoad,
  updateHistoric,
} from "../feature/historic/historicSlice";
import { Link, useNavigate } from "react-router-dom";
import { Wrapper as FromsWrapper } from "../assets/Wrappers/FormsWrapper";
const AddHistoric = () => {
  let {
    timeSpectative,
    description,
    stops,
    howMany,
    isLoading,
    _id,
    isEditing,
    msg,
    driverMan,
  } = useSelector((store) => store.historic);
  stops = false;
  const [concluded, setConcluded] = useState(stops);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const submitForm = (e) => {
    dispatch(showLoad());
    e.preventDefault();
    if (isEditing) {
      dispatch(
        updateHistoric({
          timeSpectative,
          description,
          stops: concluded,
          howMany,
          driverMan,
        })
      );
      isEditing = false;
      return;
    }
    dispatch(
      createHistoric({
        timeSpectative,
        description,
        stops: concluded,
        howMany,
        frete: _id,
        driverMan,
      })
    );
  };
  const handleChange = (e) => {
    e.preventDefault();
    const name = e.target.name;
    const value = e.target.value;
    dispatch(historicCollector({ name, value }));
  };
  if (msg === "success!") {
    document.querySelector(".popup_add-hist")?.classList?.remove("show");
    document
      .querySelector(".popup_content-add-hist")
      ?.classList?.remove("show_contente");
    setTimeout(() => {
      dispatch(clearMsg());
    }, 1000);
  }
  return (
    <Wrappers>
      <div className="popup_add-hist">
        <div className="popup_content-add-hist">
          <FromsWrapper onSubmit={submitForm}>
            <div className="forms__content">
              <Link
                type="button"
                className="close"
                id="cl"
                onClick={() => {
                  document
                    .querySelector(".popup_add-hist")
                    .classList.remove("show");
                  document
                    .querySelector(".popup_content-add-hist")
                    .classList.remove("show_contente");
                  setTimeout(() => {
                    navigate(-1);
                  }, 500);
                }}
              >
                &times;
              </Link>
              <div className="form-box">
                <label htmlFor="stops">Paradas</label>
                <input
                  type="checkbox"
                  name="stops"
                  className="check_stops"
                  value={concluded}
                  onChange={() => setConcluded(!concluded)}
                />
              </div>

              <Forms
                type="number"
                name="howMany"
                labelClass="animated-label"
                placeholder="Quantas paradas"
                value={howMany}
                labelText="Quantas"
                handleChange={handleChange}
              />
              <Forms
                type="text"
                name="timeSpectative"
                labelClass="animated-label"
                placeholder="Tempo para completar"
                value={timeSpectative}
                labelText="Tempo"
                handleChange={handleChange}
              />
              <Forms
                type="name"
                name="driverMan"
                value={driverMan}
                labelText="Nome"
                placeholder="Caminhoneiro/entregador"
                labelClass="animated-label"
                handleChange={handleChange}
              />
              <div className="msg">
                <label htmlFor="text">Detalhes</label>
                <textarea
                  name="description"
                  className="input"
                  id="text"
                  onChange={handleChange}
                  defaultValue={description}
                />
              </div>
              <div className="button">
                <button
                  type="submit"
                  className="submit_btn"
                  disabled={isLoading}
                >
                  {isLoading ? "Enviando..." : "Enviar"}
                </button>
              </div>
            </div>
          </FromsWrapper>
        </div>
      </div>
    </Wrappers>
  );
};

const Wrappers = styled.div`
  position: absolute;
  top: 0;
  .popup_add-hist {
    position: fixed;
    display: grid;
    height: 100vh;
    width: 100%;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.7);
    opacity: 0;
    visibility: hidden;
    z-index: 9999;
    transition: all 0.3s;
  }

  .popup_content-add-hist {
    position: absolute;
    visibility: hidden;
    opacity: 0;
    border-radius: 3px;
    transform: scale(0.3);
    transition: all 0.5s 0.2s;
    place-self: center;
    height: 50rem;
    width: 50%;
    background-color: var(--white);
    box-shadow: var(--shadow-4);
    padding: 1rem;
    display: grid;
  }
  form {
    width: 100%;
    display: grid;
    .form-box,
    .msg {
      margin: 0 auto;
      margin-top: 1rem;
      input {
        width: 100%;
        margin: 0;
      }
      textarea {
        width: 100%;
        height: 6rem;
      }
      label {
        font-size: 1.4rem;
      }
      .check_stops {
        width: fit-content;
        margin-left: 1rem;
      }
    }
    .form-box {
      width: 60%;
    }
    .msg {
      display: grid;
      width: 80%;
      label {
        text-align: center;
      }
    }
  }
  .show {
    visibility: visible;
    opacity: 1;
  }
  .show_contente {
    visibility: visible;
    opacity: 1;
    transform: scale(1);
  }
  @media (max-width: 800px) {
    .popup_content-add-hist {
      width: 100%;
    }
  }
  .button {
    display: grid;
    place-content: center;
    .submit_btn {
      background-color: var(--primary-300);
      border: transparent;
      width: 10rem;
      height: 5rem;
      border-radius: 3px;
      margin-top: 3rem;
    }
  }
`;

export default AddHistoric;
