import { Link } from "react-router-dom";
import { styled } from "styled-components";

const CheckForSignatureBeforeUpdate = () => {
  return (
    <Wrapper>
      <div className="text-content">
        <h3>
          Para ter acesso aos upgrade das assinaturas o senhor primeiro precisa
          adquirir uma <Link to="/produto_assinatura">assinatura!</Link>
        </h3>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  text-align: center;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  h3 {
    font-size: 2rem;
    color: var(--red-dark);
  }
  a {
    font-size: 2rem;
  }
  @media (max-width: 500px) {
    .text-content {
      padding: 15rem 2rem;
    }
  }
`;
export default CheckForSignatureBeforeUpdate;
