import { styled } from "styled-components";
import { Link } from "react-router-dom";
import { POPUP_ENUM } from "../utils/popupsEnum";

const Footer = () => {
  const handleClickMessage = () => {
    setTimeout(() => {
      const show = document.querySelector(".popup_content");
      const showContent = document.querySelector(
        ".popup_content-display-form-message"
      );
      if (!show || !showContent) return;
      show.classList.add("show");
      showContent.classList.add("show_contente");
    });
  };
  return (
    <>
      <Wrapper>
        <div className="footer-top-section">
          <div className="know-more">
            <p>conheça-nos</p>
            <Link className="first" to="/about_page">
              sobre
            </Link>
            <Link to="/about_page/propostas">propostas</Link>
            <Link to="/about_page/futuro">futuro</Link>
          </div>
          <div className="payments">
            <p>nossas assinaturas</p>
            <Link className="first" to="/produto_assinatura?plano=básico">
              plano básico
            </Link>
            <Link to="/produto_assinatura?plano=avançado">plano avançado</Link>
            <Link to="/produto_assinatura?plano=premium">plano premium</Link>
            <Link>planos customizáveis</Link>
          </div>
          <div className="help">
            <p>ajuda</p>
            <Link className="first" to="/suporte_cliente">
              tickets
            </Link>
            <Link
              to={`?popup=${POPUP_ENUM.popup.message}&sessão=home_page`}
              onClick={handleClickMessage}
              id="messages"
            >
              deixe sua mensagem
            </Link>
          </div>
        </div>
        <div className="footer-middle-section">
          <div className="logo">
            <div className="logo-body"></div>
            <a href="mailto:onfrete7@gmail.com">onfrete7@gmail.com</a>
          </div>
        </div>
        <div className="footer-last-section">
          <div className="footer-links">
            <Link className="first" to="/about_page/regras">
              condições de uso
            </Link>
            <Link to="/about_page/sobre-cookie">cookies</Link>
          </div>
          <h5>
            &copy; {new Date().getFullYear()} {""}
            onFrete All rights reserved
          </h5>
        </div>
      </Wrapper>
    </>
  );
};
const Wrapper = styled.footer`
  height: 50rem;
  position: relative;
  display: grid;
  background: var(--grey-900);
  grid-template-rows: 1fr 0.5fr 0.4fr;
  a {
    font-size: 1.2rem;
    color: var(--white);
  }
  a:hover {
    color: var(--red-org);
  }
  .footer-top-section {
    background: var(--grey-600);
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;

    place-content: center;
    justify-items: center;
    div {
      width: 100%;
      height: 100%;
      text-align: center;
      display: grid;
      color: var(--white);
      p {
        letter-spacing: 2px;
        font-size: 1.4rem;
        height: 2rem;
      }
      .first {
      }
      a {
        margin-top: 5px;
        letter-spacing: 1px;
        width: fit-content;
        place-self: center;
      }
    }
    .help {
      a {
        margin-top: -2rem;
      }
    }
    .know-more {
      border-right: 1px solid var(--grey-200);
    }
    .payments {
      border-right: 1px solid var(--grey-200);
    }
  }
  .footer-middle-section {
    background: var(--grey-700);
    text-align: center;
    display: grid;
    place-content: center;
    .logo {
      h1 {
        color: var(--primary-400);
      }
    }
  }
  .footer-last-section {
    display: grid;
    place-content: center;
    position: relative;
    h5 {
      color: var(--white);
      font-size: 1.3rem;
      position: absolute;
      left: 50%;
      top: 70%;
      transform: translate(-50%);
    }
    .footer-links {
      position: relative;
      a {
        margin: 2rem;
      }
      :last-child {
      }
      :first-child {
      }
      &::after {
        content: "";
        position: absolute;
        background-color: var(--white);
        width: 1px;
        height: 2rem;
        right: 8.5rem;
      }
    }
  }
  @media (max-width: 500px) {
    height: 90rem;
    .footer-top-section {
      grid-template-columns: 1fr;
      row-gap: 3rem;
      p {
        margin: 0 0 1rem 0;
      }
      .help {
        a {
          margin: 0;
        }
      }
    }
  }
  .msg-target {
    color: var(--yellow-org);
    outline: 3px solid var(--yellow-org);
  }
  .logo-body {
    margin: 0 auto;
    background-size: 7.5rem;
    width: 8rem;
    height: 8rem;
  }
`;
export default Footer;
