import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userSubscription } from "../../feature/subscription/subscriptionSlice";
import { Link } from "react-router-dom";
import { styled } from "styled-components";
import { useClienteContext } from "../../Pages/ClientePage";
import AnimatedeWraning from "../../popups/AnimatedeWraning";
import { enumsForIconsPopupsPaymentStatus } from "../../utils/ballonEnums";
import {
  landingRedirectTarget,
  targetUpdate,
} from "../../utils/landingRedirectClienteSub";
import LoadingComponent from "../../component/LoadingComponent";

const ClienteSubscrition = () => {
  const [render, setRender] = useState(false);
  const dispatch = useDispatch();

  const { subscription, isLoading } = useSelector(
    (store) => store.subscription
  );
  const { userData } = useClienteContext();
  const query = new URLSearchParams(window.location.search);
  useEffect(() => {
    landingRedirectTarget(userData);
    if (!subscription) {
      dispatch(userSubscription());
    }
  }, [render]);
  if (isLoading) {
    return <LoadingComponent />;
  }
  if (!userData?.subscriptionID) {
    setTimeout(() => {
      return (
        <Wrapper>
          <h1 className="explore_subscription center__content_with-absolute">
            Conheça nossos planos <Link to="/produto_assinatura">explorar</Link>
          </h1>
        </Wrapper>
      );
    });
  }
  if (!query.get("sessionId")) {
    return (
      <Wrapper className="height-adjust">
        <h1>
          Parece que houve algum problema na rota até essa pagina, por favor
          clique no{" "}
          <Link
            to={`/client_page/pagamentos?sessionId=${userData?.subscriptionID?._id}&sessão=pagamento`}
            onClick={() => setRender(!render)}
          >
            link
          </Link>{" "}
          para o redirecionar
        </h1>
      </Wrapper>
    );
  }
  if (query.get("atualizar_minha_assinatura")) {
    targetUpdate(query);
  }
  let status;
  switch (subscription?.status) {
    case "paid":
      status = "pago";
      break;
    case "open":
      status = "Aberto";
      break;
    default:
      break;
  }

  return (
    <>
      <Wrapper>
        {status === "Aberto" && (
          <AnimatedeWraning {...enumsForIconsPopupsPaymentStatus} />
        )}
        <h2 className="heading-title">Status da assinatura</h2>
        <div className="subscription__status-container">
          <div className="client-status">
            <p>Status: {status}</p>
            <p>Plano: {subscription?.typeOfPlan}</p>
            <p>
              <Link to="/planos" className="link-ref-update">
                Atualizar
              </Link>{" "}
              seu plano
            </p>
            {/* <AnimatedeWraning direction={direction} /> */}
            <div className="profile">
              <div className="profile__container">
                {subscription?.at_canceling_process ? (
                  <Link
                    className="ref-link"
                    to={`/client_page/inscrição?status=recuperar`}
                  >
                    Recuperar Assinatura
                  </Link>
                ) : (
                  <Link to={`/client_page/inscrição?status=cancelar`}>
                    Cancelar inscrição
                  </Link>
                )}
              </div>
            </div>
          </div>
          <div className="plan-description">
            <h2 className="plan-heading">{subscription?.typeOfPlan}</h2>
            {userData?.isDeletede ? (
              <>
                <p
                  style={{
                    fontSize: "1.2rem",
                    padding: "0 0 0 2rem",
                  }}
                >
                  Ola! sua conta esta em processo de cancelamento, quando o
                  prazo de 30 dias for atingido sua conta junto de sua
                  assinatura sera removida, entre em contato caso precise de
                  ajuda e queria remover esses status, ou entre nesse{" "}
                  <Link
                    style={{ fontSize: "1.4rem" }}
                    to="/client_page/abortar-processo"
                  >
                    link
                  </Link>{" "}
                  e reverta o processo de cancelamento da conta junto da
                  assinatura
                </p>
              </>
            ) : (
              <>
                {subscription?.typeOfPlan === "Plano básico" && (
                  <p className="plan-paragraph">
                    Você pode postar até 17 fretes, básico mas eficaz para
                    empresas que estão iniciando! aproveite e distribua seus{" "}
                    <Link to="/create-frete">fretes</Link> por todo Brasil
                  </p>
                )}
                {subscription?.typeOfPlan === "Plano avançado" && (
                  <p className="plan-paragraph">
                    Você pode postar até 25 fretes, plano perfeito para empresas
                    que estão caminhando para o sucesso como a sua! Aproveite e
                    distribua seus <Link to="/create-frete">fretes</Link> por
                    todo Brasil
                  </p>
                )}
                {subscription?.typeOfPlan === "Plano premium" && (
                  <p className="plan-paragraph">
                    Você pode postar até 37 fretes, ideal para empresas grande
                    como sua, aproveite e distribua seus{" "}
                    <Link to="/create-frete">fretes</Link> por todo Brasil
                  </p>
                )}
              </>
            )}
          </div>
        </div>
        <div className="singnature-optins">
          <div className="update__payment-methods">
            <h2>
              Mudar opções de{" "}
              <Link to="/client_page/inscrição?status=pagamento">
                pagamento
              </Link>
            </h2>
          </div>
          <div className="payment__historic">
            <div className="historic">
              <h2>
                Não recebeu o recibo no email?{" "}
                <Link to={subscription?.hosted_invoice_url}>
                  Recuperar recibo
                </Link>
              </h2>
            </div>
          </div>
        </div>
      </Wrapper>
    </>
  );
};
const Wrapper = styled.div`
  padding: 8rem;
  position: relative;
  .heading-title {
    font-size: 3.5rem;
    text-align: center;
    color: var(--blue-ocn);
  }
  h1,
  p,
  h2,
  p,
  a,
  .profile__container {
    font-weight: 700;
    font-size: 3rem;
    margin: 5rem 0;
  }
  a {
    color: var(--red-org);
  }

  .pulsing__animation {
    left: 22rem;
    top: 20rem;
  }
  .ballon_text {
    position: revert;
    margin-top: 3rem;
  }
  .ballon_text-container {
    position: relative;
    position: absolute;
    height: 20rem;
    display: table;
    left: 8.5rem;
  }
  .pulsing__animation::before,
  .pulsing__animation::after {
    background: var(--yellow-org);
    opacity: 0.3;
  }
  .ballon_text-container {
    padding: 1rem 1rem 3rem 1rem;
    width: 30rem;
    height: calc(100% + 30px);
    background: rgba(253, 237, 7, 1);
    border-top-left-radius: 9px;
    border-top-right-radius: 3px;
    .ballon_text {
      font-size: 1.4rem;
      font-weight: 550;
      letter-spacing: 1px;
    }
  }
  .subscription__status-container,
  .singnature-optins {
    box-shadow: var(--shadow-1);
    padding: 2rem;
  }

  .subscription__status-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
  .client-status {
    border-right: 1px solid var(--grey-700);
  }
  .singnature-optins {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
  .plan-heading {
    text-align: center;
  }
  .update__payment-methods,
  .payment__historic {
    padding: 3rem;
    h2,
    a {
      font-size: 1.8rem;
    }
  }
  .payment__historic {
    border-left: 1px solid var(--grey-700);
  }
  .plan-paragraph {
    font-size: 2rem;
    padding: 3rem;
    text-align: center;
    a {
      font-size: 2rem;
    }
  }
  @media (max-width: 750px) {
    padding: 0;
    .singnature-optins {
      grid-template-columns: 1fr;
    }
    .subscription__status-container {
      grid-template-columns: 1fr;
    }
    .client-status {
      border-right: none;
      border-bottom: 1px solid var(--grey-700);
    }
  }
  .target {
    color: var(--yellow-org);
    outline: 3px solid var(--yellow-org);
    border-radius: 3px;
    animation: pulse 4s ease-in-out infinite;
  }
  .target-redirect-from-product {
    outline: 3px solid var(--blue-ocn);
    border-radius: 3px;
  }
  @keyframes pulse {
    100% {
      outline-offset: 1.2rem;
    }
  }
  h2,
  a,
  p {
    font-size: 1.8rem;
  }
  /* setupe ballon end */
`;
export default ClienteSubscrition;
