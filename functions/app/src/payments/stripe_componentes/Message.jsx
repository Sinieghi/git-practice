import styled from "styled-components";

export const Message = ({ message }) => (
  <Wrapper>
    <h3>{message}</h3>
    <p>
      Caso nossos planos não atenda a sua demanda por favor entre em contato{" "}
      <a href="mailto:onfrete7@gmail.com">onfrete7@gmail.com</a>
    </p>
  </Wrapper>
);
const Wrapper = styled.section`
  min-height: 100vh;
  padding: 10rem;
  h3 {
    font-size: 3rem;
  }
  p {
    font-size: 2rem;
  }
`;
