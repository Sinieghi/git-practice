import { Wrapper } from "../../assets/Wrappers/PlansDescWrapper";
import { Link, useOutletContext } from "react-router-dom";
import { subscriptionStuff } from "../../utils/subscriptionStuff";

const PlanUpdateDescriptionBas = () => {
  const { userData } = useOutletContext();
  return (
    <Wrapper>
      <div className="texts">
        <h1 className="title-basic">PLANO BÁSICO</h1>
        <p>
          Básico em quantidade, porém muito eficiente o plano básico vem para
          resolver o processo de busca por entregador, por apenas 69R$ você tem
          acesso a 17 publicações, visíveis por todo o Brasil de forma gratuita!
          Não perca tempo e inicie nossa parceria, nosso objetivo é simplificar
          sua jornada de trabalho, reduzindo ao máximo o tempo que você gastaria
          para encontrar um entregador.
        </p>
        <div className="links-cont">
          <Link to="/planos/premium" className="link-premium">
            PLANO PREMIUM
          </Link>
          <Link to="/planos/avançado" className="link-advance">
            PLANO AVANÇADO
          </Link>
        </div>
      </div>
      <div className="link-to-product"></div>
      <div className="links">
        <Link
          className="link-fit-cont"
          to={
            userData?.subscriptionID
              ? `/planos/${subscriptionStuff[0].urlLinkPlan}/${subscriptionStuff[0].priceId}?plan=basico`
              : "/produto_assinatura"
          }
        >
          ASSINAR
        </Link>
      </div>
    </Wrapper>
  );
};

export default PlanUpdateDescriptionBas;
