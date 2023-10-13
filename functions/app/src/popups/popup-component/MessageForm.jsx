import { Wrapper as FromsWrapper } from "../../assets/Wrappers/FormsWrapper";
import Forms from "../../component/Forms";
import { useDispatch, useSelector } from "react-redux";
import { Wrapper as PopupWrapper } from "../../assets/Wrappers/PopupsWrapper";
import styled from "styled-components";
import {
  createMessage,
  handleChanges,
} from "../../feature/message/messageSlice";
import { Link, useNavigate } from "react-router-dom";
import BtnForPopup from "../../animatedContent/BtnForPopup";

const MessageForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { phone, email, sendMessage, name, isLoading } = useSelector(
    (store) => store.message
  );
  const handleChange = (e) => {
    dispatch(handleChanges({ name: e.target.name, value: e.target.value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createMessage());
  };
  return (
    <PopupWrapper className="message-popup">
      <div className="popup_content">
        <div className="popup_content-display-form-message">
          <Wrapper>
            <Link
              type="button"
              onClick={() => {
                document
                  .querySelector(".popup_content")
                  .classList?.remove("show");
                document
                  .querySelector(".popup_content-display-form-message")
                  ?.classList.remove("show_contente");
                setTimeout(() => {
                  navigate(-2);
                }, 500);
              }}
              className="close"
              id="cl"
            >
              &times;
            </Link>
            <FromsWrapper
              className="forms__popup-message"
              onSubmit={handleSubmit}
            >
              <Forms
                type="name"
                name="name"
                autocorrect="off"
                inputmode="name"
                spellcheck="false"
                ariaInvalid="false"
                autoComplete="name"
                labelText="Nome"
                labelClass="animated-label"
                placeholder="Entre com seu nome"
                inputId="message"
                value={name}
                handleChange={handleChange}
              />
              <Forms
                type="email"
                placeholder="luiz_exemplo@gmail.com"
                inputId="message"
                name="email"
                labelText="Email"
                autoComplete="off"
                autocorrect="off"
                inputmode="email"
                spellcheck="false"
                ariaInvalid="false"
                min={6}
                labelClass="animated-label"
                value={email}
                handleChange={handleChange}
              />
              <Forms
                type="tel"
                name="phone"
                autoComplete="tel"
                inputId="message"
                value={phone}
                labelText="telefone"
                labelClass="animated-label"
                handleChange={handleChange}
                placeholder="(99)99999-9999"
              />
              <div className="text-box">
                <p>Mensagem</p>
                <textarea
                  name="sendMessage"
                  className="input"
                  onChange={handleChange}
                  defaultValue={sendMessage}
                />
              </div>
              <BtnForPopup
                handleClick="submitType"
                loading={isLoading}
                loadingText="Processando"
                text="Enviar"
                type="submit"
                width="20rem"
                height="5rem"
                margin="5rem 0 0 0"
                btnBorder="transparent"
                backgroundColor="var(--primary-300)"
                btn_background="var(--primary-200)"
              />
            </FromsWrapper>
          </Wrapper>
        </div>
      </div>
    </PopupWrapper>
  );
};
const Wrapper = styled.div`
  display: grid;
  width: 100%;
  .forms__popup-message {
    width: 100%;
    display: grid;
  }
  .form-box,
  .text-box {
    display: grid;
    width: 50%;
    margin: 0 auto;
    label {
      font-size: 1.5rem;
      text-align: center;
      margin-top: 3rem;
    }
    .animated-labe,
    #label {
      display: none;
    }
    input {
      width: 100%;
      margin: 0;
      margin-top: 2rem;
    }
  }
  .text-box {
    width: 90%;
    textarea {
      height: 10rem;
    }
  }
  button {
    font-size: 2rem;
  }
  .target {
    background-color: var(--red-light);
  }
`;
export default MessageForm;
