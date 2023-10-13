/* eslint-disable react/prop-types */
import { styled } from "styled-components";
import {
  addSendAnimations,
  addSucceededAnimation,
  removeSucceededAnimation,
} from "../utils/BtnsAddClassAnimation";
import CheckMarksAnimations from "./CheckMarksAnimations";
import { useDispatch } from "react-redux";
const Btn = ({
  btnBorder,
  type,
  text,
  loadingText,
  handleClick,
  loading,
  width,
  height,
  margin,
  backgroundColor,
  btn_background,
  givemeCheckMark,
  msg,
}) => {
  console.log(loading);
  const dispatch = useDispatch();
  if (handleClick === "submitType") {
    handleClick = () => {
      console.log();
    };
  }
  if (msg === "success!") {
    addSucceededAnimation({});
    removeSucceededAnimation({ dispatch });
  }

  addSendAnimations(loading);

  return (
    <WrapperAnimationSpin className={`btn__animated-content`}>
      <button
        className="animated__btn"
        type={type}
        style={{
          minWidth: width,
          height: height,
          margin: margin,
          backgroundColor: backgroundColor,
          border: btnBorder,
        }}
        disabled={loading}
        onClick={handleClick}
      >
        <div
          style={{ background: btn_background }}
          className="btn__background"
        ></div>
        {/* opional check mark content */}
        {givemeCheckMark && <CheckMarksAnimations />}
        <p className="btn_text">{loading ? `${loadingText}...` : text}</p>
        <span className={`request__animations-animate`}></span>
      </button>
    </WrapperAnimationSpin>
  );
};
export const WrapperAnimationSpin = styled.div`
  position: absolute;
  position: relative;
  display: grid;
  .request__animations-animate {
    display: none;
  }

  .request__animations-animate-spin {
    animation: spin 1s linear infinite;

    @keyframes spin {
      from {
        transform: rotate(0deg);
      }

      to {
        transform: rotate(360deg);
      }
    }
  }
  .animated__btn {
    display: grid;
    padding: 0 1rem 0 1rem;
    overflow: hidden;
    backface-visibility: hidden;
    position: relative;
    grid-template-columns: auto unset;
    border: 1px solid var(--primary-blue-500);
    place-self: center;
    background: var(--primary-blue-500);
    border-radius: 9px;
    transition: all 0.1s ease-in-out;
    box-shadow: 0 1rem 5px rgba(0, 0, 0, 0.2);
    z-index: 0;
    .btn_text {
      margin-top: 0;
      letter-spacing: 2px;
      place-self: center;
      color: var(--white);
    }
    .submit__succeeded {
      visibility: hidden;
      opacity: 0;
    }
  }
  .set-colum {
    grid-template-columns: auto auto;
  }
  .set_animation-on-success {
    display: grid;
  }
  .animated__btn:hover {
    box-shadow: 0 1rem 1rem rgba(0, 0, 0, 0.4);
    transform: scale(1.007);
  }
  .animated__btn:active {
    transform: scale(1);
    box-shadow: 0 1rem 1rem rgba(0, 0, 0, 0.2);
  }

  .request__animations-animate-spin {
    display: block;
    margin: auto;
    overflow: hidden;
    backface-visibility: hidden;
    border: 3px solid var(--white);
    border-radius: 50%;
    border-top: 3px solid var(--grey-400);
    width: 2rem;
    height: 2rem;
  }
  .btn__background {
    background: linear-gradient(
      to right,
      rgba(0, 116, 212, 0) 0%,
      rgb(82, 132, 194) 50%,
      rgba(0, 116, 212, 0) 100%
    );
    z-index: 10000;
    position: absolute;
    width: 10rem;
    height: 100%;
    animation: silver-slide 3s infinite ease;
    opacity: 0.5;
    @keyframes silver-slide {
      0% {
        transform: translateX(-700px);
      }
      100% {
        transform: translateX(700px);
      }
    }
  }
`;
export default Btn;
