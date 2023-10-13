import { Link, useOutletContext } from "react-router-dom";
import { styled } from "styled-components";
import { subscriptionStuff } from "../utils/subscriptionStuff";
import { Wrapper as FormSubscription } from "../assets/Wrappers/FormsWrapper";
import { SubscriptionBtnWrapper } from "../assets/Wrappers/updatePlanWrapper";
import CheckForSignatureBeforeUpdate from "./CheckForSignatureBeforeUpdate";

const BasicPlan = () => {
  let {
    password,
    isLoading,
    handleClick,
    handleChange,
    handleSubmit,
    userData,
  } = useOutletContext();

  if (!userData?.subscriptionID) {
    return <CheckForSignatureBeforeUpdate />;
  }
  return (
    <Wrapper className={`plan ${subscriptionStuff[0].descriptionClass}`}>
      <div
        className={`plan__decription-${subscriptionStuff[0].descriptionClass} background_img`}
      >
        <div className="plan__description-containers">
          <div className="title">
            <h2>{subscriptionStuff[0].plan.plan}</h2>
            <h3>{subscriptionStuff[0].plan.planPrice}</h3>
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
              value={password}
            />
            <label htmlFor="password" className="animated-label">
              senha
            </label>
            <SubscriptionBtnWrapper className="update">
              <button
                type="submit"
                className="submit__subscription-0"
                onClick={handleClick}
                disabled={isLoading}
              >
                {isLoading ? "Processando..." : "Assinar"}
              </button>
            </SubscriptionBtnWrapper>
          </FormSubscription>
          <div className="links">
            <Link
              to={`/planos/${subscriptionStuff[1].urlLinkPlan}/${subscriptionStuff[1].priceId}?plan=advanced`}
            >
              proximo plano &rarr;
            </Link>
          </div>
          <Link
            className="know__more"
            to={`/planos/${subscriptionStuff[0].urlLinkPlan}`}
          >
            saiba mais...
          </Link>
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.div``;
export default BasicPlan;
