import { useDispatch, useSelector } from "react-redux";
import FreteClienteShowCase from "./FreteClienteShowCase";
import { Wrapper } from "../assets/Wrappers/SingleFreteAndClienteShowcase";
import { timeConvertor } from "../utils/dateOrCurrencyFix";
import { openClienteShowcase } from "../feature/sigleFreteSlice/singleFreteSlice";
import { Link } from "react-router-dom";
import { hideSingleFrete } from "../feature/userFromDataSlice/userDataSlice";
import { useFretePageContext } from "../Pages/FretPage";
const SingleFrete = () => {
  let { isClienteShowcaseOpen, totalFretes } = useSelector(
    (store) => store.singleFrete
  );
  let { singleFrete } = useSelector((store) => store.allFretes);
  const { userData } = useFretePageContext();
  const dispatch = useDispatch();
  let convertedTime = timeConvertor(singleFrete[0].colectDate);
  let convertedTimeCreate = timeConvertor(singleFrete[0].createdAt);
  if (singleFrete[0].updatedAt) {
    var convertedTimeAtt = timeConvertor(singleFrete[0].updatedAt);
  }
  //ARRUMAR O NAVIGATE DO SINGLE FRETE
  // const query = new URLSearchParams(window.location.search);
  // query.append("único", "ref");
  // console.log(query);

  return (
    <Wrapper>
      <div className="single__frete-content">
        <article className="single-content">
          <ul className="text-content">
            <Link
              type="button"
              className="backward-arrow"
              onClick={() => dispatch(hideSingleFrete())}
            >
              &larr;
            </Link>
            <div className="d1">
              <h5>
                Nome: <span className="name">{singleFrete[0].name}</span>
              </h5>
              <div className="email-container">
                {userData ? (
                  <a href={`mailto:${singleFrete[0].email}`} className="email">
                    {singleFrete[0].email}
                  </a>
                ) : (
                  <p>email</p>
                )}
              </div>
              <h4>
                Data para coleta:{" "}
                <span className="colect">{convertedTime}</span>
              </h4>
            </div>
            <div className="d2">
              <p>
                Tipo de carga: <span>{singleFrete[0].loadType}</span>
              </p>
              <p>
                Tipo de cobertura: <span>{singleFrete[0].canvas}</span>
              </p>
              <>
                <h3>Carroceria</h3>
                {singleFrete[0].bodyworkOpen === "" ? null : (
                  <p>
                    Abertas:{" "}
                    <span className="bodywork">
                      {singleFrete[0].bodyworkOpen}
                    </span>
                  </p>
                )}
                {singleFrete[0].bodyworkClosed === "" ? null : (
                  <p>
                    Fechada:{" "}
                    <span className="bodywork">
                      {singleFrete[0].bodyworkClosed}
                    </span>
                  </p>
                )}
                {singleFrete[0].bodyworkSpecial === "" ? null : (
                  <p>
                    Especiais:{" "}
                    <span className="bodywork">
                      {singleFrete[0].bodyworkSpecial}
                    </span>
                  </p>
                )}
                <h3>Veículo</h3>
                {singleFrete[0].heavy === "" ? null : (
                  <p>
                    Pesado:{" "}
                    <span className="vehicle">{singleFrete[0].heavy}</span>
                  </p>
                )}
                {singleFrete[0].medium === "" ? null : (
                  <p>
                    Médio:{" "}
                    <span className="vehicle">{singleFrete[0].medium}</span>
                  </p>
                )}
                {singleFrete[0].light === "" ? null : (
                  <p>
                    Leve:{" "}
                    <span className="vehicle">{singleFrete[0].light}</span>
                  </p>
                )}
              </>
            </div>
            <div className="d3">
              <p>
                Estado/Partida:{" "}
                <span className="locale">{singleFrete[0].sortStatus}</span>
              </p>
              <p>
                Cidade/Partida:{" "}
                <span className="city">{singleFrete[0].city}</span>
              </p>
              <p>
                Estado/Chegada:{" "}
                <span className="locale">{singleFrete[0].destiny}</span>
              </p>
              <p>
                Cidade/Chegada:{" "}
                <span className="city">{singleFrete[0].toCity}</span>
              </p>
              <p>
                valor:
                <span className="price">
                  {" "}
                  {userData ? singleFrete[0].price : null}
                </span>
              </p>
              <p>
                telefone:{" "}
                <span className="tel">
                  {userData ? singleFrete[0].phone : null}
                </span>
              </p>
            </div>
            <div className="d4">
              <p>
                data de criação:{" "}
                <span className="locale">{convertedTimeCreate}</span>
              </p>
              <p>
                ultima atualização:{" "}
                <span className="locale">{convertedTimeAtt}</span>
              </p>
            </div>
            <div className="d5">
              <p className="text">
                descrição:{" "}
                <span className="des-text">{singleFrete[0].text}</span>
              </p>
            </div>
            {/* open cliente fretes */}
            <button
              className="show_cliente-showcase"
              onClick={() => dispatch(openClienteShowcase())}
            >
              Encontrar outros fretes desse cliente{" "}
              <span>{totalFretes}...</span>
            </button>
            {userData ? null : (
              <p className="register-userData">
                Cadastre-se e tenha acesso a todas as informações{" "}
                <Link to="/cadastro" type="button">
                  cadastrar
                </Link>
              </p>
            )}
          </ul>
        </article>
        {/* all specific cliente frete */}
        <article
          className={
            isClienteShowcaseOpen
              ? "show__case-content show-more"
              : "show__case-content"
          }
        >
          <FreteClienteShowCase
            isClienteShowcaseOpen={isClienteShowcaseOpen}
            createdBy={singleFrete[0].createdBy}
          />
        </article>
      </div>
    </Wrapper>
  );
};

export default SingleFrete;
