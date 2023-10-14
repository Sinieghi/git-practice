import { Link } from "react-router-dom";
import styled from "styled-components";

export const RoleExplainEmp = () => {
  return (
    <Wrapper>
      <div className="text-container device-fix">
        <h2>Empresario</h2>
        <p>
          O cargo de empresario é a representação de um cliente com uma
          assinatura ativa, com esse cargo o senhor(a) tem acesso a todas as
          funcionalidades disponíveis no site. Divulgue seus fretes para todo o
          Brasil, sem complicação nenhuma! <br />
          Para o senhor(a) publicar seus fretes é simples, vá até esse{" "}
          <Link to="/create-frete">link</Link> descreva todos os detalhes
          possíveis e publique, depois de publicado é só aguarda até que os
          detalhes de seu frete seja visualizado por algum entregador, assim que
          o entregador ver seu frete ele entra em contato diretamente com o
          senhor(a) e vocês negocia diretamente
        </p>
      </div>
    </Wrapper>
  );
};

export const RoleExplainCam = () => {
  return (
    <Wrapper>
      <div className="text-container">
        <h2 className="text">Caminhoneiro/Entregador</h2>
        <p className="text">
          O cargo de caminhoneiro é a representação de um cliente sem assinatura
          ativa, com esse cargo o senhor(a) tem acesso aos fretes postados pelos
          assinantes do site, é bem simples basta ir até esse{" "}
          <Link to="/frete_page">link</Link> e la o senhor(a) pode ver todos os
          fretes postados até o momento, basta escolher o que melhor atende ao
          seu veículo e localidade e negociar diretamente com o empresario que
          postou o frete <br />
        </p>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  font-size: 1.7rem;
  width: 100%;
  h2 {
    font-size: 3rem;
    margin-bottom: 3rem;
    color: var(--red-org);
  }
  .device-fix {
  }
`;
