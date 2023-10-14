import { Link } from "react-router-dom";
import styled from "styled-components";

export const AccountStatusDelete = () => {
  return (
    <Wrapper>
      {" "}
      <h1>Status cancelamento</h1>
      <p>
        A conta do senhor(a) foi marcada para ser deletada, nosso prazo para que
        o evento de remoção aconteça é de 30 dias, caso o senhor tenha cometido
        algum engano ou mudado de ideia basta clicar nesse{" "}
        <Link to="/client_page/abortar-processo">link</Link> para remover o
        status de cancelamento. Do contrario a{" "}
        <span className="logo">onFrete</span> agradece sua gentileza em ter dado
        uma chance para nossos serviços! Muito obrigado. <br />
        Caso não tenha sido o senhor quem marcou a conta para cancelamento por
        favor remova o status de cancelamento clicando no{" "}
        <Link to="/client_page/abortar-processo?artigo=ação_de_terceiros">
          link
        </Link>{" "}
        <br />
        <span className="optional">opcional</span> e entre em contato para que
        possamos investigar o ocorrido
      </p>
      <h1>Cancelamento de contas</h1>
      <p>
        O processo de cancelamento é simples, basta clicar nesse{" "}
        <Link to="/client_page/remover-conta">link</Link> e colocar seu email e
        senha <br />
        Quando a conta é marcada para ser cancelar o usuário tem um prazo de 30
        dias para reverter o evento de cancelamento, esses 30 dias antes da
        remoção é para que o cliente caso tenha uma assinatura ativa possa
        aproveitar o restante da assinatura antes de ter a conta removida,
        qualquer outra duvida basta entrar em contato{" "}
        <a href="mailto:onfrete7@gmail.com">email</a> ou abra um{" "}
        <Link to="/suporte_cliente?sessão_status=cancelamento">ticket</Link>
      </p>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  h1 {
    margin: 5rem 0 3rem 0;
    font-size: 4rem;
  }
  p {
    font-size: 1.7rem;
  }
  a {
    color: var(--red-org);
  }
  span {
    font-size: 1.1rem;
  }
  .logo {
    font-size: 1.7rem;
  }
`;
