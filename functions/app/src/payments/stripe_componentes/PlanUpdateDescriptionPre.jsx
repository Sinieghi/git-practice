import { Wrapper } from "../../assets/Wrappers/PlansDescWrapper";
import { Link, useOutletContext } from "react-router-dom";
import { subscriptionStuff } from "../../utils/subscriptionStuff";

const PlanUpdateDescriptionPre = () => {
  const { userData } = useOutletContext();
  return (
    <Wrapper>
      <div className="texts">
        <h1 className="title-premium">PLANO PREMIUM</h1>
        <p>
          Ideal para quem quer ter o maior numero de posts circulando pelo
          Brasil, por apenas 150R$ você tem acesso a 37 publicações, visíveis
          por todo o Brasil de forma gratuita! Não perca tempo e inicie nossa
          parceria, nosso objetivo é simplificar sua jornada de trabalho,
          reduzindo ao máximo o tempo que você gastaria para encontrar um
          entregador.
        </p>
        <div className="links-cont">
          <Link to="/planos/basico" className="link-basic">
            PLANO BÁSICO
          </Link>
          <Link to="/planos/avançado" className="link-advance">
            PLANO AVANÇADO
          </Link>
        </div>
      </div>
      <div className="links">
        <div className="link-to-product">
          <Link
            className="link-fit-cont"
            to={
              userData?.subscriptionID
                ? `/planos/${subscriptionStuff[2].urlLinkPlan}/${subscriptionStuff[2].priceId}?plan=premium`
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

export default PlanUpdateDescriptionPre;
