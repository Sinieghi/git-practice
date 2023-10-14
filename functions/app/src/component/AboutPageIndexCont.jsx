import { useState } from "react";
import { Link } from "react-router-dom";

const AboutPageIndexCont = () => {
  const [hover, setHover] = useState(false);
  return (
    <div className="heading_text">
      <h1>
        <div className="title">Produtos</div>
        <p>
          Nossos produtos inicialmente consiste em 3 tipos de assinatura, plano
          básico, avançado e premium. Todos os planos tem as mesmas
          funcionalidades, com diferenças na quantidade de fretes possíveis para
          ser postados, os valores podem ser consultado na pagina a seguir{" "}
          <Link to="/produto_assinatura">Produtos e assinaturas.</Link> como
          nosso web service ainda esta no inicio, nossas ofertas se limita
          somente a essas 3 assinaturas, porém, vamos expandir nossos planos no
          futuro e disponibilizar outros serviços que contribua em facilitar a
          vida de nossos clientes.
        </p>
        <div className={hover ? "title active" : "title"} id="signature">
          Assinaturas
        </div>
        <p>
          Assinaturas são divididas em 3 tipos básico, avançado e premium onde
          cada um deles tem um numero limitado de publicações. <br />
          <span className="signature_basic">Plano básico</span>: O cliente tem
          acesso até a <span className="number_basic">17</span> publicações.{" "}
          <br />
          <span className="signature_advanced">Plano avançado</span>: O cliente
          tem acesso até a <span className="number_advanced">25</span>{" "}
          publicações. <br />
          <span className="signature_premium">Plano premium</span>: O cliente
          tem acesso até a <span className="number_prmium">37</span>{" "}
          publicações. <br />
          <span className="question">E como funciona?</span>
          <br />
          Todos os planos tem as mesmas funcionalidades, onde ao postar o frete
          ele só sera removido quando o cliente excluído diretamente, ao excluir
          o frete permanecera em nosso banco de dados por{" "}
          <span className="hours">15</span> minutos, depois desse tempo ele sera
          excluído permanentemente, quando o cliente marca o documento (frete)
          como concluído o mesmo sera movido para o{" "}
          <Link to="/client_page/historico-fretes">histórico</Link>, quando no
          histórico o documento não aparecera para todos somente para o cliente
          dono do documento, e também não contara como um documento válido, ou
          seja, o cliente libera espaço para novas publicações. Conheça nossos
          planos <Link to="/produto_assinatura">Assinaturas</Link>
        </p>
        <div className="title">Fretes</div>
        <p>
          Para ter acesso aos fretes o {"senhor(a)"} tem de se cadastrar no
          site, todos os fretes estarão disponíveis ao se registrar, porém, para
          postar fretes em nosso site tem de ser{" "}
          <Link to="/produto_assinatura">assinante</Link>. Para postar fretes
          basta ir na sessão <Link to="/create-frete">Publicar Frete</Link> e la
          o cliente assinante pode postar seus fretes, lembrando que existe um
          limite de fretes possíveis, limites esses descritos na{" "}
          <a
            onClick={() => {
              document.getElementById("signature").scrollIntoView({
                behavior: "smooth",
                block: "center",
              });
              setHover(true);
              setTimeout(() => {
                document.getElementById("signature").classList.remove("active");
                setHover(false);
              }, 2000);
            }}
          >
            assinatura
          </a>
          , depois de postado o frete aparecera no{" "}
          <Link to="/client_page/freight">perfil</Link> do remetente, no perfil
          o cliente pode atualizar os dados, excluir ou colocar como
          "concluído", quando setado para concluído o frete aparecerá na sessão{" "}
          <Link to="/client_page/historico-fretes">histórico</Link> e la o
          remetente pode adicionar notas referente ao serviço, essas notas
          ficarão salvas, caso o cliente queira ter alguma anotação referente ao
          frete
        </p>
      </h1>
      <h1>
        <div className="title">Objetivos</div>
        <p>
          Embora tenhamos acabado de lançar o site, já demos inicio ao
          desenvolvimento do nosso aplicativo para smartphone sabemos da
          importância da acessibilidade dos usuários que usam smartphone, com
          isso pode se esperar que nos próximos meses seja lançado o app, mas
          até la o site foi bem portado para smartphone, tivemos todo o cuidado
          para fazer uma aplicação moderna para que todos os usuários consiga
          navegar sem frustrações, caso qualquer problema na navegação seja
          detectado pelo usuário pedimos que entre em contato e nos avise{" "}
          <Link to="/suporte_cliente">suporte ao cliente</Link>, só assim
          podemos ter certeza de que tudo esta dentro dos conformes
        </p>
        <div className="title">Jornada</div>
        <p>
          onFrete inicia sua jornada no ano de 2023, com o objetivo de reduzir a
          burocracia no setor de entregas! Durante seu desenvolvimento foi
          estudado métodos para facilitar a conexão dentre entregadores e
          empresários, assim então chegamos a conclusão de que fazer um site com
          tal proposta era uma ótima ideia. Janeiro de 2023 foi dado inicio ao
          desenvolvimento do site, partindo do zero, desde aprender sobre
          desenvolvimento web até técnicas de lançamentos e estratégias de
          marketing. Mas isso não é tudo, pretendemos expandir a marca, ou seja,
          o conteúdo de hoje é o primeiro passo da nossa marca, vamos entrar
          para o segmento e implementar melhorias e novas ideias com o passar do
          tempo.
        </p>
      </h1>
    </div>
  );
};

export default AboutPageIndexCont;
