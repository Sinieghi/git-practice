import { Link, useOutletContext } from "react-router-dom";
import { styled } from "styled-components";
import { subscriptionStuff } from "../utils/subscriptionStuff";
import { Wrapper as FormSubscription } from "../assets/Wrappers/FormsWrapper";
import { SubscriptionBtnWrapper } from "../assets/Wrappers/updatePlanWrapper";
import CheckForSignatureBeforeUpdate from "./CheckForSignatureBeforeUpdate";

let AdvancedPlan = () => {
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
  return (
    <Wrapper className={`plan ${subscriptionStuff[1].descriptionClass}`}>
      <div
        className={`plan__decription-${subscriptionStuff[1].descriptionClass} background_img`}
      >
        <div className="plan__description-containers">
          <div className="title">
            <h2>{subscriptionStuff[1].plan.plan}</h2>
            <h3>{subscriptionStuff[1].plan.planPrice}</h3>
          </div>
          <div className="text_content"></div>
          <FormSubscription className="forms" onSubmit={handleSubmit}>
            <input
              type="password"
              name="password"
              className="input"
              id="password"
              placeholder="Senha"
              onChange={handleChange}
              value={password}
            />
            <label htmlFor="password" className="animated-label">
              senha
            </label>
            <SubscriptionBtnWrapper className="update">
              <button
                type="submit"
                className="submit__subscription-1"
                onClick={handleClick}
              >
                {isLoading ? "Processando..." : "Assinar"}
              </button>
            </SubscriptionBtnWrapper>
          </FormSubscription>
          <div className="links">
            <Link
              to={`/planos/${subscriptionStuff[0].urlLinkPlan}/${subscriptionStuff[0].priceId}?plan=basic`}
            >
              &larr; plano anterior
            </Link>
            <Link
              to={`/planos/${subscriptionStuff[2].urlLinkPlan}/${subscriptionStuff[2].priceId}?plan=premium`}
            >
              proximo plano &rarr;
            </Link>
          </div>
          <Link
            className="know__more"
            to={`/planos/${subscriptionStuff[1].urlLinkPlan}`}
          >
            saiba mais...
          </Link>
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.div``;

export default AdvancedPlan;
