import { Wrapper as PopupWrapper } from "../assets/Wrappers/PopupsWrapper";
import { useOutletContext } from "react-router-dom";
import { popupDisplayLinks } from "../utils/popupDisplay";
import { description } from "../utils/popupsEnum";
import { PopupsWithLinks } from "./popup-component";

let linkTowhereNavigate;
const Popup = () => {
  let query = new URLSearchParams(window.location.search);
  // if (query.get("popup") === "cadastro") {
  //   linkTowhereNavigate = "/produto_assinatura";
  //   popupDisplay({ linkTowhereNavigate });
  //   return (

  //           <SingIn
  //             description={description}
  //             linkTowhereNavigate={linkTowhereNavigate}
  //           />
  //   );
  // }
  // if (query.get("popup") === "mensagem") {k0
  // popupDisplayMessageForm({ linkTowhereNavigate });
  // return (
  //   <PopupWrapper>
  //     <div className="popup_content">
  //       <div className="popup_content-display-form-message">
  //         <MessageForm />
  //       </div>
  //     </div>
  //   </PopupWrapper>
  // );
  // }k0
  if (query.get("assinante") === "sim") {
    const { link } = useOutletContext();
    linkTowhereNavigate = "/produto_assinatura";
    popupDisplayLinks({ linkTowhereNavigate });
    return (
      <PopupWrapper>
        <div className="popup_content-links">
          <div className="popup_content-display-links">
            <PopupsWithLinks
              description={description[0].alreadySubscribe}
              link={link}
            />
          </div>
        </div>
      </PopupWrapper>
    );
  }
};

export default Popup;
