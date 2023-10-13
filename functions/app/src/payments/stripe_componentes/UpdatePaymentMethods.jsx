import Forms from "../../component/Forms";
import { Link } from "react-router-dom";
import { Wrapper as FormWrapper } from "../../assets/Wrappers/FormsWrapper";

const UpdatePaymentMethods = ({
  handleSubmit,
  handleChange,
  handleClick,
  isLoading,
  password,
}) => {
  return (
    <FormWrapper onSubmit={handleSubmit}>
      <h4>Coloque sua senha</h4>
      <Forms
        type="password"
        name="password"
        labelText="Senha"
        labelClass="animated-label"
        placeholder="Senha"
        autoComplete="new-password"
        value={password}
        handleChange={handleChange}
      />
      <div className="inline-content">
        <button
          type="submit"
          disabled={isLoading}
          style={{ background: "var(--primary-300)", minWidth: "10rem" }}
          className="btn-del"
        >
          {isLoading ? "Atualizando..." : "Atualizar"}
        </button>
        <Link to={-1} style={{ minWidth: "10rem" }} onClick={handleClick}>
          Cancelar
        </Link>
      </div>
    </FormWrapper>
  );
};

export default UpdatePaymentMethods;
