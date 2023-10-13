import { styled } from "styled-components";
import PublishServices from "../Frete/PublishServices";

const CreateFrete = () => {
  return (
    <Wrapper>
      <PublishServices />
    </Wrapper>
  );
};

const Wrapper = styled.main`
  min-height: 100vh;
  position: relative;
`;

export default CreateFrete;
