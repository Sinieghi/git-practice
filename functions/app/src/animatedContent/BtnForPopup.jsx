import React from "react";
import { styled } from "styled-components";

import { useDispatch } from "react-redux";
import CheckMarkAnimatedPopup from "./CheckMarkAnimatedPopup";
import {
  addSendAnimationsPopup,
  addSucceededAnimationPopup,
  removeSucceededAnimationPopup,
} from "../utils/BtnAddClassAnimPop";
const BtnForPopup = ({
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
  const dispatch = useDispatch();
  if (handleClick === "submitType") {
    handleClick = () => {};
  }
  if (msg === "success!") {
    addSucceededAnimationPopup();
    removeSucceededAnimationPopup({ dispatch });
  }
  addSendAnimationsPopup(loading);
  return (
    <WrapperAnimationSpin className={`btn__animated-content-popup`}>
      <button
        className="animated__btn-popup"
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
          className="btn__background-popup"
        ></div>
        {/* opional check mark content */}
        {givemeCheckMark && <CheckMarkAnimatedPopup />}
        <p className="btn_text-popup">{loading ? `${loadingText}...` : text}</p>
        <span className={`request__animations-animate-popup`}></span>
      </button>
    </WrapperAnimationSpin>
  );
};
export const WrapperAnimationSpin = styled.div`
  position: absolute;
  position: relative;
  display: grid;
  .request__animations-animate-popup {
    display: none;
  }

  .request__animations-animate-popup-spin {
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
  .animated__btn-popup {
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
    .btn_text-popup {
      margin-top: 0;
      letter-spacing: 2px;
      place-self: center;
      color: var(--white);
    }
    .submit__succeeded-popup {
      visibility: hidden;
      opacity: 0;
    }
  }
  .set-colum-popup {
    grid-template-columns: auto auto;
  }
  .set_animation-on-success-popup {
    display: grid;
  }
  .animated__btn-popup:hover {
    box-shadow: 0 1rem 1rem rgba(0, 0, 0, 0.4);
    transform: scale(1.007);
  }
  .animated__btn-popup:active {
    transform: scale(1);
    box-shadow: 0 1rem 1rem rgba(0, 0, 0, 0.2);
  }

  .request__animations-animate-popup-spin {
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
  .btn__background-popup {
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
export default BtnForPopup;
