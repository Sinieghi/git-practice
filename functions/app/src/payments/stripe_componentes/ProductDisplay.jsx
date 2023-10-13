import { useEffect } from "react";
import { styled } from "styled-components";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { SubscriptionBtnWrapper } from "../../assets/Wrappers/updatePlanWrapper";
import { POPUP_ENUM } from "../../utils/popupsEnum";
import { getUser } from "../../feature/userFromDataSlice/userDataSlice";
import { addTarget } from "../../utils/tagertPansCard";
const ProductDisplay = () => {
  const { userData } = useSelector((store) => store.userData);
  const query = new URLSearchParams(window.location.search);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleClick = () => {
    setTimeout(() => {
      const show = document.querySelector(".popup_content-form");
      const showContent = document.querySelector(".popup_content-display-form");
      if (!show || !showContent) return navigate("/produto_assinatura");
      show.classList.add("show");
      showContent.classList.add("show_contente");
    });
  };
  useEffect(() => {
    if (!userData) {
      dispatch(getUser());
    }
    document.documentElement.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth", // Optional if you want to skip the scrolling animation
    });
    if (query.get("plano")) {
      let classTarget = ["front-bas", "front-adv", "front-pre"];
      addTarget(query.get("plano"), classTarget);
    }
  }, []);
  let linkForPopup = `/client_page/pagamentos?sessionId=${userData?.subscriptionID?._id}&sessão=pagamento&atualizar_minha_assinatura=true`;
  return (
    <Wrapper className="product_container">
      <div className="payment__basic card_container card__father">
        <div className="product card front__chield front-bas">
          <div className="front__cotente">
            <div className="photo photo__cont-0">&nbsp;</div>
            <div className="description">
              <h3>Plano básico</h3>
              <div className="change__clip">
                <h5>R$69.00 / mês</h5>
              </div>
            </div>
          </div>

          <div className="plan__descriptions"></div>
        </div>

        <div className="form__stripe card back__chield">
          <form
            action={`/api/v1/price_1NdbhBJurT2bp9vzJj7my0dB/create-checkout-sessions`}
            method="POST"
          >
            {/* Add a hidden field with the lookup_key of your Price */}
            <input type="hidden" name="lookup_key" value="Plano basico" />
            <div className="change__back-clip">
              <h5>R$69.00 / mês</h5>
              <h5 id="plan_description">Poste até 17 fretes</h5>
            </div>
            {userData ? (
              <SubscriptionBtnWrapper className="product_display">
                <button
                  id="checkout-and-portal-button"
                  className="submit__subscription-0"
                  type="submit"
                >
                  Assinar
                </button>
              </SubscriptionBtnWrapper>
            ) : (
              <SubscriptionBtnWrapper className="product_display">
                <Link
                  to={`/produto_assinatura/registrar?popup=${POPUP_ENUM.popup.singIn}`}
                  onClick={handleClick}
                  className="submit__subscription-0 default_register-btn"
                >
                  Registrar-se
                </Link>
              </SubscriptionBtnWrapper>
            )}
          </form>
          <Link to="/planos/basico" className="more">
            mais...
          </Link>
        </div>
      </div>

      <div className="payment__advanced card_container card__father-1">
        <div className="product card front__chield-1 front-adv">
          <div className="front__cotente">
            <div className="photo photo__cont-1">&nbsp;</div>
            <div className="description">
              <h3 className="fix">Plano avançado</h3>
              <div className="change__clip">
                <h5>R$100.00 / mês</h5>
              </div>
            </div>
          </div>
        </div>

        <div className="form__stripe card back__chield-1">
          <form
            action={`/api/v1/price_1NdbhgJurT2bp9vzp3CRcOcl/create-checkout-sessions`}
            method="POST"
          >
            {/* Add a hidden field with the lookup_key of your Price */}
            <input type="hidden" name="priceId" value="Plano avançado" />
            <div className="change__back-clip-1">
              <h5>R$100.00 / mês</h5>
              <h5 id="plan_description">Poste até 25 fretes</h5>
            </div>
            {userData ? (
              <SubscriptionBtnWrapper className="product_display">
                <button
                  id="checkout-and-portal-button"
                  className="submit__subscription-1"
                  type="submit"
                >
                  Assinar
                </button>
              </SubscriptionBtnWrapper>
            ) : (
              <SubscriptionBtnWrapper className="product_display">
                <Link
                  className="submit__subscription-1 default_register-btn"
                  to={`/produto_assinatura/registrar?popup=${POPUP_ENUM.popup.singIn}`}
                  onClick={handleClick}
                >
                  Registrar-se
                </Link>
              </SubscriptionBtnWrapper>
            )}
          </form>
          <Link to="/planos/avançado" className="more">
            mais...
          </Link>
        </div>
      </div>

      <div className="payment__premium card_container card__father-2">
        <div className="product card front__chield-2 front-pre">
          <div className="front__cotente">
            <div className="photo photo__cont-2">&nbsp;</div>
            <div className="description">
              <h3 className="fix-2">Plano premium</h3>
              <div className="change__clip">
                <h5>R$150.00 / mês</h5>
              </div>
            </div>
          </div>
        </div>

        <div className="form__stripe card back__chield-2">
          <form
            action={`/api/v1/price_1NdbipJurT2bp9vzcUj3xIfy/create-checkout-sessions`}
            method="POST"
          >
            {/* Add a hidden field with the lookup_key of your Price */}
            <input type="hidden" name="lookup_key" value="Plano premium" />
            <div className="change__back-clip-2">
              <h5>R$150.00 / mês</h5>
              <h5 id="plan_description">Poste até 37 fretes</h5>
            </div>
            {userData ? (
              <SubscriptionBtnWrapper className="product_display">
                <button
                  id="checkout-and-portal-button"
                  className="submit__subscription-2"
                  type="submit"
                >
                  Assinar
                </button>
              </SubscriptionBtnWrapper>
            ) : (
              <SubscriptionBtnWrapper className="product_display">
                <Link
                  to={`/produto_assinatura/registrar?popup=${POPUP_ENUM.popup.singIn}`}
                  onClick={handleClick}
                  className="submit__subscription-2 default_register-btn"
                >
                  Registrar-se
                </Link>
              </SubscriptionBtnWrapper>
            )}
          </form>
          <Link to="/planos/premium" className="more">
            mais...
          </Link>
        </div>
      </div>
      <Outlet context={{ userData, link: linkForPopup }} />
    </Wrapper>
  );
};
const Wrapper = styled.main`
  padding: 5rem;
  min-height: 100vh;
  display: grid;
  align-items: center;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 3rem;
  .front__cotente {
    height: 100%;
  }
  .photo {
    height: 50%;
    background-size: cover;
    background-repeat: no-repeat;
    overflow: hidden;
    border-top-right-radius: 3px;
    border-top-left-radius: 3px;
    background-position: 50% 50%;
    -webkit-clip-path: polygon(0 0, 100% 0, 100% 80%, 0 100%);
    clip-path: polygon(0 0, 100% 0, 100% 80%, 0 100%);
  }
  .photo__cont-0 {
    background-image: url("/product_plan-2.jpeg");
  }
  .photo__cont-1 {
    background-image: url("/product_plan-1.jpeg");
  }
  .photo__cont-2 {
    background-image: url("/product_plan-3.jpeg");
  }
  .card_container {
    height: 60rem;
    border-radius: 3px;
    h3 {
      font-size: 5rem;
      margin-top: 3rem;
      text-transform: uppercase;
      padding: 1rem 4rem;
    }
    .fix {
      padding: 0.5rem;
    }
    .fix-2 {
      padding: 2rem;
    }
    h5 {
      font-size: 3rem;
    }
  }
  .payment__basic {
    h3 {
      color: var(--primary-300);
    }
  }
  .payment__advanced {
    h3 {
      color: var(--red-org);
    }
    h5 {
      color: var(--green-dark);
    }
  }
  .payment__premium {
    h3 {
      color: var(--yellow-org);
    }
    h5 {
      color: var(--green-dark);
    }
  }
  .description {
    text-align: center;
    .change__clip {
      background: linear-gradient(
        to right,
        var(--primary-100),
        var(--primary-600)
      );
      -webkit-background-clip: text;
      background-clip: text;
      h5 {
        margin-top: 2rem;
        color: transparent;
      }
    }
    .change__clip-1 {
      background: linear-gradient(
        to right,
        var(--clr-primary-orange-2),
        var(--red-org)
      );
      -webkit-background-clip: text;
      background-clip: text;
      h5 {
        margin-top: 2rem;
        color: transparent;
      }
    }
    .change__clip-2 {
      background: linear-gradient(
        to right,
        var(--clr-primary-orange-2),
        var(--yellow-org)
      );
      -webkit-background-clip: text;
      background-clip: text;
      h5 {
        margin-top: 2rem;
        color: transparent;
      }
    }
  }
  .back__chield-2 .card {
    display: grid;
    justify-content: center;
    padding: 3rem;
  }
  @media (max-width: 1100px) {
    grid-template-columns: 1fr;
    row-gap: 3rem;
    justify-items: center;
    .card_container {
      width: 60rem;
    }
  }
  @media (max-width: 700px) {
    padding: 1rem;
    .card_container {
      width: 100%;
    }
  }
  //back
  .back__chield,
  .back__chield-1,
  .back__chield-2 {
    position: relative;
    display: grid;
    justify-content: center;
    text-align: center;
    .change__back-clip,
    .change__back-clip-1,
    .change__back-clip-2 {
      display: grid;
      h5 {
        margin-top: 7rem;
      }
      #plan_description {
        margin-bottom: 14rem;
      }
    }
  }
  button,
  #checkout-and-portal-button {
    border: transparent;
    height: 5rem;
    font-size: 2rem;
  }
  .default_register-btn {
    font-size: 2rem;
  }
  .more {
    position: absolute;
    font-size: 1.3rem;
    right: 1rem;
    bottom: 1rem;
    color: var(--red-org);
  }
  .target-0 {
    background-color: var(--green-light);
  }
  .target-1 {
    background-color: var(--clr-primary-red-2);
  }
  .target-2 {
    background-color: var(--clr-primary-orange-2);
  }
`;
export default ProductDisplay;
