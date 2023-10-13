import { styled } from "styled-components";
import Forms from "./Forms";
import { useDispatch, useSelector } from "react-redux";
import { Wrapper as FormsWrapper } from "../assets/Wrappers/FormsWrapper";
import {
  softDelete,
  userCollector,
} from "../feature/userFromDataSlice/userDataSlice";

import Btn from "../animatedContent/Btn";
//trabalhar nesse camarada aqui amanha ou mais tarde

const DeleteUser = () => {
  const dispatch = useDispatch();
  const { password, email, reasons, isLoading } = useSelector(
    (store) => store.userData
  );
  const handleChange = (e) => {
    e.preventDefault();
    const name = e.target.name;
    const value = e.target.value;
    dispatch(userCollector({ name, value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(softDelete({ password, reasons, email }));
  };

  return (
    <Wrapper className="all-cont">
      <div className="container">
        <p>
          Caso o senhor queira deletar a conta, basta preencher os campos
          abaixo.
        </p>
        <FormsWrapper className="del-form" onSubmit={handleSubmit}>
          <Forms
            type="email"
            name="email"
            labelClass="animated-label"
            labelText="email*"
            placeholder="email"
            value={email}
            handleChange={handleChange}
          />
          <Forms
            type="password"
            name="password"
            labelClass="animated-label"
            labelText="senha*"
            placeholder="senha"
            value={password}
            handleChange={handleChange}
          />
          <div className="form-box">
            <p>Deixe sua opinião sobre nossos serviços</p>
            <textarea
              className="input"
              name="reasons"
              id="reasons"
              placeholder="não obrigatório"
              onChange={handleChange}
              defaultValue={reasons}
            />
          </div>
          <div className="btn-contaienr">
            <Btn
              handleClick="submitType"
              loading={isLoading}
              loadingText="Processando..."
              text="Deletar"
              type="submit"
              width="15rem"
              height="5rem"
              margin=""
              btnBorder="transparent"
              backgroundColor="var(--clr-primary-red-3)"
              btn_background="var(--clr-primary-red-3)"
            />
          </div>
        </FormsWrapper>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  place-content: center;
  padding: 5rem;
  width: 100%;
  .container {
    width: 80%;
    place-self: center;
  }
  p {
    text-align: center;
  }
  p,
  label {
    font-size: 1.4rem;
  }
  label {
    margin-left: 2rem;
  }
  .del-form {
    width: 100%;
    padding: 2rem;
  }
  .form-box {
    text-align: center;
    display: grid;
    margin-top: 3rem;
    label,
    .label {
      text-align: initial;
    }
  }
  #reasons,
  .input {
    width: 100%;
    margin: 0;
    height: 3rem;
  }
  #reasons {
    height: 8rem;
  }
  .btn-contaienr {
    display: grid;
    place-content: center;
    margin-top: 4rem;
  }
  button {
    height: 4rem;
    width: 8rem;
    border: transparent;
    background-color: var(--clr-primary-red-3);
    border-radius: 3px;
  }
`;

export default DeleteUser;
