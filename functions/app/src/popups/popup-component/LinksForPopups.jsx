import { Link } from "react-router-dom";

const LinksForPopups = ({ link }) => {
  return (
    <>
      Olá, aparentemente o senhor(a) já tem uma inscrição ativa, para
      conseguirmos modificar o plano atual peço que vá até esse{" "}
      <Link className="link__for_update-sub" to={link}>
        link
      </Link>
    </>
  );
};

export default LinksForPopups;
