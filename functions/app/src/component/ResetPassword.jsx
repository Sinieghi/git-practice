import { styled } from "styled-components";
import Forms from "./Forms";
import { useDispatch, useSelector } from "react-redux";
import { resetPassword, userCollector } from "../feature/userSlice/userSlice";
import { shwLoading } from "../feature/allFreteSlice/allFreteSlice";
import { Link } from "react-router-dom";

const ResetPassword = () => {
  const { passwordForReset, isLoading, msg } = useSelector(
    (store) => store.user
  );
  const dispatch = useDispatch();
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    dispatch(userCollector({ name, value }));
  };

  const submitForm = (e) => {
    e.preventDefault();
    dispatch(shwLoading(isLoading));
    dispatch(resetPassword(passwordForReset));
  };
  return (
    <Wrapper>
      {msg ? (
        <div className="success-msg">
          <h3>
            Pronto! Clique em entrar para logar:{" "}
            <Link to="/cadastro">Entrar</Link>
          </h3>
        </div>
      ) : (
        <form onSubmit={submitForm} className="form">
          <p>Coloque sua nova senha</p>
          <Forms
            type="password"
            name="passwordForReset"
            labelText="senha"
            value={passwordForReset}
            handleChange={handleChange}
          />
          <button type="submit" disabled={isLoading}>
            {isLoading ? "Trocando..." : "Trocar"}
          </button>
        </form>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
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
  .success-msg {
    h3 {
      color: var(--primary-blue-500);
      font-weight: 200;
    }
  }
`;
export default ResetPassword;
