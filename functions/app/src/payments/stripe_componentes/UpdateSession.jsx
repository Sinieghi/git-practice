import { styled } from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import {
  cancelSignature,
  handleDataCollector,
  updateSignature,
} from "../../feature/subscription/subscriptionSlice";
import { useClienteContext } from "../../Pages/ClientePage";
import ReverseCancelStatus from "./ReverseCancelStatus";
import CancelSignature from "./CancelSignature";
import UpdatePaymentMethods from "./UpdatePaymentMethods";
let stopForAside = document.querySelector("body");

const UpdateSession = () => {
  const { userData } = useClienteContext();
  const { password, isLoading } = useSelector((store) => store.subscription);
  const query = new URLSearchParams(window.location.search);
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (userData?.subscriptionID?.at_canceling_process) {
      dispatch(
        updateSignature({
          password,
          subscriptionID: userData.subscriptionID._id,
        })
      );
    } else {
      dispatch(
        cancelSignature({
          password: password,
          subscriptionID: userData.subscriptionID._id,
        })
      );
    }
  };
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    dispatch(handleDataCollector({ name, value }));
  };
  const handleClick = () => {
    stopForAside.classList.remove("stop-for-aside");
  };

  switch (query.get("status")) {
    case "recuperar":
      return (
        <div>
          <Wrapper className="form">
            <ReverseCancelStatus
              handleSubmit={handleSubmit}
              handleChange={handleChange}
              handleClick={handleClick}
              password={password}
              isLoading={isLoading}
            />
          </Wrapper>
        </div>
      );

    case "cancelar":
      return (
        <div className="height-adjust-center-content">
          <Wrapper className="form">
            <CancelSignature
              handleSubmit={handleSubmit}
              handleChange={handleChange}
              handleClick={handleClick}
              password={password}
              isLoading={isLoading}
            />
          </Wrapper>
        </div>
      );

    case "pagamento":
      return (
        <div className="height-adjust-center-content">
          <Wrapper className="form">
            <UpdatePaymentMethods
              handleSubmit={handleSubmit}
              handleChange={handleChange}
              handleClick={handleClick}
              password={password}
              isLoading={isLoading}
            />
          </Wrapper>
        </div>
      );
  }
};

const Wrapper = styled.section`
  position: relative;
  width: 40%;
  height: 30rem;
  padding: 3rem;
  grid-row: 1 / 5;
  margin: 0 auto;
  margin-top: 15rem;
  form {
    width: 100%;
    display: grid;
    .inline-content {
      margin-top: 2rem;
      display: flex;
      place-self: center;
      align-items: center;
      a,
      .btn-del {
        border: transparent;
        border-radius: 3px;
        width: 8rem;
        height: 4rem;
        font-size: 1.4rem;
        text-align: center;
      }
      .btn-del {
        background-color: var(--red-dark);
        margin-right: 2rem;
      }
      a {
        background-color: var(--clr-primary-orange-3);
        margin-left: 2rem;
        padding: 11px;
      }
    }
    .form-box {
      width: 100%;
      display: grid;
      input {
        width: 100%;
        height: 5rem;
        place-self: center;
        margin-top: 5rem;
      }
      label {
        font-weight: 300;
        font-size: 1.7rem;
      }
    }
  }
  @media (max-width: 700px) {
    width: 100%;
  }
`;
export default UpdateSession;
