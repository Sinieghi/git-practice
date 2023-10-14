import Forms from "../../component/Forms";
import { Link } from "react-router-dom";
import { Wrapper as FormWrapper } from "../../assets/Wrappers/FormsWrapper";

const CancelSignature = ({
  handleSubmit,
  handleChange,
  handleClick,
  password,
  isLoading,
}) => {
  return (
    <FormWrapper onSubmit={handleSubmit}>
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
        <button type="submit" disabled={isLoading} className="btn-del">
          {isLoading ? "Deletando..." : "Deletar"}
        </button>
        <Link to={-1} onClick={handleClick}>
          Cancelar
        </Link>
      </div>
    </FormWrapper>
  );
};

export default CancelSignature;
