import { useSelector } from "react-redux";
import { styled } from "styled-components";

const WarningBallon = ({ totalFretes, directions }) => {
  const { userData } = useSelector((store) => store.userData);
  const maxNum = setNumberOfDocumentAcordingToPlan(userData);
  return (
    <Wrapper>
      <div className="total_container">
        <div className="warn_ballon">
          <p className="text__content-onClick">
            Espaços disponível: {totalFretes}/{maxNum}
          </p>
        </div>
        <h1 className="total" onClick={handleClick}>
          {directions.text} {totalFretes}
        </h1>
      </div>
    </Wrapper>
  );
};
function setNumberOfDocumentAcordingToPlan(userData) {
  let maxNum = 0;
  switch (userData.signaturePlan) {
    case "basic":
      maxNum = 17;
      break;
    case "advanced":
      maxNum = 25;
      break;
    case "premium":
      maxNum = 37;
      break;
    default:
      return maxNum;
  }
}
function handleClick() {
  document?.querySelector(".warn_ballon")?.classList?.toggle("show_the-ballon");
}
const Wrapper = styled.div`
  position: absolute;
  .total_container {
    height: 100%;
    display: grid;
    position: relative;
    place-content: center;
    background-color: transparent;
  }
  .total {
    font-size: 1.5rem;
    display: grid;
  }

  .total::before {
    content: "?";
    display: grid;
    place-content: center;
    place-self: self-end;
    font-size: 10px;
    left: 24rem;
    top: 0;
    border-radius: 50%;
    background-color: var(--grey-300);
    height: 1.2rem;
    cursor: pointer;
    width: 1.2rem;
  }
  .warn_ballon {
    display: grid;
    place-content: center;
    visibility: hidden;
    padding: 1rem;
    opacity: 0;
    position: absolute;
    background-color: var(--grey-300);
    height: 8rem;
    bottom: 4rem;
    right: 1.5rem;
    transition: all 0.3s ease;
    clip-path: polygon(
      0% 0%,
      100% 0%,
      100% 75%,
      55% 75%,
      50% 100%,
      45% 75%,
      0% 75%
    );
    .text__content-onClick {
      margin-bottom: 2rem;
    }
  }
  .show_the-ballon {
    visibility: visible;
    opacity: 1;
  }
`;
export default WarningBallon;
