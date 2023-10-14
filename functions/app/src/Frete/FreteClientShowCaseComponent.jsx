import { timeConvertor } from "../utils/dateOrCurrencyFix";
import { styled } from "styled-components";

const FreteClientShowCaseComponent = ({ fretes }) => {
  let convertedTime = timeConvertor(fretes?.colectDate);
  return (
    <Wrapper
      className="client_frete-container-ul"
      id="client_frete-container-showcase"
    >
      <div className="sec_one-infos">
        <p className="frete_cliente-showcase">Data/Coleta: {convertedTime}</p>
        <p className="frete_cliente-showcase">Carga: {fretes?.loadType}</p>
        <p className="frete_cliente-showcase">
          Estado/Partida: {fretes?.sortStatus}
        </p>
      </div>
      <div className="sec_two-infos">
        <p className="frete_cliente-showcase">
          Estado/Chegada: {fretes?.destiny}
        </p>
        {fretes?.heavy === "" ? null : (
          <p className="frete_cliente-showcase">Veiculo: {fretes?.heavy}</p>
        )}
        {fretes?.medium === "" ? null : (
          <p className="frete_cliente-showcase">Veiculo: {fretes?.medium}</p>
        )}
        {fretes?.light === "" ? null : (
          <p className="frete_cliente-showcase">Veiculo: {fretes?.light}</p>
        )}
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.ul`
  display: inline-flex;
  column-gap: 5rem;
  padding: 1.2rem 1rem 1.2rem 5rem;
  width: 100%;
  .frete_cliente-showcase {
    font-size: 1.5rem;
  }
`;
export default FreteClientShowCaseComponent;
