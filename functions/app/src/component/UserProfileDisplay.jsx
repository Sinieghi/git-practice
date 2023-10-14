import { useDispatch, useSelector } from "react-redux";
import { styled } from "styled-components";
import { Link } from "react-router-dom";
import { useClienteContext } from "../Pages/ClientePage";
import { timeConvertor } from "../utils/dateOrCurrencyFix";
import { getSingleSupportTicket } from "../feature/support/support";
import { PopupActionSuccessSignatureUpdate } from "../popups/popup-component";
import { popupActionUpdateSigSuccess } from "../utils/popupActionFunc";

const UserProfileDisplay = () => {
  const query = new URLSearchParams(window.location.search);
  const dispatch = useDispatch();
  const { userData, totalFretes, fretes } = useClienteContext();
  const { userDataLoading } = useSelector((store) => store.userData);
  const { userProfileSupTicket, isLoading } = useSelector(
    (store) => store.support
  );
  let maxNum = 0;
  switch (userData?.signaturePlan) {
    case "basic":
      maxNum = 17;
      break;
    case "advanced":
      maxNum = 25;
      break;
    case "premium":
      maxNum = 37;
      break;
  }
  let createFixTime = timeConvertor(fretes[0]?.createdAt);
  if (userProfileSupTicket?.isOpen) {
    document.querySelector(".status")?.classList.add("target-status");
  }
  if (userProfileSupTicket?.sessionChanges?.length) {
    document.querySelector(".ticket-container")?.classList.add("flex");
  }
  if (query.get("assinatura") === "atualizada") {
    popupActionUpdateSigSuccess(true);
  }

  return userDataLoading ? (
    <div className="loader"></div>
  ) : (
    <Wrapper>
      {query.get("assinatura") === "atualizada" && (
        <PopupActionSuccessSignatureUpdate />
      )}
      <div className="user_content">
        <div className="user-name">
          <h2 className="heading_text-user no-border">
            {userData?.name} <br />{" "}
            <Link className="mod-credentials" to="/client_page/profile">
              alterar
            </Link>{" "}
          </h2>
        </div>
        <div className="user-email">
          <h2 className="heading_text-user">
            {userData?.email} <br />{" "}
            <Link className="mod-credentials" to="/client_page/profile">
              alterar
            </Link>{" "}
          </h2>
        </div>
        {userData?.isDeletede && (
          <div className="user-delete-status">
            <h1 className="heading_text-user">Aviso</h1>
            <p>
              Por favor, leia esse pequeno{" "}
              <Link to="/about_page/cancelamento-status">artigo</Link> antes de
              qualquer ação
            </p>
          </div>
        )}
        <div className="publish-cont">
          <div className="user-publish">
            {createFixTime !== "Invalid Date" && (
              <h2 className="heading_text-user">
                Última publicação: {createFixTime}
              </h2>
            )}
          </div>
          <div className="user-last-publish">
            {userData?.role !== "caminhoneiro" && (
              <h2 className="heading_text-user">
                Fretes ativos: {totalFretes} / {maxNum}
              </h2>
            )}
          </div>
        </div>
        <div className="get-support">
          <div className="post-support-ticket">
            <h2 className="heading_text-user">
              Solicitar <Link to="/suporte_cliente">suporte</Link>
            </h2>
            <p>
              Abra um ticket de suporte quando quiser, estamos aqui para o
              ajudar a resolver qualquer problema
            </p>
          </div>
          <div className="open-tickets">
            <h2 className="heading_text-user tickets">
              Tickets de suporte em aberto
            </h2>
            <div
              className="hide-ticket"
              onClick={() => {
                dispatch(getSingleSupportTicket(userData._id));
                document
                  .querySelector(".hide-ticket")
                  ?.classList.add("show-ticket");
              }}
            >
              <p>Mostrar ticket</p>
            </div>
            <div className="ticket-container">
              {isLoading ? (
                <div className="loader-small-box"></div>
              ) : (
                <>
                  {userProfileSupTicket ? (
                    <>
                      <div className="support-ticket">
                        <p>Motivo: {userProfileSupTicket?.supportOpt}</p>
                        <p>telefone: {userProfileSupTicket?.phone}</p>
                        <p>email: {userProfileSupTicket?.email}</p>
                        <p>mensagem: {userProfileSupTicket?.message}</p>
                        <p>
                          status:{" "}
                          <span className="status">
                            {userProfileSupTicket?.isOpen
                              ? "aberto"
                              : "fechado"}
                          </span>
                        </p>
                      </div>
                      {Boolean(
                        userProfileSupTicket?.sessionChanges?.length
                      ) && (
                        <div className="support-tickets-conclusions">
                          <p>
                            descrição:{" "}
                            {userProfileSupTicket.sessionChanges[0].status}
                          </p>

                          <p>
                            conclusão:{" "}
                            {userProfileSupTicket.sessionChanges[0].conclusion}
                          </p>
                        </div>
                      )}
                    </>
                  ) : (
                    <h2 style={{ textAlign: "center", width: "100%" }}>
                      Nenhum ticket
                    </h2>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  padding: 5rem;
  display: grid;
  height: 100%;
  width: 100%;
  .user_content {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 3rem;
    .user_content,
    .user-email,
    .publish-cont,
    .user-delete-status,
    .get-support {
      box-shadow: var(--shadow-1);
      height: 100%;
    }
    .user-last-publish,
    .open-tickets {
      border-left: 1px solid var(--grey-300);
      border-radius: 3px;
      position: relative;
      p {
        font-size: 1.5rem;
      }
    }
    .user-delete-status {
      .heading_text-user {
        height: 10rem;
      }
      p {
        text-align: center;
        margin-bottom: 2rem;
        font-size: 1.3rem;
      }
    }
    .hide-ticket {
      position: absolute;
      height: 80%;
      width: 100%;
      background-color: var(--grey-200);
      top: 20%;
      cursor: pointer;
      place-content: center;
      display: grid;
      transition: all 0.5s ease;
    }
    .show-ticket {
      visibility: hidden;
      opacity: 0;
    }
    .ticket-container {
      margin-bottom: 2rem;
      padding: 2rem;
      .support-ticket {
      }
    }
    .flex {
      display: flex;
    }
    .get-support {
      display: grid;
      grid-template-columns: 0.5fr 1fr;
      text-align: center;
      .post-support-ticket {
        p {
          padding: 2rem;
          font-size: 1.3rem;
        }
      }
    }
    .publish-cont {
      display: grid;
      grid-template-columns: 1fr 1fr;
    }
    .total_container {
      padding-top: 2rem;
      margin-top: 3rem;
      height: 4rem;
      .total::before {
        right: 10rem;
      }
    }
    .total {
      width: 100%;
      font-size: 2rem;
    }
    .heading_text-user {
      display: grid;
      font-size: 1.8rem;
      text-align: center;
      padding: 2rem;
      height: 15rem;
      place-content: center;
    }
    .tickets {
      margin-top: 1.55rem;
      margin-bottom: 4rem;
      place-content: unset;
    }
    .no-border {
      border: transparent;
      height: 10rem;
    }
  }

  a {
    color: var(--red-org);
  }
  .mod-credentials {
    font-size: 1rem;
  }
  @media (max-width: 870px) {
    .get-support {
      grid-template-columns: unset !important;
    }
  }
  @media (max-width: 580px) {
    padding: 0;
    .ticket-container {
      display: grid !important;
      row-gap: 3rem;
    }
  }
  .status {
    color: var(--primary-300);
  }
  .target-status {
    color: var(--clr-primary-orange-3);
  }
`;

export default UserProfileDisplay;
