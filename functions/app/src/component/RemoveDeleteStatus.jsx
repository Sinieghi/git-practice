import {
  userCollector,
  reverseSoftDelete,
} from "../feature/userFromDataSlice/userDataSlice";
import { styled } from "styled-components";
import Forms from "./Forms";
import { useDispatch, useSelector } from "react-redux";
import { Wrapper as FormsWrapper } from "../assets/Wrappers/FormsWrapper";
import Btn from "../animatedContent/Btn";
const RemoveDeleteStatus = () => {
  const dispatch = useDispatch();
  const { password, email, isLoading } = useSelector((store) => store.userData);
  const handleChange = (e) => {
    e.preventDefault();
    const name = e.target.name;
    const value = e.target.value;
    dispatch(userCollector({ name, value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(reverseSoftDelete({ password, email }));
  };
  return (
    <Wrapper className="all-cont">
      <div className="container">
        <p>Reverte o cancelamento da conta</p>
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
          <div className="btn-contaienr">
            <Btn
              handleClick="submitType"
              loading={isLoading}
              loadingText="Processando..."
              text="Recuperar"
              type="submit"
              width="15rem"
              height="5rem"
              margin=""
              btnBorder="transparent"
              backgroundColor="var(--primary-300)"
              btn_background="var(--primary-200)"
            />
          </div>
        </FormsWrapper>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  display: grid;
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
    width: 50%;
    margin: 0 auto;
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
    background-color: var(--primary-300);
    border-radius: 3px;
  }
`;
export default RemoveDeleteStatus;
