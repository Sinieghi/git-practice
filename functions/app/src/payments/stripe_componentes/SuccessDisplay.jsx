import { styled } from "styled-components";
import customFetch from "../../utils/axios";

const SuccessDisplay = ({ sessionId }) => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await customFetch
        .post("/api/v1/create-portal-session", {
          sessionId,
        })
        .then((res) => window.location.assign(res.data.url));
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Wrapper>
      <div className="all-content">
        <div className="billing_redirect">
          <h1>
            Publique seu <a href="/create-frete">frete</a>
          </h1>
          <div className="product Box-root">
            <div className="description Box-root">
              <h3>Inscrição realizada com sucesso! onFrete agradece</h3>
            </div>
          </div>
          <form onSubmit={handleSubmit}>
            <button id="checkout-and-portal-button" type="submit">
              Conferir Recibo
            </button>
          </form>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  height: 100vh;
  background: var(--blue-ocn);
  .all-content {
    position: relative;
    width: 100%;
    height: 100%;
    background-color: var(--yellow-org);
    -webkit-clip-path: polygon(0 20%, 100% 0, 100% 80%, 0 100%);
    clip-path: polygon(0 20%, 100% 0, 100% 80%, 0 100%);
  }
  h3 {
    color: var(--blue-ocn);
    font-size: 3rem;
    margin-bottom: 5rem;
  }
  h1 {
    font-size: 5rem;
    margin-bottom: 15rem;
  }
  .billing_redirect {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    display: grid;
    text-align: center;
    a {
      color: var(--red-org);
    }
    #checkout-and-portal-button {
      width: 30rem;
      height: 5rem;
      border: transparent;
      background: transparent;
      font-size: 3rem;
    }
  }
`;
export default SuccessDisplay;
