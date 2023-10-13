import { useEffect } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Link, Outlet, useLocation } from "react-router-dom";
import { styled } from "styled-components";
import { SupportFormsComponent } from "../component";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../feature/userFromDataSlice/userDataSlice";

//Vamos colocar aqui duvidar decorrentes e o principal os inks para contato com o support
let text = "Inicie uma chamada de suporte";
const Support = () => {
  const { userData } = useSelector((store) => store.userData);
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  console.log();
  useEffect(() => {
    const query = new URLSearchParams(window.location.search);
    if (!userData) dispatch(getUser());
    if (query.get("sessão_status")) {
      document.querySelector(".support_ticket")?.classList.add("target");
      setTimeout(() => {
        document.querySelector(".support_ticket")?.classList.remove("target");
      }, 1000);
    }
  }, []);
  return (
    <>
      <Wrapper>
        {pathname.split("/")[2] === "suporte-chat" ? (
          <Outlet />
        ) : (
          <>
            <div className="support_recorces">
              <div className="usual_questions">
                <h2 className="heading_text">
                  Como faço para ver os fretes?
                  <br />
                  <span>
                    Basta que o {"senhor(a)"} se cadastre em nosso site{" "}
                    <Link to="/cadastro">cadastrar</Link>, ao se cadastrar o{" "}
                    {"senhor(a)"} ganha acesso a todos os fretes postados
                  </span>
                </h2>
                <h2 className="heading_text">
                  Como registro fretes no site?
                  <br />
                  <span>
                    Para registrar fretes o {"senhor(a)"} precisa ter um cargo
                    especial, esse cargo é obtido através de uma assinatura!{" "}
                    <Link to="/produto_assinatura">Conferir</Link>
                  </span>
                </h2>
                <h2 className="heading_text">
                  Como o site funciona, para caminhoneiros e entregadores?
                  <br />
                  <span>
                    Quando cadastrado o senhor(a) pode acessar os fretes na
                    sessão dos <Link to="/frete_page">fretes</Link>
                  </span>
                </h2>
                <h2 className="heading_text">
                  Quanto tempo demora para que eu possa postar meus fretes?
                  <br />
                  <span>
                    Assim que o senhor realizou a assinatura já esta apto a
                    postar, bastar ir até a sessão{" "}
                    <Link to="/create-frete">Publicar Frete</Link>
                  </span>
                </h2>
              </div>
              <SupportFormsComponent text={text} />
              <div className="all_contacts">
                <h2 className="heading_text">
                  Redes sociais <br />
                </h2>
                {/* <div className="ballon">
            <p>Só aceitamos propostas nesse email</p>
          </div> */}
                <a
                  href={`mailto:${import.meta.env.VITE_EMAIL}`}
                  // onMouseEnter={showBallon}
                  // onMouseLeave={hideBallon}
                  className="mail"
                >
                  onfrete7@gmail.com
                </a>
                <ul className="social-links">
                  {/* <a href="perfil da empresa" className="fa">
                <FaFacebook />
                </a>
                <a href="perfil da empresa" className="fa">
                <FaTwitter />
              </a> */}
                  <a href={import.meta.env.VITE_LINKEDIN} className="fa">
                    <FaLinkedin />
                  </a>
                  <a href={import.meta.env.VITE_GIT} id="git" className="fa">
                    <FaGithub />
                  </a>
                </ul>

                {/* acho que aqui não vai ter conteúdo, vou remover */}
              </div>
              <div className="proposals"></div>
            </div>
          </>
        )}
      </Wrapper>
    </>
  );
};
const Wrapper = styled.main`
  padding: 5rem;
  .support_recorces {
    margin-top: 64px;
    div {
      box-shadow: 0 1px 1px rgba(0, 0, 0, 0.08);
    }
  }
  .support_recorces {
    display: grid;
    gap: 15px;
    min-height: 100vh;
    .heading_text {
      color: var(--blue-ocn);
    }
    br {
      margin: 5px;
    }
    p {
      color: var(--yellow-org);
      font-size: 1.6rem;
    }
    .usual_questions {
      overflow: hidden;
      :not(:first-child) {
        margin-top: 3rem;
      }
      padding: 1.5rem;
      grid-area: usual_questions;
      height: 100%;
      h2 {
        border-bottom: solid 1px var(--grey-700);
        font-size: 2rem;

        br {
          margin: 5px;
        }
        span {
          color: var(--grey-700);
          font-size: 1.8rem;
          a {
            color: var(--red-org);
          }
        }
      }
    }
    .all_contacts {
      display: grid;
      grid-template-rows: 1fr 1fr 1fr;
    }
    .sujestions_box {
      grid-area: support_ticket;
      height: 100%;
      padding: 3rem;
      display: grid;
      h2 {
      }
      #text {
        width: 80%;
        justify-self: center;
      }
    }
    .support_ticket {
      text-align: center;
      h2 {
        color: var(--primary-300);
        font-size: 1.6rem;
        font-weight: 500;
      }
    }
    .all_contacts {
      display: grid;
      row-gap: 1rem;
      height: 100%;
      padding: 2rem;
      text-align: center;
      h2 {
        place-self: center;
        font-size: 4rem;
      }
      .mail {
        font-size: 3rem;
        margin: 0 auto;
      }
      .social-links {
        margin: 0 auto;
        .fa {
          font-size: 3rem;
          margin: 1rem;
          color: var(--dark-bl);
        }
        #git {
          color: var(--grey-700);
        }
      }
    }
    .proposals {
      display: none;
    }
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    grid-template-areas:
      "usual_questions support_ticket"
      "usual_questions social";
    .support-forms {
      display: grid;
      place-items: center;
      #text {
        width: 70%;
        height: 50%;
        margin: 0;
        margin-top: 1rem;
        place-self: center;
      }
      .btn__animated-content {
        margin: 0 0 3rem 0;
        border-radius: 8px;
      }
    }
    .form-box,
    .form-opt {
      box-shadow: none !important;
      display: grid;
      width: 90%;
      margin: 0;
      .hide {
        display: none;
      }
      label {
        width: 70%;
        text-align: initial;
        padding-left: 12.5rem;
      }

      input,
      select {
        place-self: center;
        height: 3rem;
        width: 70%;
        margin: 0;
      }
      select {
        margin-bottom: 3.7rem;
        margin-top: 2.7rem;
      }
      .text-lab {
        place-self: center;
        margin: 0;
        padding: 0;
        width: fit-content;
        margin-bottom: -8rem;
      }
    }
  }
  @media (max-width: 750px) {
    .support_recorces {
      grid-template-columns: 1fr;
      grid-template-areas:
        "support_ticket"
        "support_ticket"
        "usual_questions"
        "social";
    }
  }
  @media (max-width: 480px) {
    padding: 5rem 2rem;
    .support_recorces {
      margin-top: 1rem;
      width: 100%;
      .support-forms {
        width: 100%;
        .form-box,
        .form-opt {
          width: 100%;
        }
      }
    }
  }
  .ballon {
    box-shadow: none;
    clip-path: polygon(
      0% 0%,
      100% 0%,
      100% 75%,
      55% 75%,
      50% 100%,
      45% 75%,
      0% 75%
    );
    transition: all 0.3s ease-in-out;
    background-color: rgba(212, 199, 199, 0.212);
    padding: 4rem;
    border-radius: 7px;
    p {
      font-weight: 700;
    }
  }
  .active-ballon {
    visibility: visible;
    opacity: 1;
  }
  .target {
    color: var(--yellow-org);
    outline: 3px solid var(--yellow-org);
    border-radius: 3px;
    animation: pulse 0.5s ease-in-out infinite;
  }
  @keyframes pulse {
    0% {
      transform: translateY(-2px);
    }
    100% {
      transform: translateY(2px);
    }
    0% {
      transform: translateY(0);
    }
  }
`;

export default Support;
