import { useState } from "react";
import { Wrapper as FromWrapper } from "../../assets/Wrappers/FormsWrapper";
import { loginUser, registerUser } from "../../feature/userSlice/userSlice";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Forms from "../../component/Forms";
import { styled } from "styled-components";
import { Wrapper as PopupWrapper } from "../../assets/Wrappers/PopupsWrapper";
import { toast } from "react-toastify";
import BtnForPopup from "../../animatedContent/BtnForPopup";
const initialState = {
  name: "",
  email: "",
  password: "",
  isMember: true,
};
const SingIn = () => {
  const dispatch = useDispatch();
  const { isLoading } = useSelector((store) => store.user);
  const [userLocalData, setUserData] = useState(initialState);
  const navigate = useNavigate();
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUserData({ ...userLocalData, [name]: value });
  };

  const submitForm = (e) => {
    e.preventDefault();

    const regex = new RegExp(/^\S+@\S+\.\S+$/);
    const { name, email, password, isMember } = userLocalData;
    if (!email || !password || (!name && !isMember)) {
      toast.warning("preencha todos os campos");
      return;
    }

    if (!regex.test(email)) {
      toast.warn(
        'Parece que seu email esta faltando os caracteres base, confere o @ ou ".com"'
      );
      return;
    }
    if (isMember) {
      dispatch(loginUser({ email, password, eventType: "singIn popup" }));
      return;
    }

    dispatch(registerUser({ name, email, password }));
  };
  return (
    <PopupWrapper className="targ sing-in-popup">
      <div className="popup_content-form">
        <div className="popup_content-display-form">
          <Wrapper>
            <FromWrapper className="forms__popup-singin" onSubmit={submitForm}>
              <Link
                type="button"
                onClick={() => {
                  document
                    .querySelector(".popup_content-form")
                    .classList.remove("show");
                  document
                    .querySelector(".popup_content-display-form")
                    .classList.remove("show_contente");
                  setTimeout(() => {
                    navigate(-2);
                  }, 500);
                }}
                className="close"
                id="cl"
              >
                &times;
              </Link>
              <h4 className="singin_description"></h4>
              <div className="inputs">
                {!userLocalData.isMember && (
                  <Forms
                    type="name"
                    name="name"
                    inputId="singIn"
                    autoComplete="on"
                    labelText="Nome"
                    labelClass="animated-label"
                    placeholder="Entre com seu nome"
                    value={userLocalData.name}
                    handleChange={handleChange}
                  />
                )}
                <Forms
                  type="email"
                  placeholder="luiz_exemplo@gmail.com"
                  inputId="singIn"
                  name="email"
                  autoComplete="off"
                  autocorrect="off"
                  inputmode="email"
                  spellcheck="false"
                  ariaInvalid="false"
                  min={6}
                  labelText="Email"
                  labelClass="animated-label"
                  value={userLocalData.email}
                  handleChange={handleChange}
                />
                <Forms
                  type="password"
                  min={{ min: 8 }}
                  name="password"
                  className={"password-input"}
                  inputId="singIn"
                  labelText="Senha"
                  labelClass="animated-label"
                  autoComplete="off"
                  placeholder="Senha"
                  value={userLocalData.password}
                  handleChange={handleChange}
                />
              </div>

              <div className="btns-container">
                {userLocalData.isMember ? (
                  <BtnForPopup
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
                  <BtnForPopup
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
              </div>
            </FromWrapper>
          </Wrapper>
        </div>
      </div>
    </PopupWrapper>
  );
};

const Wrapper = styled.div`
  height: 50rem;
  background-color: var(--grey-50);
  .forms__popup-singin {
    position: relative;
    position: relative;
    display: grid;
    height: 100%;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 0.9fr;
    .close {
      position: absolute;
      right: 5px;
      top: 5px;
    }
    h4 {
      position: absolute;
      top: 2rem;
      font-size: 1.4rem;
      left: 50%;
      transform: translate(-50%);
    }
    label {
      display: none;
    }
    input {
      width: 100%;
      height: 4rem;
    }
    .inputs {
      margin: 0 auto;
      padding: 0 1rem;
      padding-top: 9rem;
      width: 70%;
    }
    .btns-container {
      margin: 0 auto;
      width: 80%;
      padding: 6rem;
      display: grid;
      grid-template-columns: 1fr;
      grid-template-rows: 1fr 1fr;
      align-items: center;

      a {
        position: absolute;
        top: 24rem;
        right: 20rem;
        font-size: 1.2rem;
        color: var(--red-org);
      }
      .already_user {
        position: absolute;
        font-size: 1.2rem;
        bottom: 2rem;
        right: 5rem;
        button {
          background-color: transparent;
          border: transparent;
          font-size: 1.2rem;
          color: var(--red-org);
        }
      }
    }
  }
  @media (max-width: 900px) {
    width: 100%;
  }
`;
export default SingIn;
