import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { styled } from "styled-components";
import { getUser } from "../feature/userFromDataSlice/userDataSlice";

const PrivateCreateFrete = ({ children }) => {
  //arrumar o getUser do userDate e substituir esse user pelo user que vem do server user
  const { userData } = useSelector((store) => store.userData);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!userData) {
      dispatch(getUser());
    }
  }, []);
  if (
    !userData ||
    userData.role === "caminhoneiro" ||
    userData.role === "user"
  ) {
    return (
      <Wrapper>
        <div className="d1">
          <h2>
            Conheça nossos{" "}
            <Link className="in" to="/produto_assinatura">
              planos
            </Link>
          </h2>
        </div>
        <div className="d2">
          <h3>Não assinante</h3>
          <p>{`Com o cargo de caminhoneiro o senhor(a) tem acesso a todos os fretes
            postados no site, ou seja, o senhor(a) pode escolher o frete que melhor o atende,
            ao entrar em contato com o contratante e prestando atenção aos detalhes descritos
            no frete`}</p>
        </div>
        <div className="d3">
          <h3> Assinante</h3>
          <p>{`Com o cargo de empresário o senhor(a) pode postar os fretes para que o
            caminhoneiro escolha qual deles o atende melhor, mas não esqueça dos detalhes
            preencha com o máximo de informação possível para que o caminhoneiro ou entregador saiba
            se seu equipamento suporta tal carga`}</p>
        </div>
        <div className="d4">
          <h3>
            <span className="Frete">
              <span className="on">on</span>Frete
            </span>{" "}
            agradece seu tempo!
          </h3>
          <p>
            <Link to="/cadastro" className="in">
              Entrar
            </Link>
          </p>
        </div>
      </Wrapper>
    );
  }
  return children;
};

const Wrapper = styled.div`
  min-height: 100vh;
  margin: 0 auto;
  padding: 10rem;
  .d1 {
    grid-area: d1;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .d2 {
    grid-area: d2;
    display: flex;
    flex-direction: column;
  }
  .d3 {
    grid-area: d3;
    display: flex;
    flex-direction: column;
  }
  .d4 {
    grid-area: d4;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  grid-gap: 9px;
  grid-template-areas:
    "d1 d1"
    "d2 d3"
    "d4 d4";
  p {
    color: var(--primary-blue-500);
    font-size: 2.1rem;
  }
  h3 {
    color: var(--primary-400);
    align-self: center;
    font-size: 2rem;
  }
  h2 {
    font-size: 2.2rem;
    color: var(--yellow-org);
    align-self: center;
  }

  .in {
    color: var(--red-org);
  }
  @media (max-width: 720px) {
    padding: 5rem;
    :not(:first-child) {
      margin-top: 3rem;
    }
    grid-template-columns: 1fr;
    grid-template-areas:
      "d1"
      "d1"
      "d2"
      "d3"
      "d4"
      "d4";
  }
`;

export default PrivateCreateFrete;
