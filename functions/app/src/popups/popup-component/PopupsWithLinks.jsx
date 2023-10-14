import { Link, useNavigate } from "react-router-dom";
import LinksForPopups from "./LinksForPopups";

const PopupsWithLinks = ({ link }) => {
  const navigate = useNavigate();

  return (
    <div className="popup__links-container">
      <Link
        type="button"
        onClick={() => {
          document.querySelector(".popup_content").classList.remove("show");
          document
            .querySelector(".popup_content-display-links")
            .classList.remove("show_contente");
          setTimeout(() => {
            navigate("/produto_assinatura");
          }, 500);
        }}
        className="close"
        id="cl"
      >
        &times;
      </Link>
      <div className="content__description">
        <LinksForPopups link={link} />
      </div>
    </div>
  );
};

export default PopupsWithLinks;
