import { styled } from "styled-components";
import { useDispatch } from "react-redux";
import Forms from "./Forms";
import {
  updateUser,
  userCollector,
} from "../feature/userFromDataSlice/userDataSlice";
import { Link } from "react-router-dom";
import { logoutUser } from "../feature/userSlice/userSlice";
import { useClienteContext } from "../Pages/ClientePage";
import { Wrapper as FormWrapper } from "../assets/Wrappers/FormsWrapper";

const Profile = () => {
  const dispatch = useDispatch();
  let { name, email, userData, isLoading } = useClienteContext();
  const handleChange = (e) => {
    e.preventDefault();
    const name = e.target.name;
    const value = e.target.value;
    dispatch(userCollector({ name, value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateUser());
  };
  let signaturePlan;
  let functionality;
  switch (userData?.signaturePlan) {
    case "basic":
      signaturePlan = "básico";
      functionality = 17;
      break;
    case "advanced":
      signaturePlan = "avançado";
      functionality = 25;
      break;
    case "premium":
      signaturePlan = "premium";
      functionality = 37;
      break;

    default:
      break;
  }
  return (
    <Wrapper className="all-cont">
      <div className="all">
        <div className="f1">
          <FormWrapper className="form" onSubmit={handleSubmit}>
            <h4 className="title positioning">Modificar perfil</h4>
            <Forms
              type="name"
              name="name"
              labelText="Nome"
              placeholder="Nome"
              labelClass="animated-label"
              value={name}
              handleChange={handleChange}
            />
            <Forms
              type="email"
              name="email"
              placeholder="Email"
              labelClass="animated-label"
              value={email}
              handleChange={handleChange}
            />
            <div className="btn-container">
              <button type="submit" disabled={isLoading} className="btn">
                {isLoading ? "Aplicando..." : "Aplicar"}
              </button>
              <Link
                to="/user/forgot-password"
                className="links positioning-pass"
                onClick={() => dispatch(logoutUser())}
              >
                Mudar Senha
              </Link>
              <Link
                to="/client_page/remover-conta"
                className="links positioning-rem"
              >
                Deletar Conta
              </Link>
            </div>
          </FormWrapper>
        </div>
        <div className="f2">
          {userData?.subscriptionID ? (
            <>
              <h4 className="title text_title">Plano Atual!</h4>
              <p className="texts">
                O senhor(a) esta cadastrado no plano{" "}
                <Link
                  to={`/planos/${signaturePlan}`}
                  className="role_display-link"
                >
                  {signaturePlan}
                </Link>{" "}
                o que fornece a possibilidade de postar até {functionality}{" "}
                fretes, lembre-se sempre de excluir os fretes assim que
                completos, pois eles não serão removidos sozinhos.{" "}
                <Link to="/client_page/freight" className="links">
                  Fretes
                </Link>
              </p>
            </>
          ) : (
            <h4 className="title text_title know__more">
              conheça nossos{" "}
              <Link to="/planos" className="links">
                planos
              </Link>
            </h4>
          )}
        </div>
        <div className="f3">
          <h4 className="title text_title">Cargo no Site!</h4>
          <p className="texts">
            <span className="role_display">
              {userData?.role === "caminhoneiro"
                ? "caminhoneiro/enregador"
                : "empresario"}
            </span>
            {userData?.role === "caminhoneiro" &&
              ` Quais as vantagens desse cargo? No caso do senhor(a) que é caminhoneiro pode acessar todos os ${(
                <Link to="/about_page/entregador">fretes</Link>
              )} postados pelo empresario, sem pagar nada.`}
            {userData?.role === "empresario" &&
              ` Quais as vantagens desse cargo? No caso do senhor(a) que é empresario ganha a funcionalidade de postar fretes no site, podendo descrever todos os detalhes
            para o caminhoneiro/entregador.`}{" "}
            <Link to="/about_page/empresario" className="links">
              Ver mais
            </Link>
          </p>
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  padding: 10rem;

  .title {
    color: var(--yellow-org);
    font-size: 1.6rem;
  }

  .know__more {
    font-size: 1.6rem;
    text-transform: capitalize;
  }
  .text_title {
    margin-bottom: 2rem;
    margin-top: 2rem;
  }
  .texts {
    color: var(--grey-700);
    font-size: 1.4rem;
  }
  .links {
    color: var(--red-org);
    font-size: 1.5rem;
  }
  .btn-container {
    :not(:first-child) {
      font-size: 1.1rem;
      position: absolute;
      margin-right: 3rem;
      margin-left: 3rem;
      bottom: 21.8rem;
      right: 7rem;
    }
    :not(:first-child, :last-child) {
      right: 15rem;
    }
  }
  label {
    color: var(--grey-700);
    font-size: 1.6rem;
  }
  .role_display {
    text-transform: capitalize;
    color: var(--blue-ocn);
    text-transform: capitalize;
  }
  .role_display-link {
    text-transform: capitalize;
    color: var(--red-org);
    text-transform: capitalize;
  }
  .all {
    height: 100%;
    width: 100%;
    margin: 0 auto;
    display: grid;
    justify-content: center;
  }
  .f1 {
    width: 100%;
    display: flex;
    justify-content: center;
  }
  .form {
    position: relative;
    transition: none;
    border-radius: 3px;
    margin: 2.5px 0 0 2.5px;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.15);
    width: 400px;
    height: 450px;
    margin: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .form-box {
      width: 90%;
      margin-bottom: 2rem;
    }
    input {
      height: 3rem;
      width: 100%;
      margin: 0;
    }
    .btn-container {
      display: flex;
      margin-top: 3rem;
      align-items: center;
      .btn {
        background: var(--clr-primary-orange-3);
        color: var(--grey-700);
        border-radius: 3px;
        letter-spacing: 1px;
        margin-top: 3rem;
        width: 8rem;
        height: 4rem;
        font-size: 1.5rem;
      }
    }
    .positioning {
      position: absolute;
      top: 50px;
    }
  }
  @media (max-width: 600px) {
    padding: 15rem 0;

    width: 100vw;

    .all {
      width: 100vw;
      .f1 {
        .form {
          width: 100vw;
        }
      }
    }
  }
`;
export default Profile;
