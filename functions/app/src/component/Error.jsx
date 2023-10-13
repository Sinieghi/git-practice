import { styled } from "styled-components";
import notFound from "../assets/not-found.svg";
import { Link } from "react-router-dom";
const Error = () => {
  return (
    <Wrapper>
      <img src={notFound} alt="not found" />
      <h1>404</h1>
      <p>Não conseguimos encontrar a rota solicitada</p>
      <Link to="/">Pagina Inicial</Link>
    </Wrapper>
  );
};
const Wrapper = styled.main`
  background: var(--white);
  height: 790px;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    position: absolute;
    width: 100%;
    height: 100%;
  }
  h1 {
    color: var(--grey-900);
    font-size: 5rem;
    position: absolute;
  }
  p {
    color: var(--primary-blue-700);
    font-size: 2rem;
    position: absolute;
    bottom: 350px;
  }
  a {
    color: var(--red-org);
    position: absolute;
    bottom: 325px;
    font-size: 2.5rem;
  }
`;

export default Error;
