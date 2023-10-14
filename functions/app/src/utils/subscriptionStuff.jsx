import { Link } from "react-router-dom";

export const subscriptionStuff = [
  {
    plan: {
      plan: <>Plano Básico</>,
      planPrice: <>69R$ / MES</>,
    },
    text: (
      <>
        No plano básico o assinante pode postar até 17 fretes, todos os fretes
        estarão disponíveis para a visualização de todos os cliente de forma
        gratuita!
        <br />
        As regras dos planos é simples, na area{" "}
        <Link to="/create-frete">Publicar Frete</Link> o cliente tem acesso a
        serviço de postagem, onde ele pode postar de acordo com seu plano,{" "}
        <span> no caso do plano básico até 17 fretes </span>... <br />E no{" "}
        <Link to="/cliente_page">Perfil</Link> o cliente pode editar até 2 vezes
        o documento (frete), e na mesma sessão o cliente pode deletar os fretes
        postados, porém para o processo de exclusão acontecer leva 30 minutos, o
        processo é o mesmo para fretes marcados como concluído, mas quando
        concluído o cliente pode adicionar anotações, essas anotações serão
        salvas no banco de dados e estão disponíveis para o cliente caso queira
        adicionar alguma anotação referente ao processo de entrega.{" "}
      </>
    ),
    descriptionClass: "basic",
    urlLinkPlan: "basico",
    priceId: "price_1NdbhBJurT2bp9vzJj7my0dB",
  },

  {
    plan: {
      plan: <>Plano Avançado</>,
      planPrice: <>100R$ / MES</>,
    },
    text: (
      <>
        No plano avançado o assinante pode postar até 25 fretes, todos os fretes
        estarão disponíveis para a visualização de todos os cliente de forma
        gratuita! <br />
        As regras dos planos é simples, na area{" "}
        <Link to="/create-frete">Publicar Frete</Link> o cliente tem acesso a
        serviço de postagem, onde ele pode postar de acordo com seu plano,{" "}
        <span>no caso do plano avançado até 25 fretes</span>... <br />E no{" "}
        <Link to="/cliente_page">Perfil</Link> o cliente pode editar até 2 vezes
        o documento (frete), e na mesma sessão o cliente pode deletar os fretes
        postados, porém para o processo de exclusão acontecer leva 30 minutos, o
        processo é o mesmo para fretes marcados como concluído, mas quando
        concluído o cliente pode adicionar anotações, essas anotações serão
        salvas no banco de dados e estão disponíveis para o cliente caso queira
        adicionar alguma anotação referente ao processo de entrega.{" "}
      </>
    ),
    descriptionClass: "advanced",
    urlLinkPlan: "avançado",
    priceId: "price_1NdbhgJurT2bp9vzp3CRcOcl",
  },

  {
    plan: {
      plan: <>Plano Premium</>,
      planPrice: <>150R$ / MES</>,
    },
    text: (
      <>
        No plano premium o assinante pode postar até 37 fretes, todos os fretes
        estarão disponíveis para a visualização de todos os cliente de forma
        gratuita!
        <br />
        As regras dos planos é simples, na area{" "}
        <Link to="/create-frete">Publicar Frete</Link> o cliente tem acesso a
        serviço de postagem, onde ele pode postar de acordo com seu plano,{" "}
        <span>no caso do plano premium até 37 fretes</span>... <br />E no{" "}
        <Link to="/cliente_page">Perfil</Link> o cliente pode editar até 2 vezes
        o documento (frete), e na mesma sessão o cliente pode deletar os fretes
        postados, porém para o processo de exclusão acontecer leva 30 minutos, o
        processo é o mesmo para fretes marcados como concluído, mas quando
        concluído o cliente pode adicionar anotações, essas anotações serão
        salvas no banco de dados e estão disponíveis para o cliente caso queira
        adicionar alguma anotação referente ao processo de entrega.{" "}
      </>
    ),
    descriptionClass: "premium",
    urlLinkPlan: "premium",
    priceId: "price_1NdbipJurT2bp9vzcUj3xIfy",
  },
];
