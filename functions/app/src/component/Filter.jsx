import { useMemo, useState } from "react";
import styled from "styled-components";
import FormsOptions from "./FormsOptions";
import { useDispatch, useSelector } from "react-redux";
import {
  clearFilters,
  getAllFretes,
  handleChanges,
  handleChangesNotDebouced,
} from "../feature/allFreteSlice/allFreteSlice";
import { Wrapper as FormWrapper } from "../assets/Wrappers/FormsWrapper";
import { Link } from "react-router-dom";
import {
  inputWarnings,
  setTargetToFilterField,
} from "../customHooks/errorsDisplay";
import { showAsideFilters } from "../utils/asideOpenEvent";

const Filter = () => {
  const dispatch = useDispatch();
  const {
    states,
    sortStatus,
    bodyworkSpecial,
    bodyworkClosed,
    bodyworkOpen,
    light,
    medium,
    heavy,
    heavyOpt,
    bodyworkClosedOpt,
    mediumOpt,
    lightOpt,
    bodyworkOpenOpt,
    bodyworkSpecialOpt,
    msg,
    name,
    city,
    colectDate,
    loadType,
  } = useSelector((store) => store.allFretes);
  const [nameSearch, setNameSearch] = useState(name);
  const [citySearch, setCitySearch] = useState(city);
  const [colectDateSearch, setColectDateSearch] = useState(colectDate);
  // const [canvasSearch, setCanvasSearch] = useState(canvas);
  const [loadTypeSearch, setLoadTypeSearch] = useState(loadType);
  const handleChange = (e) => {
    e.preventDefault();
    dispatch(
      handleChangesNotDebouced({
        name: e.target.name,
        value: e.target.value,
        eventType: ["notDeboucedReq", "Abort"],
      })
    );
  };
  const handleSubmit = () => {
    dispatch(clearFilters());
    setNameSearch("");
    setCitySearch("");
    setColectDateSearch("");
    // setCanvasSearch("");
    setLoadTypeSearch("");
    setTimeout(() => {
      dispatch(getAllFretes());
    }, 550);
  };
  const debounce = () => {
    let timeoutID;
    return (e) => {
      setNameSearch(e.target.names);
      setCitySearch(e.target.city);
      setColectDateSearch(e.target.colect);
      // setCanvasSearch(e.target.canvas);
      setLoadTypeSearch(e.target.loadType);
      clearTimeout(timeoutID);
      timeoutID = setTimeout(() => {
        dispatch(
          handleChanges({
            name: e.target.name,
            value: e.target.value,
            eventType: ["debouceReq", "Abort"],
          })
        );
      }, 400);
    };
  };
  const optimizedDebounce = useMemo(() => debounce(), []);
  inputWarnings(msg?.toString());
  setTimeout(() => {
    setTargetToFilterField();
  });
  return (
    <Wrapper className={"aside-cnt"}>
      <div className="filt">
        <div className="close-container">
          <button
            onClick={() => showAsideFilters(true)}
            className="close"
            id="cl"
          >
            &times;
          </button>
        </div>

        <h3>Filtro</h3>
      </div>
      <FormWrapper className="filter query_for-filter-inputs">
        <div className="form-box">
          <label htmlFor="name">Por nome</label>
          {/* <WarningBallonsInpts msg={msg} index={1} /> */}
          <input
            type="search"
            className="input inp1"
            name="name"
            autoComplete="name"
            value={nameSearch}
            onChange={optimizedDebounce}
            placeholder="Empresa/Contratante"
          />
        </div>
        <div className="form-box">
          <label htmlFor="city">Cidades</label>
          {/* <WarningBallonsInpts msg={msg} index={2} /> */}
          <input
            type="search"
            className="input inp2"
            name="city"
            value={citySearch}
            onChange={optimizedDebounce}
            placeholder="Rio Preto"
          />
        </div>
        <div className="form-box">
          <label htmlFor="colectDate">coleta</label>
          {/* <WarningBallonsInpts msg={msg} index={3} /> */}
          <input
            type="date"
            className="input inp3"
            name="colectDate"
            value={colectDateSearch}
            onChange={optimizedDebounce}
            placeholder="data"
          />
        </div>
        {/* não ta funcionando    */}
        {/* <div className="form-box">
          <label htmlFor="canvas">Tipo de cobertura</label>
          <WarningBallonsInpts msg={msg}/>
          <input
            type="search"
            value={canvasSearch}
            onChange={optimizedDebounce}
            name="canvas"
            placeholder="cobertura"
          />
        </div> */}
        {/* ta mei meme */}
        <div className="form-box">
          <label htmlFor="loadType">carga</label>
          {/* <WarningBallonsInpts msg={msg} index={4} /> */}
          <input
            type="search"
            className="input inp4"
            name="loadType"
            value={loadTypeSearch}
            onChange={optimizedDebounce}
            placeholder="tipo de carga"
          />
        </div>
        <FormsOptions
          queryClass="input"
          name="sortStatus"
          value={sortStatus}
          handleChange={handleChange}
          labelText="Estado"
          sorts={states}
          ballon={true}
          msg={msg}
          index={5}
        />
        <p>Carrocerias</p>
        <FormsOptions
          queryClass="input"
          ballon={true}
          msg={msg}
          index={6}
          name="bodyworkSpecial"
          value={bodyworkSpecial}
          handleChange={handleChange}
          labelText="especiais"
          sorts={bodyworkSpecialOpt}
        />
        <FormsOptions
          queryClass="input"
          ballon={true}
          msg={msg}
          index={7}
          name="bodyworkClosed"
          value={bodyworkClosed}
          handleChange={handleChange}
          labelText="fechada"
          sorts={bodyworkClosedOpt}
        />
        <FormsOptions
          queryClass="input"
          ballon={true}
          msg={msg}
          index={8}
          name="bodyworkOpen"
          value={bodyworkOpen}
          handleChange={handleChange}
          labelText="abertas"
          sorts={bodyworkOpenOpt}
        />
        <p>Tipo de veículos</p>
        <FormsOptions
          queryClass="input"
          ballon={true}
          msg={msg}
          index={9}
          name="light"
          value={light}
          handleChange={handleChange}
          labelText="leve"
          sorts={lightOpt}
        />
        <FormsOptions
          queryClass="input"
          ballon={true}
          msg={msg}
          index={10}
          name="medium"
          value={medium}
          handleChange={handleChange}
          labelText="médio"
          sorts={mediumOpt}
        />
        <FormsOptions
          queryClass="input"
          ballon={true}
          msg={msg}
          index={11}
          name="heavy"
          value={heavy}
          handleChange={handleChange}
          labelText="pesado"
          sorts={heavyOpt}
        />
        <div className="btn-cnt">
          <Link
            className="clear-btn"
            to="/frete_page"
            type="button"
            onClick={handleSubmit}
          >
            Limpar
          </Link>
        </div>
      </FormWrapper>
    </Wrapper>
  );
};
const Wrapper = styled.aside`
  position: fixed;
  background-color: var(--white);
  right: 0;
  height: calc(100vh - 70px);
  .form-box {
    position: relative;
  }
  .filt {
    display: flex;
    justify-content: center;
    margin-top: 5px;
    position: unset;
  }
  .filter {
    margin-left: 3px;
    margin-right: 3px;
  }
  label {
    font-size: 1.3rem;
    color: var(--grey-700);
    text-transform: capitalize;
  }
  input,
  select {
    height: 2rem;
  }
  p {
    color: var(--clr-primary-red-6);
    justify-self: center;
    margin-top: 18px;
    font-size: 2rem;
  }
  h3 {
    color: var(--primary-300);
    font-size: 2.3rem;
  }
  select,
  input {
    width: 99%;
    margin: 0 8px 0 0;
  }

  .close-btn {
    display: none;
  }
  .btn-cnt {
    width: 100%;
    display: grid;
    place-content: center;
  }
  .clear-btn,
  a {
    text-align: center;
    display: block;
    width: 8rem;
    padding: 8px;
    font-size: 1.5rem;
    background-color: var(--red-org);
    margin-top: 3rem;
    border-radius: 4px;
    letter-spacing: 2px;
    margin-bottom: 5rem;
  }

  @media (max-height: 875px) {
    overflow-y: scroll;
  }
`;
export default Filter;
