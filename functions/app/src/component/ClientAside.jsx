import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { styled } from "styled-components";
import { clearObjects } from "../feature/allFreteSlice/allFreteSlice";
import { crateAdminSession } from "../feature/admin/adminSlice";
import { setEditToFalse } from "../feature/freteSlice/freteSlice";
import { markNavigation } from "../utils/asideTargetLink";
const ClientAside = () => {
  const { pathname } = useLocation();
  const { userData } = useSelector((store) => store.userData);
  const dispatch = useDispatch();
  markNavigation(pathname);
  return (
    <>
      <Wrapper className="cliente-aside-content normal-device-client">
        <Link to="/client_page" className="link cliente-profile">
          Perfil
        </Link>
        <Link to="profile" className="edit-profile-client-side">
          Editar Perfil
        </Link>
        <Link
          to={"freight"}
          onClick={() => dispatch(setEditToFalse())}
          id="link"
          className="freight-cliente"
        >
          Fretes
        </Link>
        <Link
          className="historic-cliente"
          onClick={() => {
            dispatch(clearObjects());
          }}
          to={"historico-fretes?sessão_do_cliente=historico"}
          id="link"
        >
          Histórico
        </Link>
        <Link
          to={`pagamentos?sessionId=${
            userData?.subscriptionID?._id || "nenhum"
          }&sessão=pagamento`}
          className={`${
            userData?.isDeletede && "delete-process"
          } signature-link`}
          id="link"
        >
          Assinatura
        </Link>
        {userData?.isDeletede ? (
          <Link to="/client_page/abortar-processo" className="signature-status">
            Recuperar conta
          </Link>
        ) : (
          <Link to="/client_page/remover-conta" className="remove-account">
            Remover conta
          </Link>
        )}
        {userData?.role === "admin" && (
          <Link
            to="/admin-checkout"
            onClick={() => dispatch(crateAdminSession(userData._id))}
          >
            admin
          </Link>
        )}
      </Wrapper>
    </>
  );
};
const Wrapper = styled.aside`
  font-size: 1.4rem;
  padding: 3rem 4rem;
  background: var(--white);
  box-shadow: var(--shadow-4);
  height: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 6rem;
  z-index: 6;
  @media (max-width: 1100px) {
    position: fixed;
    left: 0;
  }
  @media (max-height: 650px) {
    row-gap: 1rem;
  }
  .delete-process,
  .msg-target {
    animation: pulse 4s ease-in-out infinite;
  }
  .msg-target {
    color: var(--yellow-org) !important;
    outline: 3px solid var(--yellow-org);
  }
  @keyframes pulse {
    100% {
      color: var(--red-org);
    }
  }
  .target-navigation {
    color: var(--blue-ocn);
  }
`;
export default ClientAside;
