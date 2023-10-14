import { subscriptionStuff } from "../utils/subscriptionStuff";
import { Link, useOutletContext } from "react-router-dom";
import { styled } from "styled-components";
import { Wrapper as FormSubscription } from "../assets/Wrappers/FormsWrapper";
import CheckForSignatureBeforeUpdate from "./CheckForSignatureBeforeUpdate";
import { SubscriptionBtnWrapper } from "../assets/Wrappers/updatePlanWrapper";
const PremiumPlan = () => {
  let {
    password,
    isLoading,
    handleClick,
    handleChange,
    handleSubmit,
    userData,
  } = useOutletContext();
  if (!userData) {
    return <CheckForSignatureBeforeUpdate />;
  }
  //estou aprendendo git, hello me
  return (
    <Wrapper className={`plan ${subscriptionStuff[2].descriptionClass}`}>
      <div
        className={`plan__decription-${subscriptionStuff[2].descriptionClass} background_img`}
      >
        <div className="plan__description-containers">
          <div className="title">
            <h2>{subscriptionStuff[2].plan.plan}</h2>
            <h3>{subscriptionStuff[2].plan.planPrice}</h3>
          </div>
          <div className="text_content"></div>
          <FormSubscription className="forms" onSubmit={handleSubmit}>
            <input
              type="password"
              name="password"
              id="password"
              className="input"
              placeholder="Senha"
              onChange={handleChange}
            />
            <label htmlFor="password" className="animated-label">
              senha
            </label>
            <SubscriptionBtnWrapper className="update">
              <button
                type="submit"
                className="submit__subscription-2"
                onClick={handleClick}
                value={password}
              >
                {isLoading ? "Processando..." : "Assinar"}
              </button>
            </SubscriptionBtnWrapper>
          </FormSubscription>
          <div className="links">
            <Link
              to={`/planos/${subscriptionStuff[1].urlLinkPlan}/${subscriptionStuff[1].priceId}?plan=advanced`}
            >
              &larr; plano anterior
            </Link>
          </div>
          <Link
            className="know__more"
            to={`/planos/${subscriptionStuff[2].urlLinkPlan}`}
          >
            saiba mais...
          </Link>
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.div``;

export default PremiumPlan;
