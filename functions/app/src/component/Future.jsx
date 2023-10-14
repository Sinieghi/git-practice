import styled from "styled-components";

const Future = () => {
  return (
    <Wrapper>
      <h1>Planos para 2024</h1>
      <p>
        Até o final do ano de 2024 sera lançado nosso aplicativo, mesmo nosso
        site sendo bem portado para smartphone, acreditamos que uma aplicação
        100% dedicada para celulares facilitará para nossos caminhoneiros. Assim
        então pode se esperar que em 2024 tera nossa versão para celulares.
      </p>
      <br />
      <p>
        Aos próximos meses traremos novas funcionalidades para nosso site,
        implementaremos novos features para agregar ao nosso setor. A ideia é
        estar constantemente trazendo novas aplicações para nosso site.
      </p>
    </Wrapper>
  );
};
const Wrapper = styled.article`
  font-size: 1.8rem;
`;
export default Future;
