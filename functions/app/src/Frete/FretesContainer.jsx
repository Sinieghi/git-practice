/* eslint-disable react/display-name */
/* eslint-disable react/prop-types */
import React from "react";
import { styled } from "styled-components";
import { timeConvertor } from "../utils/dateOrCurrencyFix";
import { showSingleFrete } from "../feature/userFromDataSlice/userDataSlice";
import { getFreteClientShowCase } from "../feature/sigleFreteSlice/singleFreteSlice";
import { useDispatch } from "react-redux";
import { setSingleFrete } from "../feature/allFreteSlice/allFreteSlice";

const FretesComponents = React.forwardRef(({ frete, userData, index }, ref) => {
  const dispatch = useDispatch();
  if (!frete) {
    <div className="frete_is-empty">Nenhum Frete...</div>;
  }
  let convertedTime = timeConvertor(frete?.colectDate);
  const body = (
    <ul className="article-container">
      <div className="user__details">
        <p className="paragraph-frete-desc name">Contratante: {frete?.name}</p>
        <p className="paragraph-frete-desc">
          Email: <span className="contact">{frete?.email}</span>
        </p>
        <p className="paragraph-frete-desc">
          tel:
          <span className="contact">
            {" "}
            {userData?.role ? `${frete.phone}` : null}
          </span>
        </p>
        <p className="paragraph-frete-desc">
          Valor:{" "}
          <span className="price">
            {userData?.role ? `${frete.price}` : ""}R$
          </span>
        </p>
      </div>
      <div className="freigth__details-departure">
        <h5>Partida</h5>
        <p className="paragraph-frete-desc sortStatus">
          Estado: {frete.sortStatus}
        </p>
        <p className="paragraph-frete-desc city">Cidade: {frete.city}</p>
      </div>
      <div className="freigth__details-destiny">
        <h5>Destino</h5>
        <p className="paragraph-frete-desc">Estado: {frete.destiny}</p>
        <p className="paragraph-frete-desc">Cidade: {frete.toCity}</p>
      </div>
      <div className="freigth__details-colect">
        <p className="date paragraph-frete-desc colectDate">
          Coleta: {convertedTime}
        </p>
        <p className="paragraph-frete-desc loadType">Carga: {frete.loadType}</p>
        <p className="paragraph-frete-desc">Cobertura: {frete.canvas}</p>
      </div>
      <div className="truck__details">
        <p className="paragraph-frete-desc heavy">
          {frete.heavy === "" ? (
            <span style={{ display: "none" }}></span>
          ) : (
            `veículo: ${frete.heavy}`
          )}
        </p>
        <p className="paragraph-frete-desc medium">
          {frete.medium === "" ? (
            <span style={{ display: "none" }}></span>
          ) : (
            `veículo: ${frete.medium}`
          )}
        </p>
        <p className="paragraph-frete-desc light">
          {frete.light === "" ? (
            <span style={{ display: "none" }}></span>
          ) : (
            `veículo: ${frete.light}`
          )}
        </p>
        <p className="paragraph-frete-desc bodyworkOpen">
          {frete.bodyworkOpen === "" ? (
            <span style={{ display: "none" }}></span>
          ) : (
            `Carroceria: ${frete.bodyworkOpen}`
          )}
        </p>
        <p className="paragraph-frete-desc bodyworkClosed">
          {frete.bodyworkClosed === "" ? (
            <span style={{ display: "none" }}></span>
          ) : (
            `Carroceria: ${frete.bodyworkClosed}`
          )}
        </p>
        <p className="paragraph-frete-desc bodyworkSpecial">
          {frete.bodyworkSpecial === "" ? (
            <span style={{ display: "none" }}></span>
          ) : (
            `Carroceria: ${frete.bodyworkSpecial}`
          )}
        </p>
      </div>
    </ul>
  );
  const content = ref ? (
    <Wrapper
      className="box"
      id={`${index || "last"}`}
      onClick={() => {
        dispatch(showSingleFrete());
        dispatch(setSingleFrete(frete));
        dispatch(getFreteClientShowCase({ createdBy: frete.createdBy }));
      }}
      ref={ref}
    >
      {body}
    </Wrapper>
  ) : (
    <Wrapper
      className="box"
      id={`${index || "0"}`}
      onClick={() => {
        dispatch(showSingleFrete());
        dispatch(setSingleFrete(frete));
        dispatch(getFreteClientShowCase({ createdBy: frete.createdBy }));
      }}
    >
      {body}
    </Wrapper>
  );
  return content;
});

const Wrapper = styled.article`
  display: block;
  background-color: var(--white);
  width: calc(100vw - 315px);
  cursor: pointer;
  .target-search {
    color: var(--red-org);
    text-decoration: underline;
  }
`;
export default FretesComponents;
