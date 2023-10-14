import { useEffect } from "react";
import { styled } from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../feature/userFromDataSlice/userDataSlice";
import { Wrapper as FirstSection } from "../assets/Wrappers/HomeFirstSe";
import { Wrapper as SecondSection } from "../assets/Wrappers/HomeSecondSec";
import { Wrapper as ThirdSection } from "../assets/Wrappers/HomeThirdSec";
import { Wrapper as FourthSection } from "../assets/Wrappers/HomeFourthSec";
import { Link, useNavigate } from "react-router-dom";
import truckSvg from "/truck-svg.svg";
import deliverySvg from "/undraw_online_stats_0g94.svg";
import tech from "/undraw_product_explainer_8jbm.svg";
import { POPUP_ENUM } from "../utils/popupsEnum";
import { trigger } from "../utils/homePageAnimation";
import { NewSectionHomePage } from "../assets/Wrappers/NewSectionHomePage";
import { NewSectionHomePageSec } from "../assets/Wrappers/NewSectionHomePageSec";
const HomePage = () => {
  const { userData } = useSelector((store) => store.userData);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleClick = () => {
    setTimeout(() => {
      const show = document.querySelector(".popup_content-form");
      const showContent = document.querySelector(".popup_content-display-form");
      if (!show || !showContent) return navigate("/");
      show.classList.add("show");
      showContent.classList.add("show_contente");
    });
  };
  const handleClickMessage = () => {
    setTimeout(() => {
      const show = document.querySelector(".popup_content");
      const showContent = document.querySelector(
        ".popup_content-display-form-message"
      );
      if (!show || !showContent) return navigate("/");
      show.classList.add("show");
      showContent.classList.add("show_contente");
    });
  };
  useEffect(() => {
    if (!userData) {
      dispatch(getUser());
    }
  }, []);

  return (
    <Wrapper>
      <div className="set-structure">
        <FirstSection id="top">
          <div className="first__box-content">
            {/* <div className="welcome">
              <h1 className="welcome-header">
                <p className="on">on</p>FRETE
              </h1>
            </div> */}
            <div className="sell_content-first-sec">
              <div className="text-container">
                <div className="break__limit">
                  <h1>
                    Divulgue seus fretes para todo o Brasil
                    <p className="break__limit-para">
                      Somos a solução para seus problemas de logística
                      {/* , não
                      perca tempo e vamos juntos nessa jornada */}
                    </p>
                  </h1>
                </div>
                <div className="plan_infos-first-sec"></div>
              </div>
            </div>
            <div className="plans_first-sec">
              <Link
                onClick={() => {
                  document.getElementById("hook").scrollIntoView({
                    behavior: "smooth",
                    block: "center",
                  });
                }}
                className="plan_first-sec-link"
              >
                Quero conhecer
              </Link>
            </div>
            <div className="bounce_animation">
              <span className="arrow__animation"></span>
            </div>
          </div>
        </FirstSection>
        <SecondSection>
          <div className="second__box-content">
            <h1>O QUE OFERECEMOS?</h1>
            <div className="in-line_box">
              <div className="logistics text-eff">
                <h1>Logística</h1>
                <p>
                  Acreditamos que a melhor maneira de organizar o processo de
                  logística da sua empresa é facilitando o acesso de
                  entregadores as suas cargas, em poucos cliques o entregador já
                  consegue achar a carga publicada
                </p>
              </div>
              <div className="organization text-eff">
                <div className="icon"></div>
                <h1>Organização</h1>
                <p>
                  Se sua empresa precisa de ajuda para organizar o setor de
                  entregas interno, a onFrete tem a solução, site feito com
                  carinho para entender suas necessidades
                </p>
              </div>
              <div className="deliveryman text-eff">
                <div className="icon"></div>
                <h1>Entregadores</h1>
                <p>
                  Entregadores tem a opção de escolher a entrega que o melhor
                  atende todo conteúdo é disponível de forma gratuita, escolha o
                  tipo de carga e local que o melhor atende e parta em mais uma
                  aventura
                </p>
              </div>
            </div>
          </div>
        </SecondSection>
        <NewSectionHomePageSec>
          <div className="new-section-sec">
            <div className="left-sec">
              <h1>FRETES</h1>
              <p>
                Crie seus fretes quando quiser, descreva os detalhes da carga
                contato/localização e pronto, é só o entregador analisar se o
                veículo corresponde com o que foi descrito e negociar
                diretamente com você
              </p>
              <div className="text-1"></div>
            </div>
            <div className="right-sec">
              <div className="image"></div>
            </div>
          </div>
        </NewSectionHomePageSec>
        <FourthSection>
          <div className="fourth-content">
            <h1>Nosso processo é simples</h1>
            {/* <p>
                        Empresário posta seus fretes e o entregador mais próximo entra em
                        contato para buscar a carga
                      </p> */}
            <div className="card-explain" id="hook">
              <div
                className="img-container worker-box"
                onClick={() => trigger("worker-box", "target")}
              >
                <p className="card-description">
                  Entrega postada com os detalhes da localização e veículo
                  compatível
                </p>
                <img
                  src={deliverySvg}
                  className="imgs"
                  alt="area de trabalho"
                />
              </div>
              <div
                className="img-container search-delivery"
                onClick={() => trigger("worker-box", "target")}
              >
                <p className="card-description">
                  Entregador escolhe o frete que o melhor atende
                  {/* , em uma
                            pesquisa fácil por localização e detalhes do veículo */}
                </p>
                <img src={tech} className="imgs" alt="pequisa por entregas" />
              </div>
              <div
                className="img-container truck-box"
                onClick={() => trigger("worker-box", "target")}
              >
                <p className="card-description">
                  Entregador busca o frete e parte em mais uma aventura
                </p>
                <img src={truckSvg} className="imgs" alt="caminhão com carga" />
              </div>
            </div>
          </div>
        </FourthSection>
        <NewSectionHomePage>
          <div className="new-section">
            <div className="title-container">
              <h2 className="title">
                Aumente a eficiência do processo de logística da sua empresa
              </h2>
            </div>
            <div className="text-side">
              <div className="text-1">
                <h2 className="small-title">Para o empresário</h2>
                <p>
                  Todos os entregadores do Brasil terão acesso as suas cargas
                  publicadas de forma gratuita, basta o entregador se registra
                  em nosso site
                </p>
              </div>
              <div className="text-2">
                <h2 className="small-title">Para o entregador</h2>
                <p>
                  Construímos um sistema de filtros para atender qualquer
                  necessidades de busca, em poucos minutos o entregador já
                  consegue encontrar o frete que o melhor atende e negociar
                  diretamente com o empresário
                </p>
              </div>
            </div>
            <div className="content-right-side">
              <div className="box-1">
                <h2>Contato</h2>
                <p>
                  Deixe sua{" "}
                  <Link
                    to={`?popup=${POPUP_ENUM.popup.message}&sessão=home_page`}
                    onClick={handleClickMessage}
                  >
                    mensagem
                  </Link>{" "}
                  ou mande um email{" "}
                  <a href="mailto:onfrete7@gmail.com">onfrete7@gmail.com</a>{" "}
                </p>
              </div>
              <div className="box-2">
                <h2>Saiba mais</h2>
                <p>
                  Visite nosso <Link to="/about_page">artigo</Link> e de uma
                  olhada no que temos a oferecer com mais detalhes
                </p>
              </div>
            </div>
          </div>
        </NewSectionHomePage>
        <ThirdSection id="plan-sec">
          <div className="third-content">
            <div className="third_left-side">
              <div className="plan plan-basic">
                <h1>Conheça nossos planos</h1>
                <h2>Plano básico</h2>
                <p>Publique até 17 fretes</p>
              </div>
              <div className="plan plan-advanced">
                <h2>Plano avançado</h2>
                <p>Publique até 25 fretes</p>
              </div>
              <div className="plan plan-premium">
                <h2>Plano premium</h2>
                <p>Publique até 37 fretes</p>
              </div>
              <div className="plan plan-custom">
                <h2>Planos customizáveis</h2>
                {/* <p>
                  Entre em{" "}
                  <a href={`mailto:${import.meta.env.VITE_EMAIL}`}>contato</a>{" "}
                  ou deixe sua{" "}
                </p> */}
              </div>
              <p style={{ marginTop: "2rem" }}>
                Comece hoje mesmo a postar seus fretes para todo o Brasil!{" "}
                <br />{" "}
                {userData ? (
                  <Link className="popup-link" to={`/produto_assinatura`}>
                    Assinar
                  </Link>
                ) : (
                  <Link
                    className="popup-link"
                    onClick={handleClick}
                    to={`registrar?popup=${POPUP_ENUM.popup.singIn}&sessão=home_page`}
                  >
                    Registrar-se
                  </Link>
                )}
              </p>
            </div>
            <div className="third_right-side">
              <h1>Quero começar hoje a publicar meus fretes</h1>
              <div className="card-container">
                <div className="cards">
                  <div className="plan-card basic">
                    <p className="plan-desc">Básico</p>
                    <p>69 R$</p>
                  </div>
                  <div className="plan-card advanced">
                    <p className="plan-desc">Avançado</p>
                    <p>100 R$</p>
                  </div>
                  <div className="plan-card premium">
                    <p className="plan-desc">Premium</p>
                    <p>150 R$</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ThirdSection>
      </div>
      <Link
        className="back-to-top"
        onClick={() => {
          document
            .getElementById("top")
            .scrollIntoView({ behavior: "smooth", block: "start" });
        }}
      >
        Voltar ao início
      </Link>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  width: 100vw;
  .set-structure {
    margin: 0 auto;
    display: grid;
    grid-template-rows: auto;
    row-gap: 10rem;
  }
  section {
    width: 100%;
  }
  .first__box-content,
  .second__box-content,
  .new-section-sec,
  .fourth-content,
  .new-section,
  .third-content {
    width: 130rem;
    margin: 0 auto;
  }
  @media (max-width: 1380px) {
    .first__box-content,
    .second__box-content,
    .new-section-sec,
    .fourth-content,
    .new-section,
    .third-content {
      width: 100%;
    }
  }
  @media (max-width: 1000px) {
    .third-content {
      display: block;
      .third_left-side {
        padding-left: 10rem;
        margin-bottom: 5rem;
      }
      .cards {
        margin-left: 10rem;
        .basic {
          left: 35% !important;
        }
      }
    }
  }
  @media (max-width: 900px) {
    .third-content {
      .cards {
        margin-left: 5rem;
      }
    }
  }
  @media (max-width: 800px) {
    .set-structure {
      row-gap: 10rem;
    }
    .first__box-content {
      .sell_content-first-sec {
        padding: 0;
      }
      .break__limit {
        h1 {
          padding: 0;
          font-size: 4rem;
        }
      }
    }
    .second__box-content {
      .in-line_box {
        grid-template-columns: auto;
        grid-template-rows: 1fr 1fr 1fr;
      }
    }
    .new-section-sec {
      grid-template-columns: auto;
      grid-template-rows: 1fr 1fr;
    }
    .fourth-content {
      .card-explain {
        grid-template-columns: auto;
        grid-template-rows: 1fr 1fr 1fr;
      }
    }
    .new-section {
      .text-side {
        flex-direction: column;
      }
      .content-right-side {
        flex-direction: column;
      }
    }
  }
  @media (max-width: 760px) {
    .back-to-top {
      margin-top: 20rem;
    }
    .third_left-side {
      padding-left: 0 !important;
    }
    .third-content {
      .card-container {
        height: 50rem;
      }
      .cards {
        margin-left: 0;
        display: grid;
        justify-items: center;
        .basic {
          left: unset !important;
        }
        .advanced {
          top: 35% !important;
          left: unset !important;
        }
        .premium {
          top: 70% !important;
          left: unset !important;
        }
      }
    }
  }
  @media (max-width: 480px) {
    .break__limit {
      h1 {
        padding: 0;
        font-size: 2rem !important;
        .break__limit-para {
          font-size: 1.5rem !important;
        }
      }
    }
    .second__box-content {
      h1 {
        font-size: 2rem;
      }
      .in-line_box {
        div {
          h1 {
            font-size: 1.7rem;
          }
          p {
            font-size: 1.5rem !important;
          }
        }
      }
    }
    .new-section-sec {
      .left-sec {
        h1 {
          font-size: 2rem;
        }
        p {
          font-size: 1.5rem;
        }
      }
    }
    .fourth-content {
      h1 {
        font-size: 2rem;
      }
    }
    .new-section {
      h2 {
        font-size: 2rem !important;
      }
      p {
        font-size: 1.5rem !important;
      }
    }
    .third-content {
      h1 {
        font-size: 2rem !important;
      }
      .third_right-side {
        h1 {
          margin-top: 5rem;
        }
      }
    }
  }
  color: var(--grey-900);
  a:hover {
    color: var(--red-org);
  }
  .back-to-top {
    display: grid;
    height: 4rem;
    place-content: center;
    font-size: 1.5rem;
    background-color: var(--grey-500);
    color: var(--white);
  }
  .back-to-top:hover {
    color: var(--white);
    background-color: var(--grey-600);
  }
`;

export default HomePage;
