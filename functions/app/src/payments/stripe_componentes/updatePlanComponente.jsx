import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Outlet, useParams } from "react-router-dom";
import {
  handleDataCollector,
  updateSignature,
} from "../../feature/subscription/subscriptionSlice";
import { Wrapper } from "../../assets/Wrappers/updatePlanWrapper";
import { getUser } from "../../feature/userFromDataSlice/userDataSlice";
import { PopupWarnUserAboutHisCurrentPlan } from "../../popups/popup-component/PopupWarnUserAboutHisCurrentPlan";
import { popupActionWarnUser } from "../../utils/popupActionFunc";
const UpdatePlanComponente = () => {
  const [alreadyOnThisPlan, setAlreadyOnThisPlan] = useState(false);
  const { password, isLoading } = useSelector((store) => store.subscription);
  let eventType;
  const { userData } = useSelector((store) => store.userData);
  let { priceId } = useParams();
  const query = new URLSearchParams(window.location.search);

  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.get("plan") === userData?.signaturePlan) {
      setAlreadyOnThisPlan(true);
      setTimeout(() => {
        popupActionWarnUser(true);
      });
    } else {
      dispatch(
        updateSignature({
          password,
          priceId,
          subscriptionID: userData.subscriptionID._id,
          eventType: query.get("plan"),
        })
      );
    }
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    dispatch(handleDataCollector({ name, value }));
  };
  const handleClick = () => {};
  const handleClickForReverseCancel = () => {};
  useEffect(() => {
    if (!userData) {
      dispatch(getUser());
    }
  }, []);
  return (
    <Wrapper>
      {alreadyOnThisPlan && (
        <PopupWarnUserAboutHisCurrentPlan userData={userData} />
      )}
      {userData?.subscriptionID?.at_canceling_process ? (
        <Link
          className="at_delete_process"
          to={`/client_page/pagamentos?att_page=atualizar`}
          onClick={handleClickForReverseCancel}
        >
          Recuperar Assinatura
        </Link>
      ) : (
        <>
          <Outlet
            context={{
              priceId,
              password,
              isLoading,
              eventType,
              userData,
              alreadyOnThisPlan,
              handleClick,
              handleChange,
              handleSubmit,
            }}
          />
        </>
      )}
    </Wrapper>
  );
};

export default UpdatePlanComponente;
