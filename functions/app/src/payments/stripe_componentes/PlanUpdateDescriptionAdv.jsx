import { Wrapper } from "../../assets/Wrappers/PlansDescWrapper";
import { Link, useOutletContext } from "react-router-dom";
import { subscriptionStuff } from "../../utils/subscriptionStuff";

const PlanUpdateDescriptionAdv = () => {
  const { userData } = useOutletContext();
  return (
    <Wrapper>
      <div className="texts">
        <h1 className="title-advanced">PLANO AVANÇADO</h1>
        <p>
          Plano ideal para quem precisa de uma grande quantidade de fretes
          circulando sem gastar muito, por apenas 100R$ você tem acesso a 25
          publicações, visíveis por todo o Brasil de forma gratuita! Não perca
          tempo e inicie nossa parceria, nosso objetivo é simplificar sua
          jornada de trabalho, reduzindo ao máximo o tempo que você gastaria
          para encontrar um entregador.
        </p>
        <div className="links-cont">
          <Link to="/planos/basico" className="link-basic">
            PLANO BÁSICO
          </Link>
          <Link to="/planos/premium" className="link-premium">
            PLANO PREMIUM
          </Link>
        </div>
      </div>
      <div className="links">
        <div className="link-to-product">
          <Link
            className="link-fit-cont"
            to={
              userData?.subscriptionID
                ? `/planos/${subscriptionStuff[1].urlLinkPlan}/${subscriptionStuff[1].priceId}?plan=advanced`
                : "/produto_assinatura"
            }
          >
            ASSINAR
          </Link>
        </div>
      </div>
    </Wrapper>
  );
};

export default PlanUpdateDescriptionAdv;
