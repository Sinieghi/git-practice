/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../feature/userSlice/userSlice";
import { clearObjects } from "../feature/allFreteSlice/allFreteSlice";
import { openClienteSidebar } from "../utils/asideTargetLink";
import { openSidebar } from "../utils/asideOpenEvent";

const NavLinks = ({ userData, pathname }) => {
  const dispatch = useDispatch();
  const widthQuery = document.querySelector("body").getBoundingClientRect();

  return (
    <ul className="navbar-content normal-device">
      <div className="navigation-container">
        <Link
          to="/"
          className="homepage-link"
          onClick={() => widthQuery.width <= 1100 && openSidebar(true)}
        >
          Pagina Inicial
        </Link>
        <Link
          to={pathname !== "/frete_page" && "/frete_page"}
          className="freight-page-link"
          onClick={() => {
            widthQuery.width <= 1100 && openSidebar(true);
            dispatch(clearObjects());
          }}
        >
          Fretes
        </Link>
        <Link
          to="/create-frete"
          className="publish-link"
          onClick={() => widthQuery.width <= 1100 && openSidebar(true)}
        >
          Publicar Frete
        </Link>
        <Link
          to="/about_page"
          className="about-link"
          onClick={() => widthQuery.width <= 1100 && openSidebar(true)}
        >
          Sobre
        </Link>
      </div>
      {/*  */}
      <div className="client-container">
        <Link
          to="suporte_cliente"
          onClick={() => widthQuery.width <= 1100 && openSidebar(true)}
          className="support-link"
        >
          Suporte
        </Link>
        {userData ? (
          <Link
            type="button"
            className="register_logout"
            onClick={() => {
              dispatch(logout());
              widthQuery.width <= 1100 && openSidebar(true);
              // setTimeout(() => {
              //   location.reload();
              // }, 2000);
            }}
          >
            Sair
          </Link>
        ) : (
          <Link
            to="/cadastro"
            onClick={() => widthQuery.width <= 1100 && openSidebar(true)}
            className="register_logout"
          >
            entrar
          </Link>
        )}
        {userData ? (
          <Link
            to={
              pathname.toString().split("/")[1] !== "client_page" &&
              "/client_page"
            }
            onClick={() => {
              //allfrete
              // dispatch(clearObjects());
              // dispatch(clearObjectSingle());
              // singlefrete
              setTimeout(() => {
                openClienteSidebar(true);
              });
            }}
            className="link profile-link"
          >
            Perfil
          </Link>
        ) : (
          <Link to="/cadastro" className="link profile-link">
            Perfil
          </Link>
        )}
      </div>
    </ul>
  );
};

export default NavLinks;
