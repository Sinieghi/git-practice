import { styled } from "styled-components";

const successMsg = (msg) => {
  return (
    <Wrapper>
      <h3>{msg}</h3>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background: var(--primary-400);
  h3 {
    color: var(--clr-primary-4);
  }
`;
export default successMsg;
