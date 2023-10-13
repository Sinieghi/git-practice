import { useDispatch, useSelector } from "react-redux";
import { shwLoading } from "../feature/allFreteSlice/allFreteSlice";
import { forgotPassword, userCollector } from "../feature/userSlice/userSlice";
import { styled } from "styled-components";
import Forms from "./Forms";

const ForgotPassword = () => {
  const { emailForReset, isLoading, msg } = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    dispatch(userCollector({ name, value }));
  };

  const submitForm = (e) => {
    e.preventDefault();
    dispatch(shwLoading(isLoading));
    dispatch(forgotPassword(emailForReset));
  };

  return (
    <Wrapper>
      {msg ? (
        <div className="success-msg">
          <h3>
            Cheque seu email para que possamos dar continuidade com a troca da
            senha
          </h3>
        </div>
      ) : (
        <form onSubmit={submitForm} className="hist">
          <p>Coloque seu email para prosseguirmos com a troca</p>
          <Forms
            type="email"
            name="emailForReset"
            labelText="Email"
            value={emailForReset}
            handleChange={handleChange}
          />
          <button type="submit" disabled={isLoading}>
            {isLoading ? "Enviando..." : "Envia"}
          </button>
        </form>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  p {
    color: var(--primary-blue-500);
  }
  label {
    color: var(--primary-blue-500);
  }
  form {
    display: flex;
    flex-direction: column;
    height: 170px;
    width: 400px;
    align-items: center;
    justify-content: center;
  }
  button {
    height: 40px;
    width: 70px;
    background: var(--primary-400);
    cursor: pointer;
  }
  .hist {
    margin: 2.5px 0 0 2.5px;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.15);
    transition: box-shadow 0.3s ease-in-out;
    border-radius: 7px;
  }
  .hist:hover {
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  }
  .success-msg {
    background: var(--primary-300);
    border-radius: 43px;
    h3 {
      color: var(--clr-primary-4);
      font-size: 1.8rem;
      margin: 10px;
    }
  }
`;
export default ForgotPassword;
