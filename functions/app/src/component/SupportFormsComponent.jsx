import Forms from "./Forms";
import FormsOptions from "./FormsOptions";
import { useDispatch, useSelector } from "react-redux";
import { Wrapper as FormWrapper } from "../assets/Wrappers/FormsWrapper";
import { supportDataCollector, supportPost } from "../feature/support/support";
import Btn from "../animatedContent/Btn";
import styled from "styled-components";

const SupportFormsComponent = ({ text }) => {
  let { supportEnum, supportOpt, phone, email, message, isLoading } =
    useSelector((store) => store.support);
  const dispatch = useDispatch();
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    dispatch(supportDataCollector({ name, value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(supportPost({ supportOpt, phone, email, message }));
  };

  return (
    <Wrapper className="support_ticket">
      <h2>{text}</h2>
      <FormWrapper className="support-forms" onSubmit={handleSubmit}>
        <FormsOptions
          name="supportOpt"
          value={supportOpt}
          handleChange={handleChange}
          labelText=""
          labelClass="animated-label hide"
          sorts={supportEnum}
        />
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
          value={email}
          handleChange={handleChange}
        />
        <Forms
          type="tel"
          name="phone"
          labelText="Telefone"
          labelClass="animated-label"
          placeholder="Telefone"
          value={phone}
          handleChange={handleChange}
        />
        <div className="form-box">
          <label className="text-lab" htmlFor="text">
            Mensagem
          </label>
          <textarea
            name="message"
            value={message}
            onChange={handleChange}
            id="text"
            cols="30"
            rows="10"
            className="input"
          />
        </div>
        <Btn
          type="submit"
          loading={isLoading}
          loadingText="Processando"
          backgroundColor="var(--blue-ocn)"
          btn_background="var(--green-light)"
          width="15rem"
          height="6rem"
          text="Enviar"
        />
      </FormWrapper>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  .target {
    background-color: var(--red-light);
  }
  .form-box {
    label {
      font-size: 1.3rem;
    }
  }
`;
export default SupportFormsComponent;
