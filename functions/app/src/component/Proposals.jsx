import { Link } from "react-router-dom";
import styled from "styled-components";
import { POPUP_ENUM } from "../utils/popupsEnum";

const Proposals = () => {
  const handleClickMessage = () => {
    setTimeout(() => {
      const show = document.querySelector(".popup_content");
      const showContent = document.querySelector(
        ".popup_content-display-form-message"
      );
      if (!show || !showContent) return;
      show.classList.add("show");
      showContent.classList.add("show_contente");
    });
  };
  return (
    <Wrapper>
      <h1>Propostas</h1>
      <p>
        Estamos aberto a discutir qualquer tipo de proposta, basta entrar em
        contado via <a href={`mailto:${import.meta.env.VITE_EMAIL}`}>email</a>{" "}
        ou deixar sua{" "}
        <Link
          to={`?popup=${POPUP_ENUM.popup.message}&sessão=home_page`}
          onClick={handleClickMessage}
        >
          mensagem
        </Link>{" "}
      </p>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  font-size: 1.8rem;
  a {
    color: var(--yellow-org);
  }
`;

export default Proposals;
