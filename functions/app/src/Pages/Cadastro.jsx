import { useEffect, useState } from "react";
import { styled } from "styled-components";
import Forms from "../component/Forms";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { loginUser, registerUser } from "../feature/userSlice/userSlice";
import { Link } from "react-router-dom";
import { Wrapper } from "../assets/Wrappers/FormsWrapper";
import { getUser } from "../feature/userFromDataSlice/userDataSlice";
import Btn from "../animatedContent/Btn";
import { PopupResendEmailAction } from "../popups/popup-component/ResendEmail";
import { popupActionResendEmail } from "../utils/popupActionFunc";

const initialState = {
  name: "",
  email: "",
  password: "",
  isMember: true,
};

function Cadastro() {
  const dispatch = useDispatch();
  let { userData } = useSelector((store) => store.userData);
  let { isLoading, msg } = useSelector((store) => store.user);
  const [userLocalData, setUserData] = useState(initialState);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUserData({ ...userLocalData, [name]: value });
  };

  const submitForm = (e) => {
    e.preventDefault();
    const { name, email, password, isMember } = userLocalData;
    if (!email || !password || (!name && !isMember)) {
      toast.warning("preencha todos os campos");
      return;
    }
    const regex = new RegExp(/^\S+@\S+\.\S+$/);

    if (!regex.test(email)) {
      toast.warn(
        'Parece que seu email esta faltando os caracteres base, confere o @ ou ".com"'
      );
      return;
    }
    if (isMember) {
      dispatch(loginUser({ email, password, eventType: "cadastro page" }));
      return;
    }

    dispatch(registerUser({ name, email, password }));
  };
  useEffect(() => {
    if (!userData) {
      dispatch(getUser());
    }
  }, []);
  return (
    <WrapperSectionContent>
      <PopupResendEmailAction {...userLocalData} />
      <Wrapper className="form" onSubmit={submitForm}>
        <h3>{!userLocalData.isMember ? "Registrar-se" : "Entrar"}</h3>
        <div className="inputs">
          {!userLocalData.isMember && (
            <Forms
              type="name"
              name="name"
              labelText="Nome"
              labelClass="animated-label"
              autocorrect="off"
              inputmode="name"
              spellcheck="false"
              ariaInvalid="false"
              placeholder="Nome"
              value={userLocalData.name}
              handleChange={handleChange}
            />
          )}
          <Forms
            type="email"
            name="email"
            labelText="Email"
            labelClass="animated-label"
            placeholder="Email"
            autocomplete="email"
            autocorrect="off"
            inputmode="email"
            spellcheck="false"
            ariaInvalid="false"
            min={6}
            value={userLocalData.email}
            handleChange={handleChange}
          />
          <Forms
            type="password"
            min={{ min: 8 }}
            labelText="Senha"
            labelClass="animated-label"
            placeholder="Senha"
            name="password"
            autoComplete="off"
            value={userLocalData.password}
            handleChange={handleChange}
          />
        </div>
        {userLocalData.isMember ? (
          <Btn
            handleClick="submitType"
            loading={isLoading}
            loadingText="Processando"
            text="Entrar"
            type="submit"
            width="20rem"
            height="5rem"
            margin=""
            btnBorder="transparent"
            backgroundColor="var(--primary-300)"
            btn_background="var(--primary-200)"
          />
        ) : (
          <Btn
            handleClick="submitType"
            loading={isLoading}
            loadingText="Processando"
            text="Registrar-se"
            type="submit"
            width="20rem"
            height="5rem"
            margin=""
            btnBorder="transparent"
            backgroundColor="var(--primary-300)"
            btn_background="var(--primary-200)"
          />
        )}
        {userLocalData.isMember ? (
          <Link to="/userData/forgot-password">Trocar senha</Link>
        ) : null}
        <p className="already_user">
          Ja possui conta?{" "}
          <button
            className="switch-status"
            onClick={() =>
              setUserData({
                ...userLocalData,
                isMember: !userLocalData.isMember,
              })
            }
            type="button"
          >
            {!userLocalData.isMember ? "Entrar" : "Registrar-se"}
          </button>
        </p>
        {Boolean(msg?.match("autenticação")) && (
          <p className="resend-email">
            Não recebeu o email?{" "}
            <Link
              onClick={() => popupActionResendEmail(true)}
              className="not-position pulsing"
            >
              reenviar
            </Link>
          </p>
        )}
      </Wrapper>
    </WrapperSectionContent>
  );
}
const WrapperSectionContent = styled.section`
  min-height: 100vh;
  display: flex;
  padding: 5rem;
  .form {
    position: relative;
    padding: 3rem;
    display: grid;
    margin: 0 auto;
    width: 600px;
    height: 600px;
    border-radius: 3px;
  }
  .inputs {
    width: 100%;
    padding: 3rem;
    display: grid;
    place-items: center;
    .form-box {
      width: 90%;
    }
    input {
      height: 4rem;
      width: 100%;
      margin: 0;
    }
    .password-input {
      margin-left: -6px;
    }
  }
  label {
    color: var(--grey-700);
  }
  h3 {
    color: var(--grey-600);
    font-size: 2rem;
    align-self: center;
    justify-self: center;
  }
  .already_user {
    color: var(--grey-600);
    font-size: 1.6rem;
    margin: 0 auto;
    position: absolute;
    right: 4rem;
    bottom: 4rem;
  }
  .resend-email {
    position: absolute;
    left: 50%;
    top: 70%;
    transform: translate(-50%, -50%);
  }
  button {
    p {
      font-size: 1.8rem;
      padding-top: 1px;
    }
  }
  a,
  .switch-status {
    color: var(--yellow-org);
    font-size: 1.6rem;
    text-align: center;
  }
  a {
    position: absolute;
    top: 62%;
    right: 17%;
  }
  .switch-status {
    background: transparent;
    border: transparent;
  }
  @media (max-width: 700px) {
    padding: 0;
    padding-top: 10rem;
    .form {
      width: 100%;
    }
  }
  @media (max-width: 400px) {
    .inputs {
      input {
        height: 2.6rem;
        width: 20rem;
      }
    }
  }
  .not-position {
    position: unset;
  }
  .pulsing {
    animation: pulse 2s infinite;
  }
  @keyframes pulse {
    0% {
      transform: scale(0.95);
    }

    70% {
      transform: scale(1);
      color: var(--grey-700);
    }

    100% {
      transform: scale(0.95);
      color: var(--yellow-org);
    }
  }
`;
export default Cadastro;
