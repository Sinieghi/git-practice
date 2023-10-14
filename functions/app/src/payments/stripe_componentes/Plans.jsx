import { styled } from "styled-components";
import { subscriptionStuff } from "../../utils/subscriptionStuff";
import { Link, useOutletContext } from "react-router-dom";
//aqui eu preciso apresentar meu produto
const Plans = () => {
  const { userData } = useOutletContext();
  return (
    <Wrapper className="plans">
      <div className="basic">
        <h1 className="title title_b">plano básico</h1>
        <div className="text-container">
          <p className="text text_b">
            {subscriptionStuff[0].text}{" "}
            <Link
              to={
                userData?.subscriptionID
                  ? `${subscriptionStuff[0].urlLinkPlan}/${subscriptionStuff[0].priceId}?plan=básico`
                  : "/produto_assinatura"
              }
            >
              ASSINAR
            </Link>
          </p>
        </div>
      </div>
      <div className="advanced">
        <h1 className="title title_a">plano avançado</h1>
        <div className="text-container">
          <p className="text text_a">
            {subscriptionStuff[1].text}{" "}
            <Link
              to={
                userData?.subscriptionID
                  ? `${subscriptionStuff[1].urlLinkPlan}/${subscriptionStuff[1].priceId}?plan=avançado`
                  : "/produto_assinatura"
              }
            >
              ASSINAR
            </Link>
          </p>
        </div>
      </div>
      <div className="premium">
        <h1 className="title title_p">plano premium</h1>
        <div className="text-container">
          <p className="text text_p">
            {subscriptionStuff[2].text}{" "}
            <Link
              to={
                userData?.subscriptionID
                  ? `${subscriptionStuff[2].urlLinkPlan}/${subscriptionStuff[2].priceId}?plan=premium`
                  : "/produto_assinatura"
              }
            >
              ASSINAR
            </Link>
          </p>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .title {
    font-size: 4rem;
    text-transform: uppercase;
  }
  .title_b {
    color: var(--primary-400);
  }
  .title_a {
    color: var(--red-org);
  }
  .title_p {
    color: var(--yellow-org);
  }

  .text,
  span {
    color: var(--grey-700);
    font-size: 2rem;
  }
  span {
    text-decoration: underline;
  }
  .text-container {
    padding: 5rem 15rem;
    display: inline-block;
  }
  @media (max-width: 650px) {
    .text-container {
      padding: 1rem;
    }
    .advanced,
    .premium {
      :first-child {
        margin-top: 4rem;
      }
    }
    .basic {
      :first-child {
        margin-bottom: 4rem;
      }
    }
  }
`;

export default Plans;
