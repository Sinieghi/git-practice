/* eslint-disable react/prop-types */
import Forms from "../component/Forms";
import FormsOptions from "../component/FormsOptions";
import { styled } from "styled-components";
import { useDispatch } from "react-redux";
import {
  checkBeforeUserSend,
  checkSelectInpBeforeSubmit,
  inputsValidatorNotification,
} from "../customHooks/publishInputs";

// VAMOS MUDAR O POST, ISSO AQUI VAI PARA A CLIENT PAGE
const FretePublishContainer = ({
  name,
  email,
  city,
  sortStatus,
  price,
  states,
  phone,
  text,
  handleChange,
  bodyworkSpecialOpt,
  bodyworkSpecial,
  bodyworkClosedOpt,
  bodyworkClosed,
  bodyworkOpenOpt,
  bodyworkOpen,
  lightOpt,
  light,
  mediumOpt,
  medium,
  heavyOpt,
  heavy,
  colectDate,
  loadType,
  toCity,
  destiny,
  destinyStates,
  canvas,
  msg,
  status,
}) => {
  const query = new URLSearchParams(window.location.search);
  const params = query.get("edit");
  const dispatch = useDispatch();
  let index;
  if (msg !== "") {
    inputsValidatorNotification(msg.toString(), status, dispatch, index);
  }
  checkBeforeUserSend();
  checkSelectInpBeforeSubmit();
  return (
    <Wrapper
      className={params ? `edit_frete-container` : `publish_frete-container`}
    >
      <div className="d1">
        <Forms
          type="text"
          name="name"
          value={name}
          labelText="Nome"
          autoComplete="name"
          autocorrect="off"
          inputmode="name"
          spellcheck="false"
          ariaInvalid="false"
          labelClass="animated-label"
          handleChange={handleChange}
          placeholder="nome do contratante"
          index={1}
          inpClass="name"
          min={3}
        />
        <Forms
          type="email"
          name="email"
          value={email}
          labelText="Email"
          autoComplete="email"
          autocorrect="off"
          inputmode="email"
          spellcheck="false"
          ariaInvalid="false"
          min={6}
          labelClass="animated-label"
          handleChange={handleChange}
          placeholder="Email"
          index={2}
          inpClass="email"
        />
        <Forms
          type="tel"
          name="phone"
          value={phone}
          spellcheck="false"
          autoComplete="tel"
          autocorrect="off"
          max={15}
          min={6}
          labelText="telefone"
          labelClass="animated-label"
          ariaInvalid="false"
          handleChange={handleChange}
          placeholder="(11) 99999-9999"
          index={3}
          inpClass="phone"
        />
      </div>
      <div className="d2">
        <p id="paragraph">Informações de partida e chegada</p>
        <FormsOptions
          name="sortStatus"
          value={sortStatus}
          handleChange={handleChange}
          labelText="Partida"
          sorts={states}
          index={4}
          seleClass="leave"
        />
        <Forms
          type="text"
          name="city"
          value={city}
          labelText="Cidade"
          inpClass="city"
          autoComplete="off"
          labelClass="animated-label"
          handleChange={handleChange}
          placeholder="Partida"
          index={5}
          min={2}
        />
        <div className="break-line"></div>
        <FormsOptions
          name="destiny"
          value={destiny}
          handleChange={handleChange}
          labelText="Destino"
          labelClass="animated-label"
          sorts={destinyStates}
          index={6}
          seleClass="destiny"
        />
        <Forms
          type="text"
          name="toCity"
          value={toCity}
          labelText="Cidade"
          autoComplete="off"
          inpClass="to-city"
          labelClass="animated-label"
          handleChange={handleChange}
          placeholder="Destino"
          index={7}
          min={2}
        />
      </div>
      <div className="d3">
        <p id="paragraph">Tipo de carroceria</p>
        <FormsOptions
          name="bodyworkSpecial"
          value={bodyworkSpecial}
          handleChange={handleChange}
          labelText="Especiais"
          sorts={bodyworkSpecialOpt}
        />
        <FormsOptions
          name="bodyworkClosed"
          value={bodyworkClosed}
          handleChange={handleChange}
          labelText="Fechada"
          sorts={bodyworkClosedOpt}
        />
        <FormsOptions
          name="bodyworkOpen"
          value={bodyworkOpen}
          handleChange={handleChange}
          labelText="Aberta"
          sorts={bodyworkOpenOpt}
        />
      </div>
      <div className="d4">
        <p id="paragraph">Tipos de caminhão</p>
        <FormsOptions
          name="light"
          value={light}
          handleChange={handleChange}
          labelText="Leve"
          sorts={lightOpt}
        />
        <FormsOptions
          name="medium"
          value={medium}
          handleChange={handleChange}
          labelText="Médio"
          sorts={mediumOpt}
        />
        <FormsOptions
          name="heavy"
          value={heavy}
          handleChange={handleChange}
          labelText="Pesado"
          sorts={heavyOpt}
        />
      </div>
      <div className="d5">
        <p id="paragraph">Detalhe e preço do frete</p>
        <Forms
          type="text"
          name="loadType"
          value={loadType}
          labelText="Carga"
          autoComplete="off"
          inpClass="load"
          labelClass="animated-label"
          handleChange={handleChange}
          placeholder="Tipo de carga"
          index={8}
          min={2}
        />
        <Forms
          type="text"
          name="canvas"
          value={canvas}
          labelText="Cobertura"
          inpClass="canvas"
          labelClass="animated-label"
          handleChange={handleChange}
          placeholder="Aberta ou fechada?"
          index={9}
        />
        <Forms
          type="datetime-local"
          name="colectDate"
          value={colectDate}
          labelText="Coleta"
          inpClass="date"
          handleChange={handleChange}
          placeholder="Data de coleta"
          index={10}
        />
        <Forms
          type="number"
          name="price"
          value={price}
          labelText="Valor"
          inpClass="price"
          labelClass="animated-label"
          handleChange={handleChange}
          placeholder="R$"
          index={11}
          min={1}
        />
      </div>
      <div className="msg d6">
        <p>Descreva os detalhes do frete</p>
        <textarea
          name="text"
          id="text"
          maxLength={500}
          minLength={10}
          className={`input inp${12} message-text`}
          onChange={handleChange}
          defaultValue={text}
        />
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  #label,
  label,
  #label__from-opt,
  .form-label {
    color: var(--grey-600);
    font-size: 1.6rem;
  }
  .msg {
    display: flex;
    flex-direction: column;
  }
  .target {
    background-color: var(--red-light);
  }
  .length_lower,
  .unselected-inp {
    border: 1px solid var(--clr-primary-red-5);
  }
`;
export default FretePublishContainer;
