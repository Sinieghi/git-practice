import { useDispatch, useSelector } from "react-redux";
import Btn from "../../animatedContent/Btn";
import { setManyToConcluded } from "../../feature/freteSlice/freteSlice";
import { popupActionSetManyToConcluded } from "../../utils/popupActionFunc";

export const PopupBeforeActionSetManyConcluded = () => {
  const { isLoading } = useSelector((store) => store.frete);
  const dispatch = useDispatch();

  return (
    <div className="popup_content-freight">
      <div className="popup_content-freight-act">
        <button
          type="button"
          onClick={() => {
            popupActionSetManyToConcluded(false);
          }}
          className="close"
          id="cl"
        >
          &times;
        </button>
        <h3 className="action-description">
          Mover essa pagina para o histórico?
        </h3>
        <Btn
          type="button"
          loadingText="Processando"
          text="Confirmar"
          height="5rem"
          width="10rem"
          margin="1rem 0 0 0"
          backgroundColor="var(--clr-primary-orange-2)"
          btn_background="var(--clr-primary-orange-2)"
          loading={isLoading}
          handleClick={() => {
            dispatch(setManyToConcluded());
          }}
        />
      </div>
    </div>
  );
};
