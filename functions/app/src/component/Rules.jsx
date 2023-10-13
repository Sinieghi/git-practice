import styled from "styled-components";

const Rules = () => {
  return (
    <Wrapper>
      <h1>Regras</h1>
      <p>
        Esperamos o bom comportamento no uso do site, algumas regras é
        necessária para o bom funcionamento de nosso site
      </p>
      <ul>
        <li>
          1 <p>Fique atento aos detalhes descritos nos documentos dos fretes</p>
        </li>
        <li>
          2{" "}
          <p>
            Descreva o máximo de detalhes ao postar os fretes, pois qualquer mal
            entendido todos saem perdendo
          </p>
        </li>
        <li>
          3{" "}
          <p>
            Cumpra com sua parte no acordo, qualquer usuário que vir a receber
            reclamações sobre não cumprir sua parte no acordo sera removido de
            nosso site permanentemente
          </p>
        </li>
        <li>
          4{" "}
          <p>
            Respeito com os outros usuários, caso reclamações sobre desrespeito
            vir a ser relatas com provas removeremos a conta do usuário
          </p>
        </li>
        <p className="last">
          Por fim lembre-se, construímos o site para atender suas necessidades!
          Qualquer problema que vir a acontecer com voce caro usuário entre em
          contato, o seu bem estar dentro de nossa plataforma é a nossa
          prioridade
        </p>
      </ul>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  h1 {
    font-size: 3rem;
    margin-bottom: 3rem;
  }
  p {
    font-size: 2rem;
  }
  li {
    display: flex;
    position: relative;
    font-size: 2rem;
    margin-top: 5rem;
  }
  li::before {
    content: "";
    position: absolute;
    left: -10px;
    top: 15px;
    border-radius: 50%;
    height: 4px;
    width: 4px;
    background-color: var(--blue-ocn);
  }
  p {
    margin-left: 2rem;
  }
  .last {
    margin-top: 3rem;
  }
`;

export default Rules;
