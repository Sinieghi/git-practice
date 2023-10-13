import { styled } from "styled-components";

const AboutCookies = () => {
  return (
    <Wrapper>
      <h1>Cookies</h1>
      <p>
        Cookies tem a função de proteger nossos dados, quando o usuário envia
        qualquer informação privada para o servidor que utiliza cookies esses
        dados são criptografados no envio para que a leitura humana seja
        impossível. <br /> O principal ponto desses cookies é evitar que
        criminosos consiga interceptar esses dados e roubar informações de
        nossos usuários.
      </p>
    </Wrapper>
  );
};
const Wrapper = styled.article`
  h1 {
    font-size: 4rem;
  }
  p {
    font-size: 2rem;
  }
`;
export default AboutCookies;
